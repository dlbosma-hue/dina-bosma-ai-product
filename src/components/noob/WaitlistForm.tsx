import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { NoobContent } from "@/lib/ainoob-content";
import { useLanguage } from "@/lib/i18n";
import { signupConsent, validateSignupFields, type ClubRunde, type CourseRunde, type SignupSource } from "@/lib/club-signup";
export type { SignupSource } from "@/lib/club-signup";

type Status = "idle" | "sending" | "done" | "error";
const copy = {
  de: {
    name: "Vorname", email: "E-Mail-Adresse",
    errName: "Bitte gib deinen Namen ein.", errEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
    errConsent: "Bitte setze den Haken, damit ich dir schreiben darf.",
    note: "Kein Spam. Jederzeit abmeldbar.", roundLabel: "Wähle deine Runde",
    rounds: { beta: "Runde 1 Beta-Community", frueh: "Runde 2 Frühe Warteliste" },
    done: {
      checkliste: "Danke, du bist dabei. Ich melde mich per E-Mail mit deinem Starter-Kit bei dir.",
      beta: "Danke! Ich melde mich persönlich bei dir.",
      frueh: "Danke, du bist eingetragen. Ich melde mich per E-Mail bei dir.",
      editGuide: "Danke! Dein Edit-Guide ist bereit.",
    },
    pdf: "PDF öffnen",
  },
  en: {
    name: "First name", email: "Email address",
    errName: "Please enter your name.", errEmail: "Please enter a valid email address.",
    errConsent: "Please tick the box so I'm allowed to email you.",
    note: "No spam. Unsubscribe any time.", roundLabel: "Choose your round",
    rounds: { beta: "Round 1 Beta Community", frueh: "Round 2 early waitlist" },
    done: {
      checkliste: "Thank you, you're in. I'll email you with your starter kit.",
      beta: "Thank you! I'll get back to you personally.",
      frueh: "Thank you, you're signed up. I'll get in touch by email.",
      editGuide: "Thank you! Your Edit Guide is ready.",
    },
    pdf: "Open PDF",
  },
};
const inputCls = "w-full rounded-full border border-foreground/50 bg-background px-5 py-3 text-base outline-none transition-colors placeholder:text-foreground focus-visible:ring-2 focus-visible:ring-ring";
const radioCls = "mt-0.5 h-5 w-5 shrink-0 accent-noob-terracotta-ink focus-visible:ring-2 focus-visible:ring-ring";

type Props = {
  t: NoobContent;
  source: SignupSource;
  submitLabel?: string;
  note?: string;
  runde?: ClubRunde;
  onRundeChange?: (runde: CourseRunde) => void;
  showRounds?: boolean;
};

export function WaitlistForm({ t, source, submitLabel, note, runde, onRundeChange, showRounds = false }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [internalRunde, setInternalRunde] = useState<CourseRunde>("beta");
  const [errors, setErrors] = useState({ name: false, email: false, business: false, consent: false });
  const submissionId = useRef<string | null>(null);
  const { lang } = useLanguage();
  const c = copy[lang];
  const consent = signupConsent[lang];
  const id = `signup-${source}-${runde ?? "standard"}`;
  const selectedRunde = runde ?? internalRunde;
  const editGuide = source === "community" && selectedRunde === "edit-guide";
  const consentText = editGuide ? consent.editGuide : consent[source];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = editGuide ? "" : String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const errs = validateSignupFields({ name, email, consent: !!data.get("consent") }, source, selectedRunde);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      const first = errs.name ? "name" : errs.email ? "email" : "consent";
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    const eventId = submissionId.current ?? crypto.randomUUID();
    submissionId.current = eventId;
    setStatus("sending");
    try {
      const res = await fetch("/api/public/waitlist", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: eventId, name, email, business: "", pain: "", source, lang,
          ...(source === "community" ? { runde: selectedRunde } : {}),
          consent: true, consent_text: consentText + consent.privacy + ".", consent_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Signup failed");
      form.reset();
      setStatus("done");
    } catch { submissionId.current = null; setStatus("error"); }
  }

  if (status === "done") {
    const message = source === "checkliste" ? c.done.checkliste : selectedRunde === "beta" ? c.done.beta : selectedRunde === "frueh" ? c.done.frueh : c.done.editGuide;
    return (
      <div role="status" className="rounded-2xl bg-noob-cream p-6 text-base text-foreground">
        <p>{message}</p>
        {editGuide && (
          <a href="/downloads/reels-schneiden-mit-claude.pdf" className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            {c.pdf}
          </a>
        )}
      </div>
    );
  }
  const errorText = (field: "name" | "email" | "consent", message: string) => errors[field] && <span id={`${id}-${field}-err`} className="mt-1 block text-sm font-medium text-destructive">{message}</span>;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {showRounds && !editGuide && (
        <fieldset>
          <legend className="mb-2 text-sm font-semibold">{c.roundLabel}</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {(["beta", "frueh"] as const).map((option) => (
              <label key={option} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl bg-noob-cream px-4 py-3 text-sm font-medium">
                <input
                  type="radio"
                  name="runde"
                  value={option}
                  checked={selectedRunde === option}
                  onChange={() => {
                    if (onRundeChange) onRundeChange(option);
                    else setInternalRunde(option);
                  }}
                  className={radioCls}
                />
                <span>{c.rounds[option]}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <div className={`grid gap-4 ${editGuide ? "" : "sm:grid-cols-2"}`}>
        {!editGuide && (
          <label className="block" htmlFor={`${id}-name`}>
            <span className="mb-1.5 block text-sm">{c.name}</span>
            <input id={`${id}-name`} name="name" required maxLength={100} autoComplete="given-name" aria-invalid={errors.name || undefined} aria-describedby={errors.name ? `${id}-name-err` : undefined} className={inputCls} />
            {errorText("name", c.errName)}
          </label>
        )}
        <label className="block" htmlFor={`${id}-email`}>
          <span className="mb-1.5 block text-sm">{c.email}</span>
          <input id={`${id}-email`} type="email" name="email" required maxLength={254} autoComplete="email" aria-invalid={errors.email || undefined} aria-describedby={errors.email ? `${id}-email-err` : undefined} className={inputCls} />
          {errorText("email", c.errEmail)}
        </label>
      </div>
      <label className="flex gap-3 text-sm leading-relaxed" htmlFor={`${id}-consent`}>
        <input id={`${id}-consent`} type="checkbox" name="consent" required aria-invalid={errors.consent || undefined} aria-describedby={errors.consent ? `${id}-consent-err` : undefined} className={radioCls} />
        <span>{consentText}<Link to="/datenschutz" className="underline underline-offset-2">{consent.privacy}</Link>.</span>
      </label>
      {errorText("consent", c.errConsent)}
      <div className="flex flex-col gap-2">
        <Button type="submit" disabled={status === "sending"} className="h-auto min-h-12 w-fit max-w-full whitespace-normal rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-none hover:bg-primary/90">
          {status === "sending" ? t.sending : (submitLabel ?? t.submit)}
        </Button>
        {(note ?? c.note) && <span className="text-sm">{note ?? c.note}</span>}
      </div>
      {status === "error" && <p role="alert" className="text-sm text-destructive">{t.error}</p>}
    </form>
  );
}
