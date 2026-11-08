import { CommunityVideo } from "@/components/noob/CommunityVideo";
import { communityContent, communityVideoSchema } from "@/lib/community-content";
import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Users, Leaf, ShieldCheck } from "lucide-react";
import { noobClub } from "@/config/noobClub";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { WaitlistForm } from "@/components/noob/WaitlistForm";
import { CourseWaitlist } from "@/components/noob/CourseWaitlist";
import { NoobHeader, NoobFooter, btnPrimary } from "@/components/noob/NoobChrome";
import { offersContent } from "@/lib/offers-content";
import dinaPortraitAsset from "@/assets/dina-portrait-circle.webp.asset.json";
import p99De1 from "@/assets/prompts99-de-1.png.asset.json";
import p99De2 from "@/assets/prompts99-de-2.png.asset.json";
import p99De3 from "@/assets/prompts99-de-3.png.asset.json";
import p99En1 from "@/assets/prompts99-en-1.png.asset.json";
import p99En2 from "@/assets/prompts99-en-2.png.asset.json";
import p99En3 from "@/assets/prompts99-en-3.png.asset.json";
import logoDeAsset from "@/assets/ai-noob-club-logo-de-v7.png.asset.json";
import logoEnAsset from "@/assets/ai-noob-club-logo-en-v7.png.asset.json";

const productImages = { de: [p99De1, p99De2, p99De3], en: [p99En1, p99En2, p99En3] };

export const Route = createFileRoute("/ai-noob-club")({
  component: NoobClub,
  head: () => ({ ...noobHead(noobMeta.home), scripts: [{ type: "application/ld+json", children: JSON.stringify(communityVideoSchema) }] }),
});

const extBtn = "retro-button";
const sectionWrap = "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16";
const sectionClass = "scroll-mt-40 border-b-2 border-navy md:scroll-mt-44";

