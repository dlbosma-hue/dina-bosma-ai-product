import { createFileRoute } from "@tanstack/react-router";
import { headFor, useLang, usePageMeta } from "@/club-i18n/lang";
import { SignupForm } from "@/components/club/Forms";
import { PhotoFrame } from "@/components/club/PhotoFrame";
import { Rich } from "@/components/club/Rich";
import { Section } from "@/components/club/Section";
import { Ticker } from "@/components/club/Ticker";

export const Route = createFileRoute("/ai-noob-club/content-assistentin")({
  head: () => headFor("ca", "/ai-noob-club/content-assistentin"),
  component: Waitlist,
});

function Waitlist() {
  const { t } = useLang();
  usePageMeta("ca");
  const c = t.ca;
  return (
    <>
      <Section tone="rosa">
        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="club-rule-accent mb-5" aria-hidden />
            <p className="club-eyebrow mb-5">{c.eyebrow}</p>
            <h1 className="text-4xl text-navy sm:text-5xl lg:text-6xl"><Rich text={c.h1} /></h1>
            <p className="mt-6 max-w-lg text-lg text-ink">{c.text}</p>
            <div className="mt-10 hidden w-full max-w-xs md:block">
              <PhotoFrame slot="contentAssistentinCover" tilt={-2} aspect="aspect-[4/3]" />
            </div>
          </div>
          <div className="rounded-[24px] border-2 border-navy bg-cream p-6 sm:p-8">
            <p className="club-eyebrow mb-3">{c.formCaps}</p>
            <h2 className="mb-6 text-2xl text-navy sm:text-3xl"><Rich text={c.formH} /></h2>
            <SignupForm list="content-assistentin" note={c.formNote} />
          </div>
          <div className="mx-auto w-full max-w-xs md:hidden">
            <PhotoFrame slot="contentAssistentinCover" tilt={-2} aspect="aspect-[4/3]" />
          </div>
        </div>
      </Section>
      <Ticker items={c.ticker} />
    </>
  );
}
