import { createFileRoute } from "@tanstack/react-router";
import { headFor, useLang, usePageMeta } from "@/club-i18n/lang";
import { ContactForm } from "@/components/club/Forms";
import { Section, SectionHead } from "@/components/club/Section";

export const Route = createFileRoute("/ai-noob-club/kontakt")({
  head: () => headFor("contact", "/ai-noob-club/kontakt"),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  usePageMeta("contact");
  const c = t.contact;
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHead as="h1" eyebrow={c.eyebrow} title={c.h1} />
          <p className="mt-6 max-w-md text-lg text-ink">{c.text}</p>
        </div>
        <div className="rounded-[24px] border-2 border-navy bg-cream p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
