import { createFileRoute, Link } from "@tanstack/react-router";
import { headFor, useLang, usePageMeta } from "@/club-i18n/lang";
import { SignupForm } from "@/components/club/Forms";
import { PhotoFrame } from "@/components/club/PhotoFrame";
import { Section, SectionHead } from "@/components/club/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/ai-noob-club/community")({
  head: () => headFor("community", "/ai-noob-club/community"),
  component: Community,
});

function Community() {
  const { t } = useLang();
  usePageMeta("community");
  const c = t.community;
  return (
    <>
      <Section>
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="club-eyebrow">{c.pill}</p>
            <h1 className="mt-6 text-4xl text-navy sm:text-5xl lg:text-6xl">{c.h1}</h1>
            <div className="mt-6 flex max-w-lg flex-col gap-5 text-lg text-ink">
              {c.sub.map(p => <p key={p}>{p}</p>)}
            </div>
            <Button asChild className="club-btn-primary mt-8">
              <a href="#platz">{c.cta}</a>
            </Button>
          </div>
          <div className="mx-auto w-full max-w-md">
            <PhotoFrame slot="communityHero" tilt={2} />
          </div>
        </div>
      </Section>

      <Section tone="rosa">
        <SectionHead title={c.howH2} />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {c.steps.map(step => (
            <li key={step.title} className="club-card-brand">
              <h3 className="text-2xl text-navy">{step.title}</h3>
              <p className="mt-4 text-lg text-ink">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sky">
        <div className="max-w-3xl">
          <SectionHead title={c.participationH2} />
          <p className="mt-6 text-lg text-ink">{c.participationText}</p>
        </div>
      </Section>

      <Section id="platz">
        <span id="warteliste" className="block scroll-mt-24" />
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHead title={c.formH2} />
            <p className="mt-6 text-lg text-ink">{c.formIntro}</p>
          </div>
          <div className="rounded-[24px] border-2 border-navy bg-cream p-6 sm:p-8">
            <SignupForm list="community" note="" />
          </div>
        </div>
      </Section>

      <Section tone="rosa">
        <p className="text-lg text-ink">{c.productText}</p>
        <Button asChild variant="link" className="club-link-brand mt-4 min-h-11">
          <Link to="/ai-noob-club/content-assistentin">{c.productLink}</Link>
        </Button>
      </Section>
    </>
  );
}