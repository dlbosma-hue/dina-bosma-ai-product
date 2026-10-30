import { CommunityVideo } from "@/components/noob/CommunityVideo";
import { communityContent, communityVideoSchema } from "@/lib/community-content";
import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Users, Leaf, ShieldCheck } from "lucide-react";
import { noobClub } from "@/config/noobClub";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { WaitlistForm } from "@/components/noob/WaitlistForm";
import { NoobHeader, NoobFooter, btnPrimary } from "@/components/noob/NoobChrome";
import { offersContent } from "@/lib/offers-content";
import dinaPortraitAsset from "@/assets/dina-portrait-circle.webp.asset.json";
import p99De1 from "@/assets/prompts99-de-1.png.asset.json";
import p99De2 from "@/assets/prompts99-de-2.png.asset.json";
import p99De3 from "@/assets/prompts99-de-3.png.asset.json";
import p99En1 from "@/assets/prompts99-en-1.png.asset.json";
import p99En2 from "@/assets/prompts99-en-2.png.asset.json";
import p99En3 from "@/assets/prompts99-en-3.png.asset.json";

const productImages = { de: [p99De1, p99De2, p99De3], en: [p99En1, p99En2, p99En3] };
import logoDeAsset from "@/assets/ai-noob-club-logo-de-v7.png.asset.json";
import logoEnAsset from "@/assets/ai-noob-club-logo-en-v7.png.asset.json";

