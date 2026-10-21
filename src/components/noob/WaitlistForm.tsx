import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { NoobContent } from "@/lib/ainoob-content";
import { useLanguage } from "@/lib/i18n";

type Status = "idle" | "sending" | "done" | "error";
export type SignupSource = "checkliste" | "starterset" | "editguide";

const copy = {
  de: {
    name: "Vorname",
    email: "E-Mail-Adresse",
    consentA: {
      checkliste:
        "Schick mir die beiden Spickzettel per E-Mail. Ich möchte auch wissen, wann es im AI Noob Club weitergeht. Abmeldung jederzeit. Mehr dazu in der ",
      starterset:
        "Sag mir Bescheid, wenn die Content-Assistentin da ist. Abmeldung jederzeit. Mehr dazu in der ",
    },
    consentLink: "Datenschutzerklärung",
    note: "Kein Spam. Jederzeit abmeldbar.",
    errName: "Bitte gib deinen Vornamen ein.",
    errEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
    errConsent: "Bitte setze den Haken, damit ich dir schreiben darf.",
    done: {
      checkliste: "Danke, du bist dabei. Ich melde mich per E-Mail bei dir.",
      starterset: "Danke. Ich schreibe dir, sobald die Content-Assistentin da ist.",
    },
  },
  en: {
    name: "First name",
    email: "Email address",
    consentA: {
      checkliste:
        "Send me both cheat sheets by email. I'd also like to know when the AI Noob Club goes on. Unsubscribe any time. More in the ",
      starterset:
        "Let me know when the Content Assistant is ready. Unsubscribe any time. More in the ",
    },
    consentLink: "privacy policy",
    note: "No spam. Unsubscribe any time.",
    errName: "Please enter your first name.",
    errEmail: "Please enter a valid email address.",
    errConsent: "Please tick the box so I'm allowed to email you.",
    done: {
      checkliste: "Thank you, you're in. I'll write to you by email.",
      starterset: "Thank you. I'll write to you as soon as the Content Assistant is ready.",
    },
  },
};

const inputCls =
  "w-full rounded-full border border-foreground/50 bg-background px-5 py-3 text-base outline-none transition-colors placeholder:text-foreground focus:border-foreground/50 focus-visible:ring-2 focus-visible:ring-ring";

/** The one Club signup form. Stores entries in the existing waitlist (Formspree). */
export function WaitlistForm({
  t,
  source,
  submitLabel,
  note,
}: {
  t: NoobContent;
  source: SignupSource;
  submitLabel?: string;
  note?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean; consent?: boolean }>({});
  const { lang } = useLanguage();
  const c = copy[lang];
  const id = `signup-${source}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim().slice(0, 100);
    const email = String(data.get("email") ?? "").trim().slice(0, 255);
    const errs = { name: !name, email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), consent: !data.get("consent") };
    setErrors(errs);
    if (errs.name || errs.email || errs.consent) {
      const first = errs.name ? "name" : errs.email ? "email" : "consent";
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    data.set("name", name);
    data.set("email", email);
    data.set("consent", "yes");
    data.append("consent_text", c.consentA[source] + c.consentLink + ".");
    data.append("consent_at", new Date().toISOString());
    data.append("source", source);
    data.append("confirmed_at", "");
    data.append("lang", lang);
    data.append("_subject", `AI Noob Club signup (${source})`);
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/maqkylpb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("bad response");
      try {
        await fetch("/api/public/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, lang }),
        });
      } catch {
        // ignore: the signup itself already succeeded
      }
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl bg-noob-surface p-6 text-base text-foreground">
        {c.done[source]}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block" htmlFor={`${id}-name`}>
          <span className="mb-1.5 block text-sm text-foreground">{c.name}</span>
          <input id={`${id}-name`} type="text" name="name" required maxLength={100} autoComplete="given-name" aria-invalid={errors.name || undefined} aria-describedby={errors.name ? `${id}-name-err` : undefined} className={inputCls} />
          {errors.name && <span id={`${id}-name-err`} className="mt-1 block text-sm font-medium text-destructive">{c.errName}</span>}
        </label>
        <label className="block" htmlFor={`${id}-email`}>
          <span className="mb-1.5 block text-sm text-foreground">{c.email}</span>
          <input id={`${id}-email`} type="email" name="email" required maxLength={255} autoComplete="email" aria-invalid={errors.email || undefined} aria-describedby={errors.email ? `${id}-email-err` : undefined} className={inputCls} />
          {errors.email && <span id={`${id}-email-err`} className="mt-1 block text-sm font-medium text-destructive">{c.errEmail}</span>}
        </label>
      </div>
      <label className="flex gap-3 text-sm leading-relaxed text-foreground" htmlFor={`${id}-consent`}>
        <input
          id={`${id}-consent`}
          type="checkbox"
          name="consent"
          required
          aria-invalid={errors.consent || undefined}
          aria-describedby={errors.consent ? `${id}-consent-err` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-noob-navy,currentColor)] focus-visible:ring-2 focus-visible:ring-ring"
        />
        <span>
          {c.consentA[source]}
          <Link to="/datenschutz" className="underline underline-offset-2">{c.consentLink}</Link>.
        </span>
      </label>
      {errors.consent && <p id={`${id}-consent-err`} className="text-sm font-medium text-destructive">{c.errConsent}</p>}
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 w-fit items-center rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
        >
          {status === "sending" ? t.sending : (submitLabel ?? t.submit)}
        </button>
        <span className="text-sm text-foreground">{note ?? c.note}</span>
      </div>
      {status === "error" && <p role="alert" className="text-sm text-destructive">{t.error}</p>}
    </form>
  );
}
