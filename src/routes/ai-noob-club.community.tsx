import { createFileRoute } from "@tanstack/react-router";
import { CalendarHeart, MessageCircleQuestion, Hammer, Users, Plus } from "lucide-react";
import { links } from "@/config/links";
import { headFor, useLang, usePageMeta } from "@/club-i18n/lang";
import { Ext } from "@/components/club/Ext";
import { SignupForm } from "@/components/club/Forms";
import { PhotoFrame, RoundPortrait } from "@/components/club/PhotoFrame";
import { Rich } from "@/components/club/Rich";
import { Section, SectionHead, SignOff } from "@/components/club/Section";
import { Ticker } from "@/components/club/Ticker";

export const Route = createFileRoute("/ai-noob-club/community")({
  head: () => headFor("community", "/ai-noob-club/community"),
  component: Community,
});

const whatIcons = [Users, MessageCircleQuestion, Hammer, CalendarHeart];

function Cta() {
  const { t } = useLang();
  return (
    <div className="mt-10 flex flex-col items-start gap-3">
      <a href="#platz" className="club-btn-primary">{t.community.cta}</a>
      <p className="club-eyebrow">{t.community.caps}</p>
    </div>
  );
}

function Community() {
  const { t } = useLang();
  usePageMeta("community");
  const c = t.community;
  return (
    <>
      <Section>
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-flex rounded-full border-2 border-navy px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              {c.pill}
            </span>
            <h1 className="mt-6 text-4xl text-navy sm:text-5xl lg:text-6xl"><Rich text={c.h1} /></h1>
            <p className="mt-6 max-w-lg text-lg text-ink">{c.sub}</p>
            <Cta />
          </div>
          <div className="mx-auto w-full max-w-md">
            <PhotoFrame slot="communityHero" tilt={2} />
          </div>
        </div>
      </Section>
      <Ticker items={c.ticker} />

      <Section>
        <SectionHead eyebrow={c.whoEyebrow} title={c.whoH2} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {c.who.map((w) => (
            <div key={w} className="club-card-brand text-lg text-ink">{w}</div>
          ))}
        </div>
        <p className="mt-8 font-hand text-3xl font-semibold text-navy">{c.ps}</p>
        <Cta />
      </Section>

      <Section tone="rosa">
        <SectionHead eyebrow={c.whatEyebrow} title={c.whatH2} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {c.what.map((w, i) => {
            const Icon = whatIcons[i] ?? Users;
            return (
              <div key={w.title} className="club-card-brand">
                <Icon className="mb-4 h-7 w-7 text-navy" strokeWidth={1.5} aria-hidden />
                <h3 className="text-xl text-navy">{w.title}</h3>
                <p className="mt-2 text-ink">{w.text}</p>
              </div>
            );
          })}
        </div>
        <Cta />
      </Section>

      <Section tone="sky">
        <div className="flex flex-col items-center text-center">
          <p className="club-eyebrow mb-4">{c.costEyebrow}</p>
          <p className="font-display text-7xl leading-none text-navy sm:text-8xl">{c.cost}</p>
          <p className="mt-6 max-w-md text-lg text-ink">{c.costText}</p>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow={c.whyEyebrow} title={c.whyH2} />
        <p className="mt-6 max-w-2xl text-lg text-ink">{c.whyText}</p>
        <div className="club-card-brand mt-14 flex flex-col items-center gap-8 sm:flex-row">
          <RoundPortrait size={128} />
          <div>
            <p className="text-lg text-ink">{c.meText}</p>
            <SignOff />
          </div>
        </div>
      </Section>

      <Section tone="rosa">
        <SectionHead title={c.faqH2} />
        <div className="mt-10 flex flex-col gap-4">
          {c.faq.map((f) => (
            <details key={f.q} className="group club-card-brand">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-navy transition-transform duration-[200ms] group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-4 text-ink">
                {f.a.includes("Datenschutz") || f.a.includes("privacy") ? (
                  <>
                    {f.a} <Ext href={links.datenschutz} className="club-link-brand">{t.footer.datenschutz}</Ext>
                  </>
                ) : (
                  f.a
                )}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="platz">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
          <SectionHead eyebrow={c.doorEyebrow} title={c.doorH2} />
          <div className="rounded-[24px] border-2 border-navy bg-cream p-6 sm:p-8">
            <SignupForm list="community" note={c.formNote} />
          </div>
        </div>
      </Section>
    </>
  );
}
