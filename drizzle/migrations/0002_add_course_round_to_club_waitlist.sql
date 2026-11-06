ALTER TABLE public.waitlist_submissions ADD COLUMN runde text;

ALTER TABLE public.waitlist_submissions
  ADD CONSTRAINT waitlist_submissions_runde_check
  CHECK (runde IS NULL OR runde IN ('beta', 'frueh', 'edit-guide'));

ALTER TABLE public.waitlist_submissions
  DROP CONSTRAINT waitlist_submissions_name_check,
  DROP CONSTRAINT waitlist_submissions_check;

ALTER TABLE public.waitlist_submissions
  ADD CONSTRAINT waitlist_submissions_name_check
  CHECK (char_length(name) <= 100 AND (runde = 'edit-guide' OR char_length(name) >= 1));

ALTER TABLE public.waitlist_submissions
  ADD CONSTRAINT waitlist_submissions_source_runde_check
  CHECK ((source = 'community' AND runde IN ('beta', 'frueh', 'edit-guide')) OR (source = 'checkliste' AND runde IS NULL)) NOT VALID;

CREATE OR REPLACE FUNCTION public.store_club_submission(p_data jsonb, p_ip_hash text) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE submission_id uuid := (p_data->>'id')::uuid;
BEGIN
 PERFORM pg_advisory_xact_lock(hashtextextended(p_ip_hash, 0));
 PERFORM pg_advisory_xact_lock(hashtextextended(lower(p_data->>'email'), 1));
 IF EXISTS (SELECT 1 FROM public.waitlist_submissions WHERE id = submission_id) THEN RAISE EXCEPTION 'duplicate_submission'; END IF;
 IF (SELECT count(*) FROM public.waitlist_submissions WHERE created_at > now() - interval '1 hour' AND (ip_hash = p_ip_hash OR email = lower(p_data->>'email'))) >= 5 THEN RAISE EXCEPTION 'rate_limit'; END IF;
 INSERT INTO public.waitlist_submissions (id,name,email,source,lang,business,pain,runde,consent,consent_text,consent_at,ip_hash)
 VALUES (submission_id,coalesce(p_data->>'name',''),lower(p_data->>'email'),p_data->>'source',p_data->>'lang',coalesce(p_data->>'business',''),coalesce(p_data->>'pain',''),p_data->>'runde',true,p_data->>'consent_text',(p_data->>'consent_at')::timestamptz,p_ip_hash);
 RETURN submission_id;
END;
$$;

REVOKE ALL ON FUNCTION public.store_club_submission(jsonb,text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.store_club_submission(jsonb,text) TO service_role;