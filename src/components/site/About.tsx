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
            I am an AI consultant and product leader with four years of
            experience building internal tools, sales platforms, and operational
            processes, most recently at Outfittery.
          </p>
          <p>
            In 2026, I completed an intensive AI Consulting and Integration
            bootcamp where I built working systems from scratch, including
            agents, RAG pipelines, ML models, and n8n workflows.
          </p>
          <p>
            My capstone project, Spottr, was designed as a full consulting
            engagement: business case, working MVP, GDPR documentation, and an
            EU AI Act compliance pack.
          </p>
          <p>
            Before product, I worked as a stylist. Later, I became the PM
            building tools for stylists. That perspective shaped how I work: I
            care about the people using the system, not just the system itself.
          </p>
          <p>
            I work best with companies that need someone who can move between
            strategy, stakeholders, product decisions, and implementation
            without getting stuck in theory.
          </p>
          <p className="text-base text-muted-foreground">
            Based in Berlin. Working in Dutch (native), English (C2), German
            (C1), and Russian (B1).
          </p>
        </div>
        <aside className="md:col-span-2 md:border-l md:border-border md:pl-10">
          <img
            src={dinaPortrait}
            alt="Portrait of Dina Bosma-Buczynska"
            className="mb-8 hidden aspect-square w-full max-w-xs rounded-full object-cover md:block"
          />
          <blockquote className="font-serif text-2xl leading-snug text-foreground italic md:text-[1.65rem]">
            &ldquo;Shipping AI is a people problem dressed up as a technical one.
            That&apos;s where I come in.&rdquo;
          </blockquote>
        </aside>
      </div>
    </Section>
  );
}
