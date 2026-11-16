ALTER TABLE public.waitlist_submissions ADD COLUMN signup_list text;
ALTER TABLE public.waitlist_submissions ADD CONSTRAINT waitlist_signup_list_check CHECK (signup_list IS NULL OR signup_list IN ('community','content-assistentin','starterpaket','edit-guide'));
CREATE UNIQUE INDEX club_signup_list_email_unique ON public.waitlist_submissions (lower(email),signup_list) WHERE signup_list IS NOT NULL;
CREATE TABLE public.contact_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100), email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
 topic text NOT NULL CHECK (topic IN ('workshop','zusammenarbeit','anderes')), message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
 lang text NOT NULL DEFAULT 'de' CHECK (lang IN ('de','en')), consent boolean NOT NULL CHECK (consent = true),
 consent_text text NOT NULL, consent_at timestamptz NOT NULL DEFAULT now(), ip_hash text NOT NULL
);
GRANT ALL ON public.contact_requests TO service_role;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.contact_requests FROM anon, authenticated;
CREATE OR REPLACE FUNCTION public.store_imported_club_form(p_data jsonb,p_ip_hash text) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE v_list text := p_data->>'list'; v_email text := lower(p_data->>'email');
BEGIN
 PERFORM pg_advisory_xact_lock(hashtextextended(p_ip_hash, 20));
 PERFORM pg_advisory_xact_lock(hashtextextended(v_email, 21));
 IF p_data->>'kind' = 'signup' AND EXISTS (SELECT 1 FROM public.waitlist_submissions WHERE lower(email)=v_email AND signup_list=v_list) THEN RETURN; END IF;
 IF (SELECT count(*) FROM public.waitlist_submissions WHERE created_at > now()-interval '1 hour' AND (ip_hash=p_ip_hash OR lower(email)=v_email)) + (SELECT count(*) FROM public.contact_requests WHERE created_at > now()-interval '1 hour' AND (ip_hash=p_ip_hash OR lower(email)=v_email)) >= 5 THEN RAISE EXCEPTION 'rate_limit'; END IF;
 IF p_data->>'kind' = 'signup' THEN
  IF v_list IS NULL OR v_list NOT IN ('community','content-assistentin','starterpaket','edit-guide') THEN RAISE EXCEPTION 'invalid_list'; END IF;
  INSERT INTO public.waitlist_submissions(name,email,source,runde,signup_list,lang,consent,consent_text,consent_at,ip_hash)
  VALUES(p_data->>'firstName',v_email,CASE WHEN v_list='starterpaket' THEN 'checkliste' ELSE 'community' END,CASE WHEN v_list='starterpaket' THEN NULL WHEN v_list='edit-guide' THEN 'edit-guide' WHEN v_list='content-assistentin' THEN 'beta' ELSE 'frueh' END,v_list,p_data->>'lang',true,p_data->>'consent_text',now(),p_ip_hash);
 ELSIF p_data->>'kind' = 'contact' THEN
  INSERT INTO public.contact_requests(name,email,topic,message,lang,consent,consent_text,ip_hash) VALUES(p_data->>'name',v_email,p_data->>'topic',p_data->>'message',p_data->>'lang',true,p_data->>'consent_text',p_ip_hash);
 ELSE RAISE EXCEPTION 'invalid_kind'; END IF;
END; $$;
REVOKE ALL ON FUNCTION public.store_imported_club_form(jsonb,text) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.store_imported_club_form(jsonb,text) TO service_role;