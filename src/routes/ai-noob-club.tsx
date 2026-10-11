import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Users, Leaf, ShieldCheck } from "lucide-react";
import { noobClub } from "@/config/noobClub";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { WaitlistForm } from "@/components/noob/WaitlistForm";
import { NoobHeader, NoobFooter, btnPrimary } from "@/components/noob/NoobChrome";
import { offersContent } from "@/lib/offers-content";
import meetYourHostEnAsset from "@/assets/meet-your-host-en.webp.asset.json";
import meetYourHostDeAsset from "@/assets/meet-your-host-de.webp.asset.json";
import etsyProductAsset from "@/assets/etsy-99-prompts.webp.asset.json";

export const Route = createFileRoute("/ai-noob-club")({
  component: NoobClub,
  head: () => noobHead(noobMeta.home),
});

const extBtn =
  "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function NoobClub() {
  useNoobMeta(noobMeta.home);
  const { lang } = useLanguage();
  const t = noobContent[lang];
  const ov = offersContent[lang];
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
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/75">
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
              <p className="mt-4 text-sm text-foreground/75">{t.heroFounder}</p>
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
      <section id="fuer-wen" className="scroll-mt-44 md:scroll-mt-48 bg-noob-rosa">
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

      {/* Weg */}
      <section id="weg" className="scroll-mt-44 md:scroll-mt-48 bg-noob-cream">
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
                  <span aria-hidden className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-noob-terracotta font-serif text-3xl leading-none text-noob-navy">
                    {i + 1}
                  </span>
                  <span className={pillClass}>{statusLabel(card.status)}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-snug">{card.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-foreground/80">{card.body}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/75">
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

      {/* Angebote */}
      <section id="angebote" className="scroll-mt-44 md:scroll-mt-48 bg-noob-rosa">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{ov.title}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article id="checkliste" className="scroll-mt-44 md:scroll-mt-48 flex flex-col rounded-3xl border border-foreground/10 bg-noob-paper p-6 md:p-8">
              <span className={`${pillClass} self-start`}>{ov.freeTag}</span>
              <h3 className="mt-4 font-serif text-3xl leading-snug">{ov.sheetName}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{ov.sheetBody}</p>
              <div className="mt-6"><WaitlistForm t={t} source="checkliste" submitLabel={ov.sheetCta} note={ov.sheetNote} /></div>
            </article>
            <article id="starterset" className="scroll-mt-44 md:scroll-mt-48 flex flex-col rounded-3xl border border-foreground/10 bg-noob-paper p-6 md:p-8">
              <span className={`${pillClass} self-start`}>{ov.soonTag}</span>
              <h3 className="mt-4 font-serif text-3xl leading-snug">{ov.assistantName}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{ov.assistantBody}</p>
            </article>
          </div>
          <p className="mt-8 text-center font-serif text-xl leading-snug md:text-2xl">{ov.line}</p>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="scroll-mt-44 md:scroll-mt-48 bg-noob-cream">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.shopTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/85">{t.shopIntro}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Card 1: Instagram-Kit */}
            <article className="flex flex-col rounded-3xl border border-foreground/10 bg-noob-paper p-6 md:p-8">
              <h3 className="font-serif text-3xl leading-snug">{t.kitTitle}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{t.kitBody}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.kitTags.map((tag) => (
                  <span key={tag} className={pillClass}>{tag}</span>
                ))}
              </div>
              <div className="flex-1" />
              <div className="mt-6 flex flex-wrap gap-3">
                {noobClub.links.etsyKit && (
                  <a href={noobClub.links.etsyKit} target="_blank" rel="noreferrer" className={extBtn}>
                    {t.kitEtsyCta}
                  </a>
                )}
                {noobClub.links.gumroadKit && (
                  <a
                    href={noobClub.links.gumroadKit}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-foreground/40 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-noob-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {t.kitGumroadCta}
                  </a>
                )}
              </div>
            </article>

            {/* Card 2: 99 Prompts */}
            <article className="flex flex-col rounded-3xl border border-foreground/10 bg-noob-paper p-6 md:p-8">
              <img
                src={etsyProductAsset.url}
                alt={t.productAlt}
                loading="lazy"
                decoding="async"
                className="w-full max-w-56 rounded-2xl"
                width={1264}
                height={1264}
              />
              <h3 className="mt-5 font-serif text-3xl leading-snug">{t.productTitle}</h3>
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
              <div className="mt-4 flex flex-wrap gap-2">
                {t.productTags.map((tag) => (
                  <span key={tag} className={pillClass}>{tag}</span>
                ))}
              </div>
              <div className="flex-1" />
              <div className="mt-6">
                <a href={noobClub.links.etsyShop} target="_blank" rel="noreferrer" className={extBtn}>
                  {t.productCta}
                </a>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{t.productNote}</p>
            </article>
          </div>

          <a
            href={noobClub.links.etsyShop}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground underline underline-offset-4"
          >
            {t.shopAllCta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* Values */}
      <section id="werte" className="noob-dark scroll-mt-44 md:scroll-mt-48">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.valuesTitle}</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {t.values.map((v, i) => {
              const Icon = [Sparkles, Users, Leaf, ShieldCheck][i] ?? Sparkles;
              return (
                <li key={v.title} className="flex gap-4">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-noob-terracotta" aria-hidden />
                  <div>
                    <h3 className="font-serif text-xl leading-snug">{v.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-foreground/85">{v.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>


      {/* Consulting cross-link */}
      <section className="bg-noob-cream">
        <div className="mx-auto max-w-3xl px-6 py-10 md:px-10">
          <div className="rounded-2xl bg-noob-rosa p-5 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <h2 className="font-serif text-lg leading-snug">{t.consultingTitle}</h2>
              <p className="mt-1 text-sm text-foreground/80">{t.consultingBody}</p>
            </div>
            <Link to="/" className="mt-3 inline-flex min-h-11 shrink-0 items-center gap-1 text-sm font-medium underline underline-offset-4 md:mt-0">
              {t.consultingCta} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <NoobFooter />
    </main>
  );
}
