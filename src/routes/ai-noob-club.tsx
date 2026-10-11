import { createFileRoute, Link } from "@tanstack/react-router";
import { noobClub } from "@/config/noobClub";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { WaitlistForm } from "@/components/noob/WaitlistForm";
import { NoobHeader, NoobFooter, btnPrimary } from "@/components/noob/NoobChrome";
import { startersetContent } from "@/lib/starterset-content";
import meetYourHostEnAsset from "@/assets/meet-your-host-en.png.asset.json";
import meetYourHostDeAsset from "@/assets/meet-your-host-de.png.asset.json";
import etsyProductAsset from "@/assets/etsy-99-prompts.png.asset.json";

export const Route = createFileRoute("/ai-noob-club")({
  component: NoobClub,
  head: () => ({
    meta: [
      { title: "AI Noob Club | KI-Basics für Unternehmerinnen" },
      {
        name: "description",
        content:
          "KI-Basics für Unternehmerinnen und Frauen mit kleinem Business. Starte Schritt für Schritt, ohne deine eigene Stimme zu verlieren.",
      },
      { property: "og:title", content: "AI Noob Club | KI-Basics für Unternehmerinnen" },
      {
        property: "og:description",
        content:
          "AI basics for women entrepreneurs and female leaders with a small business. Start step by step and keep your own voice.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://humint.site/ai-noob-club" },
      {
        property: "og:image",
        content:
          "https://humint.site/__l5e/assets-v1/705bb551-e3d7-4189-88a2-1beda7e2b627/ai-noob-club-preview.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://humint.site/__l5e/assets-v1/705bb551-e3d7-4189-88a2-1beda7e2b627/ai-noob-club-preview.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://humint.site/ai-noob-club" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" },
    ],
  }),
});



function NoobClub() {
  const { lang } = useLanguage();
  const t = noobContent[lang];
  const st = startersetContent[lang];
  const pillClass =
    "inline-flex items-center rounded-full bg-noob-rosa px-3 py-1 text-xs font-semibold text-noob-navy";
  const statusLabel = (s: "free" | "available" | "starter") =>
    s === "free"
      ? t.statusFree
      : s === "available"
        ? t.statusAvailable
        : noobClub.starterSet.status === "soon"
          ? t.statusSoon
          : t.statusAvailable;

  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-8 md:px-10 md:pb-16">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/60">
                {t.heroLabel}
              </p>
              <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
                {t.heroTitle}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">
                {t.heroSubline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#checkliste" className={btnPrimary}>{t.heroPrimary}</a>
                <a
                  href="#starterset"
                  className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-foreground/40 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-noob-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t.heroSecondary}
                </a>
              </div>
              <p className="mt-4 text-sm text-foreground/65">{t.heroFounder}</p>
            </div>
            <div className="relative z-0 mt-2 md:mt-0">
              <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-noob-rosa" />
              <img
                src={lang === "en" ? meetYourHostEnAsset.url : meetYourHostDeAsset.url}
                alt={t.meetYourHostAlt}
                className="relative w-full rounded-3xl"
                width={1168}
                height={1347}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section id="fuer-wen" className="bg-noob-rosa">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.forTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {t.forCards.map((card) => (
              <article key={card} className="rounded-3xl bg-noob-cream p-6 shadow-sm">
                <p className="text-base leading-relaxed text-foreground/85">{card}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-foreground/10 bg-noob-cream/70 p-6">
            <h3 className="font-serif text-2xl leading-snug">{t.notForTitle}</h3>
            <ul className="mt-3 space-y-2">
              {t.notForItems.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground/80">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="scroll-mt-24 bg-noob-rosa">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.shopTitle}</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/85">
            {t.shopParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <a
            href={noobClub.links.etsyShop}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.shopCta}
            <span aria-hidden>→</span>
          </a>

          {/* Featured product */}
          <article className="mt-10 grid items-center gap-8 rounded-3xl bg-noob-paper p-6 md:grid-cols-[minmax(0,20rem)_1fr] md:p-8">
            <img
              src={etsyProductAsset.url}
              alt={t.productAlt}
              className="w-full max-w-xs rounded-2xl"
              width={1264}
              height={1264}
            />
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-foreground/55">
                {t.productEyebrow}
              </p>
              <h3 className="font-serif text-3xl leading-snug">{t.productTitle}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{t.productBody}</p>
              <ul className="mt-4 space-y-2">
                {t.productBullets.map((b) => (
                  <li key={b} className="flex gap-3 text-base text-foreground/85">
                    <span
                      aria-hidden
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-noob-terracotta"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={noobClub.links.etsyKit}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.productCta}
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="scroll-mt-24 bg-noob-cream">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.waitlistTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
            {t.waitlistLead}
          </p>
          <div className="mt-8 grid items-center gap-8 md:grid-cols-[minmax(0,22rem)_1fr]">
            <img
              src={lang === "en" ? meetYourHostEnAsset.url : meetYourHostDeAsset.url}
              alt={t.meetYourHostAlt}
              className="w-full max-w-[22rem] rounded-2xl"
              width={1168}
              height={1347}
            />
            <WaitlistForm t={t} />
          </div>
        </div>
      </section>

      {/* Weg */}
      <section id="weg" className="scroll-mt-24 bg-noob-cream">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.pathTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
            {t.pathIntro}
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.pathCards.map((card, i) => (
              <article
                key={card.title}
                className="flex flex-col rounded-3xl border border-foreground/10 bg-noob-paper p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span aria-hidden className="font-serif text-5xl leading-none text-noob-terracotta">
                    {i + 1}
                  </span>
                  <span className={pillClass}>{statusLabel(card.status)}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-snug">{card.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-foreground/80">{card.body}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/55">
                  {t.learnLabel}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {card.learn.map((item) => (
                    <li key={item} className="flex gap-2 text-base leading-relaxed text-foreground/85">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-noob-terracotta" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex-1" />
                <a href={card.href} className={`${btnPrimary} mt-6`}>{card.cta}</a>
              </article>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {t.pathRows.map((row) => (
              <div
                key={row.text}
                className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-foreground/10 bg-noob-paper/70 px-5 py-3"
              >
                <p className="text-sm leading-relaxed text-foreground/80">{row.text}</p>
                <span className={pillClass}>{t.statusLater}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starter-Set teaser */}
      <section id="starterset" className="noob-dark scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{st.teaserTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">{st.teaserBody}</p>
          <p className="mt-3 text-base opacity-85">
            {noobClub.starterSet.status === "available" ? st.statusAvailable : st.statusSoon}
          </p>
          <Link to="/ai-noob-club/starter-set" className={`${btnPrimary} mt-8`}>{st.teaserCta}</Link>
        </div>
      </section>

      {/* Values */}
      <section className="bg-noob-cream">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-foreground/55">
            {t.valuesEyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.valuesTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {t.values.map((v) => (
              <article
                key={v.title}
                className="rounded-3xl border border-foreground/10 bg-noob-paper p-6"
              >
                <h3 className="font-serif text-2xl leading-snug text-noob-terracotta">
                  {v.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting cross-link */}
      <section className="noob-dark"><div className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-12">
        <div className="rounded-3xl border border-foreground/15 p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div>
            <h2 className="font-serif text-2xl leading-snug">{t.consultingTitle}</h2>
            <p className="mt-2 max-w-xl text-base text-foreground/75">{t.consultingBody}</p>
          </div>
          <Link
            to="/"
            className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/40 px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-noob-navy md:mt-0"
          >
            {t.consultingCta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div></section>

      <NoobFooter />
    </main>
  );
}
