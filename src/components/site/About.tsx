import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            Four years as a Product Manager, most recently at Outfittery — building AI-powered
            internal tools, sales platforms, and the processes around them. I know what it takes
            to ship, and I know where AI initiatives stall.
          </p>
          <p>
            In 2026 I completed an intensive AI Consulting &amp; Integration bootcamp at
            IronHack: nine weeks of building real systems — agents, RAG pipelines, ML models,
            n8n workflows — from scratch. My capstone, Spottr, is a full consulting engagement:
            business case, working MVP, GDPR documentation, and EU AI Act compliance pack.
          </p>
          <p>
            Multilingual: Dutch (native), English (C2), German (C1), Russian (B1). Based in
            Berlin. Former end-user of the tools I now build.
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
