import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { links } from "@/config/links";
import type { PhotoSlot } from "@/config/photos";
import { headFor, useLang, usePageMeta } from "@/club-i18n/lang";
import { CountUp } from "@/components/club/CountUp";
import { Ext } from "@/components/club/Ext";
import { PhotoFrame } from "@/components/club/PhotoFrame";
import { Rich } from "@/components/club/Rich";
import { Section, SectionHead, SignOff } from "@/components/club/Section";
import { Ticker } from "@/components/club/Ticker";
import { FinalCta, ValueCards } from "@/components/club/Blocks";

export const Route = createFileRoute("/ai-noob-club/")({
  head: () => headFor("home", "/ai-noob-club"),
  component: Home,
});

function Home() {
  const { t } = useLang();
  usePageMeta("home");
  const h = t.home;
  const [p0, p1] = h.prod as [(typeof h.prod)[number], (typeof h.prod)[number]];
  const freeCovers: PhotoSlot[] = ["startCheckCover", "startpaketCover", "editGuideCover"];
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="club-eyebrow mb-6">{h.eyebrow}</p>
          <h1 className="text-4xl text-navy sm:text-5xl lg:text-6xl">
            <Rich text={h.h1} />
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink">{h.sub}</p>
          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
            <div className="flex flex-col items-center gap-3">
              <Ext href={links.calendlyStartCheck} className="club-btn-primary">{h.checkCta}</Ext>
              <p className="max-w-[30ch] text-sm text-ink">{h.checkNote}</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Link to="/ai-noob-club/gratis" hash="starterpaket" className="club-btn-secondary">{h.cta}</Link>
              <p className="max-w-[30ch] text-sm text-ink">{h.ctaNote}</p>
            </div>
          </div>
        </div>
      </Section>

      <Ticker items={h.ticker} />

      <Section id="dina">
        <div className="grid items-center gap-14 md:grid-cols-[1fr_1.2fr]">
          <div className="mx-auto w-full max-w-sm">
            <PhotoFrame slot="aboutDetail" tilt={-2} />
          </div>
          <div>
            <SectionHead title={t.about.h1} />
            <div className="mt-6 flex flex-col gap-6 text-lg text-ink">
              {t.about.story.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
              <SignOff />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sky">
        <p className="club-eyebrow mb-10 text-center">{h.proofEyebrow}</p>
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {h.proof.map((p) => (
            <li key={p.label} className="text-center">
              <p className="font-display text-5xl leading-none text-navy sm:text-6xl">
                <CountUp to={p.n} />
              </p>
              <p className="mx-auto mt-3 max-w-[16ch] text-ink">{p.label}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center text-ink">{h.proofNote}</p>
      </Section>

      <Section>
        <SectionHead eyebrow={h.freeEyebrow} title={h.freeH2} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {h.free.map((c, i) => (
            <article key={c.title} className="club-card-brand flex flex-col">
              <PhotoFrame slot={freeCovers[i] ?? "startpaketCover"} tilt={i % 2 ? -1.5 : 1.5} aspect="aspect-[4/3]" className="mb-6" />
              <h3 className="text-2xl text-navy">{c.title}</h3>
              <p className="mt-3 flex-1 text-ink">{c.text}</p>
              {i === 0 ? (
                <Ext href={links.calendlyStartCheck} className="club-btn-primary mt-6 self-start">{c.cta}</Ext>
              ) : (
                <Link to="/ai-noob-club/gratis" hash={i === 1 ? "starterpaket" : "edit-guide"} className="club-btn-primary mt-6 self-start">{c.cta}</Link>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section tone="rosa">
        <SectionHead eyebrow={h.prodEyebrow} title={h.prodH2} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="club-card-brand flex flex-col">
            <PhotoFrame slot="promptPackCover" tilt={-1.5} aspect="aspect-[4/3]" className="mb-6" />
            <h3 className="text-2xl text-navy">{p0.title}</h3>
            <p className="mt-3 flex-1 text-ink">{p0.text}</p>
            <Ext href={links.etsy} className="club-btn-primary mt-6 self-start">{p0.cta}</Ext>
          </article>
          <article className="club-card-brand flex flex-col">
            <PhotoFrame slot="contentAssistentinCover" tilt={1.5} aspect="aspect-[4/3]" className="mb-6" />
            <p className="mb-6 text-sm text-ink">{t.ca.caption}</p>
            <h3 className="text-2xl text-navy">{p1.title}</h3>
            <p className="mt-3 flex-1 text-ink">{p1.text}</p>
            <Link to="/ai-noob-club/community" className="club-btn-primary mt-6 self-start">{p1.cta}</Link>
          </article>
        </div>
      </Section>

      <Section className="border-t-2 border-rosa" tightBottom>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHead eyebrow={h.meetEyebrow} title={h.meetH2} center />
          <p className="mt-6 text-lg text-ink">{h.meetText}</p>
          <Ext href={links.meetup} className="club-btn-primary mt-8">{h.meetCta}</Ext>
          <p className="mt-6 text-ink">{h.workshopQ}</p>
          <p className="mt-1">
            <Link to="/ai-noob-club/kontakt" className="club-link-brand">{h.workshopLink}</Link>
          </p>
          <div className="mx-auto mt-4 w-full max-w-sm">
            <PhotoFrame slot="workshopPhoto" tilt={-2} />
          </div>
        </div>
      </Section>

      <Section tightBottom>
        <SectionHead eyebrow={h.valuesEyebrow} title={h.valuesH2} center />
        <div className="mt-14"><ValueCards /></div>
        <p className="mt-10 flex items-center justify-center gap-2 text-center font-medium text-navy">
          <ShieldCheck className="h-5 w-5 text-navy" strokeWidth={1.5} aria-hidden />
          {t.dataLine}
        </p>
      </Section>

      <FinalCta photoSlot="meetupPhoto" />

      <Section className="border-t-2 border-rosa">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHead title={h.humintH2} center />
          <p className="mt-6 text-lg text-ink">{h.humintText}</p>
          <Ext href={links.humint} className="club-btn-primary mt-8">{h.humintCta}</Ext>
        </div>
      </Section>
    </>
  );
}
