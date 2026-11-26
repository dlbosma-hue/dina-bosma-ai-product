import { createFileRoute, Link } from "@tanstack/react-router";
import { headFor, useLang, usePageMeta } from "@/club-i18n/lang";
import { SignupForm } from "@/components/club/Forms";
import { PhotoFrame } from "@/components/club/PhotoFrame";
import { Section, SectionHead } from "@/components/club/Section";
import { Button } from "@/components/ui/button";

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
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="text-4xl text-navy sm:text-5xl lg:text-6xl">{c.productName}</h1>
            <h2 className="mt-5 text-2xl text-navy sm:text-3xl">{c.h1}</h2>
            <div className="mt-6 max-w-lg space-y-5 text-lg text-ink">{c.text.map(p => <p key={p}>{p}</p>)}</div>
            <p className="mt-5 font-semibold text-navy">{c.status}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="club-btn-primary club-btn-product-waitlist"><a href="#warteliste">{c.cta}</a></Button>
              <Button asChild variant="outline" className="club-btn-secondary"><a href="#geplante-inhalte">{c.plannedCta}</a></Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <PhotoFrame slot="contentAssistentinCover" tilt={-2} />
          </div>
        </div>
      </Section>
      <Section>
        <div className="max-w-3xl">
          <SectionHead title={c.whatH2} />
          <div className="mt-6 space-y-5 text-lg text-ink">{c.whatBody.map(p => <p key={p}>{p}</p>)}</div>
        </div>
      </Section>
      <Section id="geplante-inhalte" tone="sky">
        <SectionHead title={c.plannedH2} />
        <p className="mt-6 max-w-3xl text-lg text-ink">{c.plannedIntro}</p>
        <ul className="mt-8 grid list-disc gap-x-12 gap-y-4 pl-6 text-lg text-ink sm:grid-cols-2">
          {c.planned.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className="mt-8 text-ink">{c.plannedNote}</p>
      </Section>
      <Section>
        <SectionHead title={c.audienceH2} />
        <ul className="mt-6 max-w-3xl list-disc space-y-4 pl-6 text-lg text-ink">{c.audience.map(item => <li key={item}>{item}</li>)}</ul>
        <p className="mt-6 font-semibold text-navy">{c.limitation}</p>
      </Section>
      <Section tone="rosa">
        <div className="max-w-3xl">
          <SectionHead title={c.requirementsH2} />
          <p className="mt-6 text-lg text-ink">{c.requirements}</p>
        </div>
      </Section>
      <Section id="warteliste">
        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHead title={c.formH} />
            <div className="mt-6 space-y-5 text-lg text-ink">{c.formBody.map(p => <p key={p}>{p}</p>)}</div>
          </div>
          <div className="rounded-[24px] border border-navy bg-rosa p-6 sm:p-8">
            <SignupForm list="content-assistentin" note="" submitText={c.submit} successText={c.success} />
          </div>
        </div>
      </Section>
      <Section>
        <SectionHead title={c.faqH2} />
        <div className="mt-8 max-w-3xl divide-y divide-navy">
          {c.faq.map(item => <details key={item.question} className="py-5">
            <summary className="min-h-11 cursor-pointer font-semibold text-navy focus-visible:outline-2 focus-visible:outline-ring">{item.question}</summary>
            <p className="mt-3 text-lg text-ink">{item.answer}</p>
          </details>)}
        </div>
      </Section>
      <Section tone="rosa">
        <SectionHead title={c.finalH2} />
        <p className="mt-6 text-lg text-ink">{c.finalBody}</p>
        <Button asChild className="club-btn-primary club-btn-product-waitlist mt-8"><a href="#warteliste">{c.finalCta}</a></Button>
      </Section>
      <Section>
        <p className="text-ink">{c.communityText}</p>
        <Button asChild variant="link" className="club-link-brand mt-3 min-h-11 px-0"><Link to="/ai-noob-club/community">{c.communityLink}</Link></Button>
      </Section>
    </>
  );
}