export const Route = createFileRoute("/ai-noob-club")({
  component: NoobClub,
  head: () => ({ ...noobHead(noobMeta.home), scripts: [{ type: "application/ld+json", children: JSON.stringify(communityVideoSchema) }] }),
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
  const community = communityContent[lang];

  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-8 md:px-10 md:pb-16">
          <img
            src={lang === "en" ? logoEnAsset.url : logoDeAsset.url}
            alt={`${t.brand}: ${t.headerSubtitle}`}
            className="mx-auto mb-10 block h-auto w-full max-w-3xl md:mb-12"
            width={1920}
            height={640}
            fetchPriority="high"
          />
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-noob-rosa px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-noob-navy">
              {t.heroLabel}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {t.heroTitle}{" "}
              <span className="italic text-noob-terracotta-ink">{t.heroContinuation}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground">
              {t.heroSubline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#checkliste" className={btnPrimary}>{t.heroPrimary}</a>
              <a
                href="#community"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-foreground/40 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-noob-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t.heroSecondary}
              </a>
            </div>
          </div>
        </div>
        <div aria-hidden className="noob-stripes" />
      </section>

      {/* Über Dina */}
      <section id="dina" className="scroll-mt-44 md:scroll-mt-48 bg-noob-paper">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative z-0 mx-auto w-full max-w-[17rem]">
                <div aria-hidden className="absolute -inset-3 -z-10 rounded-full bg-noob-rosa" />
                <img
                  src={dinaPortraitAsset.url}
                  alt={t.meetYourHostAlt}
                  className="relative w-full rounded-full"
                  width={1882}
                  height={1882}
                />
              </div>
            </div>
            <div className="min-w-0">
              <span aria-hidden className="block h-[3px] w-10 bg-noob-terracotta" />
              <h2 className="mt-3 font-serif text-3xl leading-tight text-noob-navy md:text-4xl">
                {t.aboutEyebrow}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground md:text-lg">
                {t.aboutParas.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
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
                <p className="text-base leading-relaxed text-foreground">{card}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-foreground/10 bg-noob-cream/70 p-6">
            <h3 className="font-serif text-2xl leading-snug">{t.notForTitle}</h3>
            <ul className="mt-3 space-y-2">
              {t.notForItems.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Weg */}
      <section id="weg" className="scroll-mt-44 md:scroll-mt-48 bg-noob-sky">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.pathTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground">
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
                  {card.status === "free" && <span className={pillClass}>{t.statusFree}</span>}
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-snug">{card.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-foreground">{card.body}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                  {t.learnLabel}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {card.learn.map((item) => (
                    <li key={item} className="flex gap-2 text-base leading-relaxed text-foreground">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-noob-terracotta" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {card.info && (
                  <p className="mt-4 border-l-4 border-noob-terracotta bg-noob-rosa py-2.5 pl-3 pr-3 text-sm font-semibold leading-relaxed text-noob-navy">
                    {card.info}
                  </p>
                )}
                <div className="flex-1" />
                <div className="mt-6 flex flex-col items-start gap-1">
                  <a href={card.href} className={`${btnPrimary} h-auto min-h-12 whitespace-normal py-3 text-center`}>{card.cta}</a>
                  {card.cta2 && card.href2 && (
                    <a
                      href={card.href2}
                      className="inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {card.cta2}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-foreground">
            {t.pathNote.before}{" "}
            <a
              href={noobClub.links.contact}
              className="underline underline-offset-4 hover:no-underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t.pathNote.link}
            </a>
            {t.pathNote.after}
          </p>
        </div>
      </section>

      {/* 1:1 KI-Start-Check */}
      <section id="ki-start-check" className="scroll-mt-44 md:scroll-mt-48 bg-noob-cream">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <span className={`${pillClass} uppercase tracking-[0.14em]`}>{t.startCheckLabel}</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{t.startCheckTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground">{t.startCheckBody}</p>
          <div className="mt-8 max-w-3xl overflow-hidden rounded-3xl border border-foreground/10 bg-noob-paper">
            <iframe
              src={`${noobClub.links.calendlyStartCheck}?hide_event_type_details=1&hide_gdpr_banner=1`}
              title={t.startCheckTitle}
              loading="lazy"
              className="h-[640px] w-full"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground">
            {t.startCheckPrivacy}{" "}
            <Link to="/datenschutz" className="underline underline-offset-4 hover:no-underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Datenschutz
            </Link>
            .{" "}
            <a
              href={noobClub.links.calendlyStartCheck}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 hover:no-underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t.startCheckCta}
            </a>
          </p>
        </div>
      </section>

      {/* Angebote */}
      <section id="angebote" className="scroll-mt-44 md:scroll-mt-48 bg-noob-rosa">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{ov.title}</h2>
          <div className="mx-auto mt-8 max-w-3xl">
            <article id="checkliste" className="scroll-mt-44 md:scroll-mt-48 flex flex-col rounded-3xl border border-foreground/10 bg-noob-paper p-6 md:p-8">
              <span className={`${pillClass} self-start`}>{ov.freeTag}</span>
              <h3 className="mt-4 font-serif text-3xl leading-snug">{ov.sheetName}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground">{ov.sheetBody}</p>
              <ul className="mt-3 space-y-2">
                {ov.sheetItems.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6"><WaitlistForm t={t} source="checkliste" submitLabel={ov.sheetCta} note={ov.sheetNote} /></div>
            </article>
          </div>
        </div>
      </section>

      <section id="community" className="scroll-mt-44 md:scroll-mt-48 bg-noob-cream">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <div className="grid gap-x-12 gap-y-6 md:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">{community.title}</h2>
              <p className="mt-4 text-lg leading-relaxed">{community.subline}</p>
              <p className="mt-4 border-l-4 border-noob-terracotta bg-noob-rosa py-3 pl-4 pr-3 text-base font-semibold leading-relaxed text-noob-navy">
                {community.firstTesters}
              </p>
            </div>
            <div className="md:col-start-2 md:row-span-2 md:row-start-1">
              <CommunityVideo key={lang} lang={lang} />
            </div>
            <div className="min-w-0">
              <ul className="flex flex-wrap gap-2">
                {community.points.map((point) => <li key={point} className={pillClass}>{point}</li>)}
              </ul>
              <h3 className="mt-6 font-serif text-2xl">{community.how}</h3>
              <ol className="mt-3 space-y-2 text-base">{community.steps.map((step) => <li key={step}>{step}</li>)}</ol>
              <p className="mt-5 text-sm leading-relaxed">{community.distinction}</p>
              <div className="mt-6 rounded-3xl border border-noob-rosa bg-noob-rosa p-6 md:p-8">
                <WaitlistForm t={t} source="community" submitLabel={community.button} note={community.note} />
                <p className="mt-3 text-sm leading-relaxed">{community.extra}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="treffen" className="scroll-mt-44 md:scroll-mt-48 bg-noob-rosa">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{ov.liveTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground">{ov.liveIntro}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="flex flex-col rounded-3xl border border-foreground/10 bg-noob-paper p-6 md:p-8">
              <span className={`${pillClass} self-start`}>{ov.meetupTag}</span>
              <h3 className="mt-4 font-serif text-3xl leading-snug">{ov.meetupName}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground">{ov.meetupBody}</p>
              {noobClub.links.meetup && (
                <a href={noobClub.links.meetup} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-6 self-start`}>{ov.meetupCta}</a>
              )}
            </article>
            <article className="flex flex-col rounded-3xl border border-foreground/10 bg-noob-paper p-6 md:p-8">
              <span className={`${pillClass} self-start`}>{ov.workshopTag}</span>
              <h3 className="mt-4 font-serif text-3xl leading-snug">{ov.workshopName}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground">{ov.workshopBody}</p>
              <a href={noobClub.links.contact} className={`${btnPrimary} mt-6 self-start`}>{ov.workshopCta}</a>
            </article>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="scroll-mt-44 md:scroll-mt-48 bg-noob-cream">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{t.shopTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground">{t.shopIntro}</p>

          <p className="mt-5 max-w-3xl text-base leading-relaxed">{t.communityProductLine}{" "}
            <a href="#community" className="font-semibold underline underline-offset-4">{t.communityLink}</a>
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            {/* 99 Prompts */}
            <article className="flex flex-col rounded-3xl border border-foreground/10 bg-noob-paper p-6 md:p-8">
              <span className={`${pillClass} mb-4 self-start`}>{t.saleLabel}</span>
              <div className="grid grid-cols-3 gap-3">
                {productImages[lang].map((img, i) => (
                  <img
                    key={img.url}
                    src={img.url}
                    alt={i === 0 ? t.productAlt : ""}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-2xl"
                    width={1080}
                    height={1350}
                  />
                ))}
              </div>
              <h3 className="mt-5 font-serif text-3xl leading-snug">{t.productTitle}</h3>
              <p className="mt-3 text-2xl font-semibold text-noob-terracotta-ink">{t.productPrice}</p>
              <p className="mt-3 text-base leading-relaxed text-foreground">{t.productBody}</p>
              <ul className="mt-4 space-y-2">
                {t.productBullets.map((b) => (
                  <li key={b} className="flex gap-3 text-base text-foreground">
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
              <p className="mt-4 text-sm leading-relaxed text-foreground">{t.productNote}</p>
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


      <section id="werte" className="scroll-mt-44 md:scroll-mt-48 bg-noob-sky">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
          <p className="inline-flex items-center rounded-full bg-noob-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-noob-navy">
            {t.valuesEyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{t.valuesTitle}</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {t.values.map((v, i) => {
              const Icon = [Sparkles, Users, Leaf, ShieldCheck][i] ?? Sparkles;
              return (
                <li key={v.title} className="flex gap-4">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-noob-terracotta-ink" aria-hidden />
                  <div>
                    <h3 className="font-serif text-xl leading-snug">{v.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-foreground">{v.body}</p>
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
          <div className="rounded-2xl bg-noob-sky p-5 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <h2 className="font-serif text-lg leading-snug">{t.consultingTitle}</h2>
              <p className="mt-1 text-sm text-foreground">{t.consultingBody}</p>
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