function NoobClub() {
  useNoobMeta(noobMeta.home);
  const { lang } = useLanguage();
  const t = noobContent[lang];
  const ov = offersContent[lang];
  const community = communityContent[lang];

  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />

      <section id="ki-start-check" className={`${sectionClass} bg-cream`}>
        <div className={sectionWrap}>
          <span className="retro-tape">{t.startCheckLabel}</span>
          <h2 className="mt-6 text-4xl md:text-5xl">{t.startCheckTitle}</h2>
          <p className="mt-4 text-lg text-navy">{t.startCheckBody}</p>
          <a href={noobClub.links.calendlyStartCheck} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-7`}>
            👉 {t.startCheckCta}
          </a>
          <p className="mt-4 text-base text-navy">
            {t.startCheckPrivacy}{" "}
            <Link to="/datenschutz" className="text-link underline">{t.startCheckPrivacyLink}</Link>.
          </p>
        </div>
      </section>

      <section id="top" className={`${sectionClass} bg-rose`}>
        <div className={sectionWrap}>
          <img src={lang === "en" ? logoEnAsset.url : logoDeAsset.url} alt={`${t.brand}: ${t.headerSubtitle}`} className="mx-auto mb-10 block h-auto w-full max-w-3xl" width={1920} height={640} fetchPriority="high" />
          <div className="max-w-3xl">
            <span className="retro-tape bg-cream">{t.heroLabel}</span>
            <h1 className="mt-6 text-4xl md:text-6xl">{t.heroTitle} <span>{t.heroContinuation}</span></h1>
            <p className="mt-5 text-lg text-navy">{t.heroSubline}</p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">
              <a href="#checkliste" className={btnPrimary}>{t.heroPrimary}</a>
              <a href="#community" className="retro-button retro-button-secondary">{t.heroSecondary}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="dina" className={`${sectionClass} bg-cream`}>
        <div className={sectionWrap}>
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]">
            <div className="retro-card mx-auto w-full max-w-[17rem] bg-rose p-4">
              <img src={dinaPortraitAsset.url} alt={t.meetYourHostAlt} className="w-full rounded-full border-2 border-navy" width={1882} height={1882} />
            </div>
            <div>
              <span aria-hidden className="block h-1 w-10 bg-grapefruit" />
              <h2 className="mt-4 text-4xl md:text-5xl">{t.aboutEyebrow}</h2>
              <div className="mt-5 space-y-4 text-lg text-navy">
                {t.aboutParas.map((para) => <p key={para}>{para}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fuer-wen" className={`${sectionClass} bg-rose`}>
        <div className={sectionWrap}>
          <h2 className="text-4xl md:text-5xl">{t.forTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {t.forCards.map((card) => <article key={card} className="retro-card bg-cream p-6"><p className="text-base text-navy">{card}</p></article>)}
          </div>
          <div className="retro-card mt-6 bg-cream p-6">
            <h3 className="text-3xl">{t.notForTitle}</h3>
            <ul className="mt-4 space-y-2">
              {t.notForItems.map((item) => <li key={item} className="flex gap-3 text-base text-navy"><span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 bg-grapefruit" /><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="weg" className={`${sectionClass} bg-sky`}>
        <div className={sectionWrap}>
          <h2 className="text-4xl md:text-5xl">{t.pathTitle}</h2>
          <p className="mt-4 text-lg text-navy">{t.pathIntro}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.pathCards.map((card, i) => (
              <article key={card.title} className="retro-card flex flex-col bg-cream p-6">
                <div className="flex items-center justify-between gap-3">
                  <span aria-hidden className="flex h-14 w-14 items-center justify-center border-2 border-navy bg-grapefruit font-headline text-3xl leading-none text-navy">{i + 1}</span>
                  {card.status === "free" && <span className="retro-pill">{t.statusFree}</span>}
                </div>
                <h3 className="mt-4 text-3xl">{card.title}</h3>
                <p className="mt-3 text-base text-navy">{card.body}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-navy">{t.learnLabel}</p>
                <ul className="mt-2 space-y-1.5">
                  {card.learn.map((item) => <li key={item} className="flex gap-2 text-base text-navy"><span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 bg-grapefruit" /><span>{item}</span></li>)}
                </ul>
                {card.info && <p className="mt-4 border-l-4 border-grapefruit bg-rose p-3 text-base font-semibold text-navy">{card.info}</p>}
                <div className="flex-1" />
                <div className="mt-6 flex flex-col items-start gap-1">
                  <a href={card.href} className={`${i === 0 ? btnPrimary : "retro-button retro-button-secondary"} h-auto min-h-12 whitespace-normal py-3`}>{card.cta}</a>
                  {card.cta2 && card.href2 && <a href={card.href2} className="inline-flex min-h-11 items-center text-base font-semibold text-link underline">{card.cta2}</a>}
                </div>
              </article>
            ))}
          </div>
          <p className="retro-note mt-7">
            {t.pathNote.before}{" "}<a href={noobClub.links.contact} className="text-link underline">{t.pathNote.link}</a>{t.pathNote.after}
          </p>
        </div>
      </section>

      <section id="angebote" className={`${sectionClass} bg-rose`}>
        <div className={sectionWrap}>
          <h2 className="text-4xl md:text-5xl">{ov.title}</h2>
          <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
            <article id="checkliste" className="retro-card flex scroll-mt-44 flex-col bg-cream p-6 md:p-8">
              <span className="retro-pill">{ov.freeTag}</span>
              <h3 className="mt-4 text-3xl">{ov.sheetName}</h3>
              <p className="mt-3 text-base text-navy">{ov.sheetBody}</p>
              <ul className="mt-3 space-y-2">
                {ov.sheetItems.map((item) => <li key={item} className="flex gap-3 text-base text-navy"><span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 bg-grapefruit" /><span>{item}</span></li>)}
              </ul>
              <div className="mt-6"><WaitlistForm t={t} source="checkliste" submitLabel={ov.sheetCta} note={ov.sheetNote} /></div>
            </article>
            <article id="edit-guide" className="retro-card flex scroll-mt-44 flex-col bg-sky p-6 md:p-8">
              <span className="retro-pill">{community.freeLabel}</span>
              <h3 className="mt-4 text-3xl">{community.guideTitle}</h3>
              <p className="mt-3 text-base text-navy">{community.guideBody}</p>
              <div className="mt-6 w-full max-w-[14rem] self-center"><CommunityVideo key={lang} lang={lang} /></div>
              <a href={noobClub.links.editGuidePdf[lang]} target="_blank" rel="noopener" className="retro-button retro-button-secondary mt-6 self-start">{community.guideCta}</a>
            </article>
          </div>
        </div>
      </section>

      <section id="community" className={`${sectionClass} bg-cream`}>
        <div className={sectionWrap}>
          <span className="retro-tape">{community.label}</span>
          <h2 className="mt-6 text-4xl md:text-5xl">{community.title}</h2>
          <p className="mt-4 text-lg text-navy">{community.intro}</p>
          <Link to="/ai-noob-club/content-assistentin" className="mt-3 inline-flex min-h-11 items-center font-semibold text-link underline">{community.courseLink}</Link>
          <CourseWaitlist />
          <p className="mt-8 text-base text-navy">{community.smallPrint}{" "}<Link to="/datenschutz" className="text-link underline">{community.privacy}</Link></p>
        </div>
      </section>

      <section id="treffen" className={`${sectionClass} bg-rose`}>
        <div className={sectionWrap}>
          <h2 className="text-4xl md:text-5xl">{ov.liveTitle}</h2>
          <p className="mt-4 text-lg text-navy">{ov.liveIntro}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="retro-card flex flex-col bg-cream p-6 md:p-8">
              <span className="retro-pill">{ov.meetupTag}</span>
              <h3 className="mt-4 text-3xl">{ov.meetupName}</h3>
              <p className="mt-3 text-base text-navy">{ov.meetupBody}</p>
              {noobClub.links.meetup && <a href={noobClub.links.meetup} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-6 self-start`}>{ov.meetupCta}</a>}
            </article>
            <article className="retro-card flex flex-col bg-cream p-6 md:p-8">
              <span className="retro-pill">{ov.workshopTag}</span>
              <h3 className="mt-4 text-3xl">{ov.workshopName}</h3>
              <p className="mt-3 text-base text-navy">{ov.workshopBody}</p>
              <a href={noobClub.links.contact} className="retro-button retro-button-secondary mt-6 self-start">{ov.workshopCta}</a>
            </article>
          </div>
        </div>
      </section>

      <section id="shop" className={`${sectionClass} bg-cream`}>
        <div className={sectionWrap}>
          <h2 className="text-4xl md:text-5xl">{t.shopTitle}</h2>
          <p className="mt-4 text-lg text-navy">{t.shopIntro}</p>
          <div className="mx-auto mt-10 max-w-3xl">
            <article className="retro-card flex flex-col bg-rose p-6 md:p-8">
              <span className="retro-pill mb-4">{t.saleLabel}</span>
              <div className="grid grid-cols-3 gap-3">
                {productImages[lang].map((img, i) => <img key={img.url} src={img.url} alt={i === 0 ? t.productAlt : ""} loading="lazy" decoding="async" className="w-full border-2 border-navy" width={1080} height={1350} />)}
              </div>
              <h3 className="mt-5 text-3xl">{t.productTitle}</h3>
              <p className="mt-3 font-headline text-3xl leading-[1.05] text-navy">{t.productPrice}</p>
              <p className="mt-3 text-base text-navy">{t.productBody}</p>
              <ul className="mt-4 space-y-2">
                {t.productBullets.map((b) => <li key={b} className="flex gap-3 text-base text-navy"><span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 bg-grapefruit" /><span>{b}</span></li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">{t.productTags.map((tag) => <span key={tag} className="retro-pill">{tag}</span>)}</div>
              <div className="flex-1" />
              <div className="mt-6"><a href={noobClub.links.etsyShop} target="_blank" rel="noreferrer" className={extBtn}>{t.productCta}</a></div>
              <p className="mt-4 text-base text-navy">{t.productNote}</p>
            </article>
          </div>
          <a href={noobClub.links.etsyShop} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-link underline">{t.shopAllCta}<span aria-hidden>→</span></a>
        </div>
      </section>

      <section id="werte" className={`${sectionClass} bg-sky`}>
        <div className={sectionWrap}>
          <span className="retro-tape bg-rose">{t.valuesEyebrow}</span>
          <h2 className="mt-6 text-4xl md:text-5xl">{t.valuesTitle}</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {t.values.map((v, i) => {
              const Icon = [Sparkles, Users, Leaf, ShieldCheck][i] ?? Sparkles;
              return <li key={v.title} className="retro-card flex gap-4 bg-cream p-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-navy" aria-hidden /><div><h3 className="text-2xl">{v.title}</h3><p className="mt-2 text-base text-navy">{v.body}</p></div></li>;
            })}
          </ul>
        </div>
      </section>

      <section className="border-b-2 border-navy bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-10 md:px-8">
          <div className="retro-card bg-sky p-6 md:flex md:items-center md:justify-between md:gap-6">
            <div><h2 className="text-2xl">{t.consultingTitle}</h2><p className="mt-2 text-base text-navy">{t.consultingBody}</p></div>
            <Link to="/" className="mt-3 inline-flex min-h-11 shrink-0 items-center gap-1 text-base font-semibold text-link underline md:mt-0">{t.consultingCta}<span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <NoobFooter />
    </main>
  );
}
