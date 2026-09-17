import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { WaitlistForm } from "@/components/noob/WaitlistForm";

export const Route = createFileRoute("/ai-noob-club")({
  component: NoobClub,
  head: () => ({
    meta: [
      { title: "AI Noob Club, friendly AI learning by HUMINT" },
      {
        name: "description",
        content:
          "Workshops, online courses, and patient one-on-one coaching that teach practical AI to women in business, creators, and curious beginners. Join the waitlist.",
      },
      { property: "og:title", content: "AI Noob Club, friendly AI learning by HUMINT" },
      {
        property: "og:description",
        content:
          "Practical AI for women in business, creators, and beginners of any age. Enhance, never replace. Join the waitlist.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://humint.site/ai-noob-club" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://humint.site/ai-noob-club" }],
  }),
});

const palette = {
  "--noob-cream": "oklch(0.975 0.018 78)",
  "--noob-blush": "oklch(0.925 0.035 22)",
  "--noob-card": "oklch(0.955 0.028 40)",
  "--noob-accent": "oklch(0.55 0.09 145)",
  "--noob-accent-fg": "oklch(0.98 0.012 80)",
  "--noob-terracotta": "oklch(0.62 0.12 40)",
} as React.CSSProperties;

function NoobClub() {
  const { lang, setLang } = useLanguage();
  const t = noobContent[lang];

  return (
    <main
      style={palette}
      className="min-h-screen bg-[var(--noob-cream)] text-foreground"
    >
      {/* Header */}
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-6 md:px-10">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl tracking-tight">HUMINT</span>
          <span className="text-[11px] font-light text-foreground/60">{t.badge}</span>
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            aria-label={t.langAria}
            className="rounded-full border border-foreground/25 px-3 py-1 text-xs uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:border-foreground/60 hover:text-foreground"
          >
            {t.langLabel}
          </button>
          <a
            href="#waitlist"
            className="rounded-full bg-[var(--noob-accent)] px-4 py-2 text-xs font-semibold text-[var(--noob-accent-fg)] transition-opacity hover:opacity-90"
          >
            {t.submit}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--noob-blush)] opacity-70 blur-2xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-6 md:px-10 md:pb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-foreground/55">
            {t.badge}
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] md:text-7xl">{t.brand}</h1>
          <p className="mt-4 max-w-2xl font-serif text-2xl italic leading-snug text-[var(--noob-terracotta)] md:text-3xl">
            {t.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            {t.heroLead}
          </p>

          <div className="mt-8 rounded-3xl bg-[var(--noob-card)] p-6 md:p-8">
            <h2 className="mb-4 text-xs uppercase tracking-[0.24em] text-foreground/60">
              {t.heroFor}
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {t.forItems.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                  <span
                    aria-hidden
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--noob-accent)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="scroll-mt-24 bg-[var(--noob-blush)]/50">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.waitlistTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
            {t.waitlistLead}
          </p>
          <div className="mt-8 max-w-2xl">
            <WaitlistForm t={t} />
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-foreground/55">
          {t.offerEyebrow}
        </p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.offerTitle}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.offers.map((o) => (
            <article key={o.title} className="rounded-3xl bg-[var(--noob-card)] p-6">
              <h3 className="font-serif text-2xl leading-snug">{o.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{o.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--noob-card)]/60">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-foreground/55">
            {t.valuesEyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.valuesTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.values.map((v) => (
              <article
                key={v.title}
                className="rounded-3xl border border-foreground/10 bg-[var(--noob-cream)] p-6"
              >
                <h3 className="font-serif text-2xl leading-snug text-[var(--noob-terracotta)]">
                  {v.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting cross-link */}
      <section className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-12">
        <div className="rounded-3xl border border-foreground/15 p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div>
            <h2 className="font-serif text-2xl leading-snug">{t.consultingTitle}</h2>
            <p className="mt-2 max-w-xl text-base text-foreground/75">{t.consultingBody}</p>
          </div>
          <Link
            to="/"
            className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/40 px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-[var(--noob-cream)] md:mt-0"
          >
            {t.consultingCta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-foreground/65 md:px-10">
          <span>{t.footer}</span>
          <span className="flex gap-4">
            <Link to="/" className="hover:text-foreground">
              {t.backHome}
            </Link>
            <Link to="/impressum" className="hover:text-foreground">
              {t.imprint}
            </Link>
          </span>
        </div>
      </footer>
    </main>
  );
}
