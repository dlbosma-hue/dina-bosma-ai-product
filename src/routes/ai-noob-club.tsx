import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { noobClub } from "@/config/noobClub";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { WaitlistForm } from "@/components/noob/WaitlistForm";
import logoDeAsset from "@/assets/ai-noob-club-logo-de.png.asset.json";
import logoEnAsset from "@/assets/ai-noob-club-logo-en.png.asset.json";
import badgeAsset from "@/assets/ai-noob-club-badge.png.asset.json";
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



const btnPrimary =
  "inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const navLink =
  "inline-flex min-h-11 items-center px-2 text-sm font-medium text-foreground hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md";

function NoobClub() {
  const { lang, setLang } = useLanguage();
  const t = noobContent[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  const langButton = (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "de" : "en")}
      aria-label={t.langAria}
      className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-foreground/40 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {t.langLabel}
    </button>
  );
  const textLinks = (
    <>
      <a href="#starterset" onClick={close} className={navLink}>{t.navStarter}</a>
      <a href="#checkliste" onClick={close} className={navLink}>{t.navChecklist}</a>
      <Link to="/ai-noob-club-anmeldung" onClick={close} className={navLink}>
        {lang === "de" ? "Jetzt dabei sein" : "Sign up now"}
      </Link>
    </>
  );

  return (
    <main className="noob-theme min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-noob-rosa bg-noob-cream">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-2 md:px-10">
          <div className="flex items-center gap-3">
            <a href="#top" className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <img src={badgeAsset.url} alt={t.brand} className="h-12 w-12" width={556} height={556} />
            </a>
            <span className="flex flex-col leading-tight">
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-foreground">
                {t.headerSubtitle}
              </span>
              <Link to="/" className="text-[11px] text-foreground/75 underline-offset-2 hover:underline">
                {t.badge}
              </Link>
            </span>
          </div>
          <nav className="hidden items-center gap-2 lg:flex" aria-label={t.brand}>
            {langButton}
            {textLinks}
            <a href="#waitlist" className={btnPrimary}>{t.navWaitlist}</a>
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen((o: boolean) => !o)}
            aria-expanded={menuOpen}
            aria-controls="noob-menu"
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/40 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav id="noob-menu" className="border-t border-noob-rosa bg-noob-cream px-4 pb-5 pt-3 lg:hidden" aria-label={t.brand}>
            <div className="flex flex-col gap-1">
              <div className="py-1">{langButton}</div>
              {textLinks}
              <a href="#waitlist" onClick={close} className={`${btnPrimary} mt-3 w-full`}>{t.navWaitlist}</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-8 md:px-10 md:pb-16">
          <h1 className="sr-only">{t.brand}</h1>
          <img
            src={lang === "de" ? logoDeAsset.url : logoEnAsset.url}
            alt={`${t.brand}. ${t.tagline}`}
            className="h-auto w-full max-w-2xl"
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            {t.heroLead}
          </p>
          <div className="mt-8 rounded-3xl bg-noob-surface p-6 md:p-8">
            <h2 className="mb-4 text-xs uppercase tracking-[0.24em] text-foreground/60">
              {t.heroFor}
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {t.forItems.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                  <span
                    aria-hidden
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section className="bg-noob-rosa">
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

      {/* Offers */}
      <section className="bg-noob-rosa"><div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">

        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-foreground/55">
          {t.offerEyebrow}
        </p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.offerTitle}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.offers.map((o) => (
            <article key={o.title} className="rounded-3xl bg-noob-cream p-6 shadow-sm">
              <h3 className="font-serif text-2xl leading-snug">{o.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{o.body}</p>
            </article>
          ))}
        </div>
      </div></section>

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

      {/* Footer */}
      <footer className="bg-noob-cream">
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
