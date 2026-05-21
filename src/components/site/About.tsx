import { Section } from "./Section";
import dinaPortrait from "@/assets/dina-portrait.jpg";

export function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            Before I was a Product Manager, I was a stylist. Later, I became the Product Manager building
            tools for stylists. That perspective shaped everything: I care about
            the people using the system, not just the system itself.
          </p>
          <p>
            I now work as an AI consultant and product leader with four years
            of experience shipping internal tools, sales platforms, and
            operational processes, most recently at Outfittery.
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
            I work best with founders and small teams who need someone who can
            move between strategy, product decisions, and hands-on
            implementation.
            <br />
            No slide decks that go nowhere.
            <br />
            No AI for the sake of it.
            <br />
            Just systems that reduce manual work and free people up to do what
            only humans can do.
          </p>
          <p className="text-base text-muted-foreground">
            Based in Berlin. Working in Dutch (native), English (C2), and
            German (C1).
          </p>
        </div>
        <aside className="md:col-span-2 md:border-l md:border-border md:pl-10">
          <img
            src={dinaPortrait}
            alt="Portrait of Dina Bosma-Buczynska"
            className="aspect-square w-full max-w-xs rounded-full object-cover"
          />
        </aside>
      </div>
    </Section>
  );
}
