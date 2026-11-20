import { Button } from "@/components/ui/button";
import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

import { links } from "@/config/links";
import { useLang } from "@/club-i18n/lang";
import { contactSchema, signupSchemaFor } from "@/lib/imported-club-forms";
import { Ext } from "./Ext";

type Errs = { firstName?: string | undefined; email?: string | undefined; consent?: string | undefined; name?: string | undefined; message?: string | undefined };

function Field({ id, label, error, children }: { id: string; label: string; error?: string | undefined; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="text-sm font-medium text-terra">
          {error}
        </p>
      )}
    </div>
  );
}

function Honeypot({ value, onChange, label }: { value: string; onChange: (v: string) => void; label: string }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        {label}
        <input tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} name="website" />
      </label>
    </div>
  );
}

function Consent({ id, checked, onChange, error, prefix }: { id: string; checked: boolean; onChange: (v: boolean) => void; error?: string | undefined; prefix: string }) {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          required
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 accent-terra"
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-ink">
          {prefix}
          <Ext href={links.datenschutz} className="club-link-brand">
            {t.form.consentLink}
          </Ext>
          {t.form.consentB}
        </label>
      </div>
      {error && <p className="text-sm font-medium text-terra">{error}</p>}
    </div>
  );
}

function Success({ text }: { text: string }) {
  return (
    <div role="status" className="flex items-start gap-3 rounded-[16px] bg-sky p-5 text-navy">
      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-terra" aria-hidden />
      <p className="font-medium text-navy">{text}</p>
    </div>
  );
}

export function SignupForm({
  list,
  note,
  successText,
  successAction,
  submitText,
  onGuideChange,
}: {
  list: "community" | "content-assistentin" | "starterpaket" | "edit-guide";
  note: string;
  successAction?: ReactNode | undefined;
  successText?: string | undefined;
  submitText?: string | undefined;
  onGuideChange?: ((list: "starterpaket" | "edit-guide") => void) | undefined;
}) {
  const { t, lang } = useLang();
  const f = t.form;
  const community = list === "community";
  const guide = list === "starterpaket" || list === "edit-guide";
  const c = t.community;
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");
  const [errs, setErrs] = useState<Errs>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const msg = (k?: string) =>
    k === "name" ? f.errName : k === "email" ? f.errEmail : k === "consent" ? f.errConsent : undefined;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (hp) return setStatus("error");
    const parsed = signupSchemaFor(list).safeParse({ firstName, email, consent });
    if (!parsed.success) {
      const next: Errs = {};
      for (const i of parsed.error.issues) next[String(i.path[0]) as keyof Errs] ??= msg(i.message);
      return setErrs(next);
    }
    setErrs({});
    setStatus("sending");
    try {
      const response = await fetch("/api/public/club-form", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "signup", ...parsed.data, list, lang }),
      });
      const result = await response.json() as { ok?: boolean };
      setStatus(response.ok && result.ok === true ? "done" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "done")
    return (
      <div className="flex flex-col gap-4">
        <Success text={successText ?? (community ? c.success : f.success)} />
        {successAction}
      </div>
    );
  const id = `su-${list}`;
  return (
    <form onSubmit={onSubmit} noValidate className="relative flex flex-col gap-5">
      <Honeypot value={hp} onChange={setHp} label={f.honeypot} />
      {guide && onGuideChange && (
        <Field id={`${id}-product`} label={f.guideProduct}>
          <select id={`${id}-product`} className="club-field" value={list} disabled={status === "sending"} onChange={(e) => {
            const value = e.target.value;
            if (value === "starterpaket" || value === "edit-guide") onGuideChange(value);
          }}>
            <option value="starterpaket">{f.starterProduct}</option>
            <option value="edit-guide">{f.editProduct}</option>
          </select>
        </Field>
      )}
      <Field id={`${id}-name`} label={community ? c.firstName : f.firstName} error={errs.firstName}>
        <input id={`${id}-name`} className="club-field" autoComplete="given-name" required={!community} value={firstName} onChange={(e) => setFirstName(e.target.value)} maxLength={80} aria-invalid={!!errs.firstName} />
      </Field>
      <Field id={`${id}-email`} label={f.email} error={errs.email}>
        <input id={`${id}-email`} type="email" required className="club-field" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} aria-invalid={!!errs.email} />
      </Field>
      <Consent id={`${id}-consent`} checked={consent} onChange={setConsent} error={errs.consent} prefix={community ? c.consentA : f.consentA} />
      <Button variant="ghost" type="submit" className={`club-btn-primary w-full uppercase tracking-[0.12em]${list === "content-assistentin" ? " club-btn-product-waitlist" : guide ? " club-btn-guide-signup" : ""}`} disabled={status === "sending"}>
        {status === "sending" ? f.sending : guide ? f.guideSubmit : submitText ?? (community ? c.cta : f.submit)}
      </Button>
      {status === "error" && <p role="alert" className="text-sm font-medium text-terra">{f.error}</p>}
      {note && <p className="text-center text-sm text-ink">{note}</p>}
    </form>
  );
}

export function ContactForm() {
  const { t, lang } = useLang();
  const f = t.form;
  const c = t.contact;
  const [v, setV] = useState({ name: "", email: "", topic: "workshop", message: "" });
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");
  const [errs, setErrs] = useState<Errs>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const msg = (k?: string) =>
    k === "fullName" ? f.errFullName : k === "email" ? f.errEmail : k === "message" ? f.errMessage : k === "consent" ? f.errConsent : undefined;
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (hp) return setStatus("done");
    const parsed = contactSchema.safeParse({ ...v, consent });
    if (!parsed.success) {
      const next: Errs = {};
      for (const i of parsed.error.issues) next[String(i.path[0]) as keyof Errs] ??= msg(i.message);
      return setErrs(next);
    }
    setErrs({});
    setStatus("sending");
    try {
      const response = await fetch("/api/public/club-form", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "contact", ...parsed.data, lang }),
      });
      setStatus(response.ok ? "done" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "done") return <Success text={c.success} />;
  return (
    <form onSubmit={onSubmit} noValidate className="relative flex flex-col gap-5">
      <Honeypot value={hp} onChange={setHp} label={f.honeypot} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="ct-name" label={c.name} error={errs.name}>
          <input id="ct-name" className="club-field" autoComplete="name" value={v.name} onChange={set("name")} maxLength={100} />
        </Field>
        <Field id="ct-email" label={c.email} error={errs.email}>
          <input id="ct-email" type="email" className="club-field" autoComplete="email" value={v.email} onChange={set("email")} maxLength={255} />
        </Field>
      </div>
      <Field id="ct-topic" label={c.topic}>
        <select id="ct-topic" className="club-field" value={v.topic} onChange={set("topic")}>
          {(Object.keys(c.topics) as (keyof typeof c.topics)[]).map((k) => (
            <option key={k} value={k}>{c.topics[k]}</option>
          ))}
        </select>
      </Field>
      <Field id="ct-msg" label={c.message} error={errs.message}>
        <textarea id="ct-msg" rows={6} className="club-field py-3" value={v.message} onChange={set("message")} maxLength={2000} />
      </Field>
      <Consent id="ct-consent" checked={consent} onChange={setConsent} error={errs.consent} prefix={f.contactConsentA} />
      <Button variant="ghost" type="submit" className="club-btn-primary w-full uppercase tracking-[0.12em] sm:w-auto sm:self-start" disabled={status === "sending"}>
        {status === "sending" ? f.sending : c.submit}
      </Button>
      {status === "error" && <p role="alert" className="text-sm font-medium text-terra">{f.error}</p>}
    </form>
  );
}
