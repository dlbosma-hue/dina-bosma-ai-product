import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { NoobContent } from "@/lib/ainoob-content";
import { useLanguage } from "@/lib/i18n";

type Status = "idle" | "sending" | "done" | "error";
export type SignupSource = "checkliste" | "waitlist" | "starterset";

const copy = {
  de: {
    name: "Vorname",
    email: "E-Mail-Adresse",
    consentA: "Ich möchte den AI-Noob-Club-Newsletter bekommen, etwa eine E-Mail pro Woche. Ich kann mich jederzeit abmelden. Mehr dazu in der ",
    consentLink: "Datenschutzerklärung",
    note: "Kein Spam. Jederzeit abmeldbar.",
    done: "Fast geschafft. Bitte bestätige deine E-Mail-Adresse. Wir haben dir eine E-Mail geschickt.",
  },
  en: {
    name: "First name",
    email: "Email address",
    consentA: "I'd like to get the AI Noob Club newsletter, about one email a week. I can unsubscribe at any time. More in the ",
    consentLink: "privacy policy",
    note: "No spam. Unsubscribe any time.",
    done: "Almost done. Please confirm your email address. We sent you an email.",
  },
};

const inputCls =
  "w-full rounded-full border border-border/70 bg-background/70 px-5 py-3 text-base outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground/50 focus-visible:ring-2 focus-visible:ring-ring";

/** The one Club signup form. Stores entries in the existing waitlist (Formspree). */
export function WaitlistForm({
  t,
  source = "waitlist",
  submitLabel,
}: {
  t: NoobContent;
  source?: SignupSource;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const { lang } = useLanguage();
  const c = copy[lang];
  const id = `signup-${source}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim().slice(0, 100);
    const email = String(data.get("email") ?? "").trim().slice(0, 255);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !data.get("consent")) return;
    data.set("name", name);
    data.set("email", email);
    data.set("consent", "yes");
    data.append("consent_text", c.consentA + c.consentLink + ".");
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
      <div role="status" className="rounded-2xl bg-noob-surface p-6 text-base text-foreground/85">
        {c.done}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block" htmlFor={`${id}-name`}>
          <span className="mb-1.5 block text-sm text-foreground/80">{c.name}</span>
          <input id={`${id}-name`} type="text" name="name" required maxLength={100} autoComplete="given-name" className={inputCls} />
        </label>
        <label className="block" htmlFor={`${id}-email`}>
          <span className="mb-1.5 block text-sm text-foreground/80">{c.email}</span>
          <input id={`${id}-email`} type="email" name="email" required maxLength={255} autoComplete="email" className={inputCls} />
        </label>
      </div>
      <label className="flex gap-3 text-sm leading-relaxed text-foreground/85" htmlFor={`${id}-consent`}>
        <input
          id={`${id}-consent`}
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-noob-navy,currentColor)] focus-visible:ring-2 focus-visible:ring-ring"
        />
        <span>
          {c.consentA}
          <Link to="/ai-noob-club/datenschutz" className="underline underline-offset-2">{c.consentLink}</Link>.
        </span>
      </label>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 w-fit items-center rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
        >
          {status === "sending" ? t.sending : (submitLabel ?? t.submit)}
        </button>
        <span className="text-sm text-foreground/70">{c.note}</span>
      </div>
      {status === "error" && <p className="text-sm text-destructive">{t.error}</p>}
    </form>
  );
}
