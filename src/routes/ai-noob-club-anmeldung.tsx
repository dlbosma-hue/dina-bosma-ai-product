import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import badgeAsset from "@/assets/ai-noob-club-badge.png.asset.json";

export const Route = createFileRoute("/ai-noob-club-anmeldung")({
  component: SignupPage,
  head: () => ({
    meta: [
      { title: "Anmeldung | AI Noob Club by HUMINT" },
      {
        name: "description",
        content:
          "Melden Sie sich an: Workshop, 30-Minuten-Impuls oder Zwischen Intuition und Algorithmus. Sign up for AI Noob Club offers.",
      },
      { property: "og:title", content: "Anmeldung | AI Noob Club by HUMINT" },
      {
        property: "og:description",
        content: "Workshop, 30-Minuten-Impuls oder Kunst & KI. Jetzt anmelden.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const copy = {
  de: {
    title: "Jetzt anmelden.",
    lead: "Wählen Sie aus, wofür Sie sich anmelden möchten. Ich melde mich persönlich mit allen Details bei Ihnen.",
    choiceLabel: "Wofür möchten Sie sich anmelden?",
    choicePlaceholder: "Bitte auswählen",
    options: { workshop: "Workshop", impuls: "30-Minuten-Impuls", kunst: "Zwischen Intuition und Algorithmus" },
    name: "Name",
    email: "E-Mail",
    message: "Nachricht (optional)",
    messagePlaceholder: "Fragen, Wünsche, Wunschtermin ...",
    submit: "Anmelden",
    sending: "Wird gesendet ...",
    success: "Danke! Ihre Anmeldung ist eingegangen. Eine Bestätigung ist unterwegs.",
    error: "Das hat leider nicht geklappt. Bitte versuchen Sie es noch einmal.",
    privacy: "Kein Spam. Ihre Daten werden nur für diese Anmeldung genutzt.",
    back: "Zurück zum AI Noob Club",
    toggle: "EN",
  },
  en: {
    title: "Sign up now.",
    lead: "Choose what you would like to sign up for. I will get back to you personally with all the details.",
    choiceLabel: "What would you like to sign up for?",
    choicePlaceholder: "Please choose",
    options: { workshop: "Workshop", impuls: "30 Minute-check", kunst: "Art & AI: Between Intuition and Algorithm" },
    name: "Name",
    email: "Email",
    message: "Message (optional)",
    messagePlaceholder: "Questions, wishes, preferred date ...",
    submit: "Sign up",
    sending: "Sending ...",
    success: "Thank you! Your sign-up arrived. A confirmation is on its way.",
    error: "That did not work. Please try again.",
    privacy: "No spam. Your details are only used for this sign-up.",
    back: "Back to the AI Noob Club",
    toggle: "DE",
  },
} as const;

const input =
  "w-full rounded-2xl border border-border/70 bg-background/70 px-5 py-3 text-base outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground/50";

function SignupPage() {
  const { lang, setLang } = useLanguage();
  const t = copy[lang];
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const choice = String(data.get("choice") ?? "") as keyof typeof t.options;
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      choice,
      lang,
    };
    data.set("choice", copy.de.options[choice] ?? choice);
    data.append("_subject", `AI Noob Club Anmeldung: ${copy.de.options[choice] ?? choice}`);
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/maqkylpb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("bad response");
      try {
        await fetch("/api/public/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Formspree already recorded the sign-up
      }
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[oklch(0.975_0.018_78)] text-foreground">
      <header className="sticky top-0 z-40 border-b border-[oklch(0.34_0.14_260)]/10 bg-[oklch(0.975_0.018_78)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-2 md:px-10">
          <Link to="/ai-noob-club" className="flex items-center gap-3">
            <img src={badgeAsset.url} alt="" aria-hidden className="h-12 w-12" width={556} height={556} />
            <span className="font-serif text-lg">AI Noob Club</span>
          </Link>
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="rounded-full border border-foreground/25 px-3 py-1 text-xs uppercase tracking-[0.14em] text-foreground/70 hover:border-foreground/60 hover:text-foreground"
          >
            {t.toggle}
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16">
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">{t.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">{t.lead}</p>

        <div className="mt-8 rounded-3xl bg-[oklch(0.925_0.035_22)]/50 p-6 md:p-8">
          {status === "done" ? (
            <p className="text-base text-foreground/85">{t.success}</p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm text-foreground/70">{t.choiceLabel}</span>
                <select name="choice" required defaultValue="" className={input}>
                  <option value="" disabled>
                    {t.choicePlaceholder}
                  </option>
                  {Object.entries(t.options).map(([k, v]) => (
                    <option key={k} value={k}>
                      {v}
                    </option>
                  ))}
                </select>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm text-foreground/70">{t.name}</span>
                  <input type="text" name="name" required className={input} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm text-foreground/70">{t.email}</span>
                  <input type="email" name="email" required className={input} />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm text-foreground/70">{t.message}</span>
                <textarea name="message" rows={4} placeholder={t.messagePlaceholder} className={input} />
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-[oklch(0.34_0.14_260)] px-7 py-3 text-base font-semibold text-[oklch(0.98_0.012_80)] hover:opacity-90 disabled:opacity-60"
                >
                  {status === "sending" ? t.sending : t.submit}
                </button>
                <span className="text-sm text-foreground/60">{t.privacy}</span>
              </div>
              {status === "error" && <p className="text-sm text-destructive">{t.error}</p>}
            </form>
          )}
        </div>

        <Link to="/ai-noob-club" className="mt-8 inline-block text-sm text-foreground/70 underline hover:text-foreground">
          {t.back}
        </Link>
      </section>
    </main>
  );
}
