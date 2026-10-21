import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { NoobContent } from "@/lib/ainoob-content";
import { useLanguage } from "@/lib/i18n";
import { signupConsent, validateSignupFields, type SignupSource } from "@/lib/club-signup";
export type { SignupSource } from "@/lib/club-signup";

type Status = "idle" | "sending" | "done" | "error";
const copy = {
  de: {
    name: "Vorname", communityName: "Name", email: "E-Mail-Adresse", communityEmail: "E-Mail",
    business: "Dein Business in einem Satz", pain: "Was nervt dich gerade am meisten?",
    errName: "Bitte gib deinen Namen ein.", errEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
    errBusiness: "Bitte beschreibe dein Business in einem Satz.", errConsent: "Bitte setze den Haken, damit ich dir schreiben darf.",
    note: "Kein Spam. Jederzeit abmeldbar.",
    done: { checkliste: "Danke, du bist dabei. Ich melde mich per E-Mail mit deinem Starterpaket bei dir.", community: "Danke, du bist auf der Liste. Ich melde mich bald persönlich bei dir." },
  },
  en: {
    name: "First name", communityName: "Name", email: "Email address", communityEmail: "Email",
    business: "Your business in one sentence", pain: "What annoys you most right now?",
    errName: "Please enter your name.", errEmail: "Please enter a valid email address.",
    errBusiness: "Please describe your business in one sentence.", errConsent: "Please tick the box so I'm allowed to email you.",
    note: "No spam. Unsubscribe any time.",
    done: { checkliste: "Thank you, you're in. I'll email you with your starter pack.", community: "Thank you, you're on the list. I'll get back to you personally soon." },
  },
};
const inputCls = "w-full rounded-full border border-foreground/50 bg-background px-5 py-3 text-base outline-none transition-colors placeholder:text-foreground focus-visible:ring-2 focus-visible:ring-ring";

export function WaitlistForm({ t, source, submitLabel, note }: { t: NoobContent; source: SignupSource; submitLabel?: string; note?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState({ name: false, email: false, business: false, consent: false });
  const submissionId = useRef<string | null>(null);
  const { lang } = useLanguage();
  const c = copy[lang];
  const consent = signupConsent[lang];
  const id = `signup-${source}`;
  const community = source === "community";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const pain = String(data.get("pain") ?? "").trim();
    const errs = validateSignupFields({ name, email, business, consent: !!data.get("consent") }, source);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      const first = errs.name ? "name" : errs.email ? "email" : errs.business ? "business" : "consent";
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    const eventId = submissionId.current ?? crypto.randomUUID();
    submissionId.current = eventId;
    setStatus("sending");
    try {
      const res = await fetch("/api/public/waitlist", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: eventId, name, email, business, pain, source, lang, consent: true,
          consent_text: consent[source] + consent.privacy + ".", consent_at: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Signup failed");
      form.reset();
      setStatus("done");
    } catch { submissionId.current = null; setStatus("error"); }
  }

  if (status === "done") return <div role="status" className="rounded-2xl bg-noob-surface p-6 text-base text-foreground">{c.done[source]}</div>;
  const errorText = (field: "name" | "email" | "business" | "consent", message: string) => errors[field] && <span id={`${id}-${field}-err`} className="mt-1 block text-sm font-medium text-destructive">{message}</span>;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block" htmlFor={`${id}-name`}>
          <span className="mb-1.5 block text-sm">{community ? c.communityName : c.name}</span>
          <input id={`${id}-name`} name="name" required maxLength={100} autoComplete={community ? "name" : "given-name"} aria-invalid={errors.name || undefined} aria-describedby={errors.name ? `${id}-name-err` : undefined} className={inputCls} />
          {errorText("name", c.errName)}
        </label>
        <label className="block" htmlFor={`${id}-email`}>
          <span className="mb-1.5 block text-sm">{community ? c.communityEmail : c.email}</span>
          <input id={`${id}-email`} type="email" name="email" required maxLength={254} autoComplete="email" aria-invalid={errors.email || undefined} aria-describedby={errors.email ? `${id}-email-err` : undefined} className={inputCls} />
          {errorText("email", c.errEmail)}
        </label>
      </div>
      {community && <>
        <label className="block" htmlFor={`${id}-business`}>
          <span className="mb-1.5 block text-sm">{c.business}</span>
          <input id={`${id}-business`} name="business" required maxLength={200} aria-invalid={errors.business || undefined} aria-describedby={errors.business ? `${id}-business-err` : undefined} className={inputCls} />
          {errorText("business", c.errBusiness)}
        </label>
        <label className="block" htmlFor={`${id}-pain`}>
          <span className="mb-1.5 block text-sm">{c.pain}</span>
          <textarea id={`${id}-pain`} name="pain" rows={3} maxLength={500} className={`${inputCls} rounded-2xl`} />
        </label>
      </>}
      <label className="flex gap-3 text-sm leading-relaxed" htmlFor={`${id}-consent`}>
        <input id={`${id}-consent`} type="checkbox" name="consent" required aria-invalid={errors.consent || undefined} aria-describedby={errors.consent ? `${id}-consent-err` : undefined} className="mt-0.5 h-5 w-5 shrink-0 accent-noob-navy focus-visible:ring-2 focus-visible:ring-ring" />
        <span>{consent[source]}<Link to="/datenschutz" className="underline underline-offset-2">{consent.privacy}</Link>.</span>
      </label>
      {errorText("consent", c.errConsent)}
      <div className="flex flex-col gap-2">
        <Button type="submit" disabled={status === "sending"} className="h-12 w-fit max-w-full whitespace-normal rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-none hover:bg-primary/90">
          {status === "sending" ? t.sending : (submitLabel ?? t.submit)}
        </Button>
        <span className="text-sm">{note ?? c.note}</span>
      </div>
      {status === "error" && <p role="alert" className="text-sm text-destructive">{t.error}</p>}
    </form>
  );
}
