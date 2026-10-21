CREATE TABLE public.waitlist_submissions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 254),
 source text NOT NULL CHECK (source IN ('checkliste', 'community')),
 lang text NOT NULL DEFAULT 'de' CHECK (lang IN ('de','en')),
 business text NOT NULL DEFAULT '' CHECK (char_length(business) <= 200),
 pain text NOT NULL DEFAULT '' CHECK (char_length(pain) <= 500),
 consent boolean NOT NULL CHECK (consent = true),
 consent_text text NOT NULL,
 consent_at timestamptz NOT NULL,
 ip_hash text NOT NULL,
 formspree_delivered boolean NOT NULL DEFAULT false,
 confirmation_sent boolean NOT NULL DEFAULT false,
 CHECK (source <> 'community' OR char_length(business) > 0)
);
GRANT ALL ON public.waitlist_submissions TO service_role;
ALTER TABLE public.waitlist_submissions ENABLE ROW LEVEL SECURITY;
CREATE INDEX waitlist_submissions_rate_idx ON public.waitlist_submissions (ip_hash, created_at);
CREATE INDEX waitlist_submissions_email_idx ON public.waitlist_submissions (email, created_at);
CREATE FUNCTION public.store_club_submission(p_data jsonb, p_ip_hash text) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE submission_id uuid := (p_data->>'id')::uuid;
BEGIN
 PERFORM pg_advisory_xact_lock(hashtextextended(p_ip_hash, 0));
 PERFORM pg_advisory_xact_lock(hashtextextended(lower(p_data->>'email'), 1));
 IF EXISTS (SELECT 1 FROM public.waitlist_submissions WHERE id = submission_id) THEN RAISE EXCEPTION 'duplicate_submission'; END IF;
 IF (SELECT count(*) FROM public.waitlist_submissions WHERE created_at > now() - interval '1 hour' AND (ip_hash = p_ip_hash OR email = lower(p_data->>'email'))) >= 5 THEN RAISE EXCEPTION 'rate_limit'; END IF;
 INSERT INTO public.waitlist_submissions (id,name,email,source,lang,business,pain,consent,consent_text,consent_at,ip_hash)
 VALUES (submission_id,p_data->>'name',lower(p_data->>'email'),p_data->>'source',p_data->>'lang',coalesce(p_data->>'business',''),coalesce(p_data->>'pain',''),true,p_data->>'consent_text',(p_data->>'consent_at')::timestamptz,p_ip_hash);
 RETURN submission_id;
END;
$$;
REVOKE ALL ON FUNCTION public.store_club_submission(jsonb,text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.store_club_submission(jsonb,text) TO service_role;