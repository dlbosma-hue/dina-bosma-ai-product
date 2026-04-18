import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            Four years as a Product Manager, most recently at Outfittery building AI-powered
            internal tools and sales platforms.
          </p>
          <p>
            Completed an intensive AI Consulting &amp; Integration bootcamp at IronHack
            (2026), adding hands-on technical depth to product experience.
          </p>
          <p>
            Multilingual: Dutch (native), English (C2), German (C1), Russian (B1). Former
            end-user of the tools she builds, bringing a practitioner&apos;s perspective to
            every engagement.
          </p>
        </div>
        <aside className="md:col-span-2 md:border-l md:border-border md:pl-10">
          <blockquote className="font-serif text-2xl leading-snug text-foreground italic md:text-[1.65rem]">
            &ldquo;Great products emerge from great communication. Add technical depth, and
            you stop explaining the vision. You start building it.&rdquo;
          </blockquote>
        </aside>
      </div>
    </Section>
  );
}
