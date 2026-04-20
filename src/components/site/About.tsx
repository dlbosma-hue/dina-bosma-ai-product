import { Section } from "./Section";
import dinaPortrait from "@/assets/dina-portrait.jpg";

export function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/85">
          <div className="mb-8 md:hidden">
            <img
              src={dinaPortrait}
              alt="Portrait of Dina Bosma-Buczynska"
              className="aspect-square w-48 rounded-full object-cover"
            />
          </div>
          <p>
            Four years as a Product Manager, most recently at Outfittery building AI-powered
            internal tools, sales platforms, and the processes around them. I know what it takes
            to ship, and I know where AI initiatives stall.
          </p>
          <p>
            In 2026 I completed an intensive AI Consulting &amp; Integration bootcamp at
            IronHack: nine weeks of building real systems (agents, RAG pipelines, ML models,
            n8n workflows) from scratch. My capstone, Spottr, is a full consulting engagement:
            business case, working MVP, GDPR documentation, and EU AI Act compliance pack.
          </p>
          <p>
            Multilingual: Dutch (native), English (C2), German (C1), Russian (B1). Based in
            Berlin. Former end-user of the tools I now build.
          </p>
        </div>
        <aside className="md:col-span-2 md:border-l md:border-border md:pl-10">
          <img
            src={dinaPortrait}
            alt="Portrait of Dina Bosma-Buczynska"
            className="mb-8 hidden aspect-square w-full max-w-xs rounded-full object-cover md:block"
          />
          <blockquote className="font-serif text-2xl leading-snug text-foreground italic md:text-[1.65rem]">
            &ldquo;Most AI projects don&apos;t fail on the model. They fail on the handover,
            the stakeholder, the scope. That&apos;s where product thinking earns its
            place.&rdquo;
          </blockquote>
        </aside>
      </div>
    </Section>
  );
}
