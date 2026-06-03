import { Section } from "./Section";

export function Belief() {
  return (
    <Section id="belief" eyebrow="What I believe">
      <div className="border-y border-border py-16 md:py-24">
        <blockquote className="mx-auto max-w-5xl text-center font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
          "AI should make your people faster, not fewer."
        </blockquote>
      </div>
      <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
        I build AI systems that reduce the repetitive, low-value work that
        slows teams down, so people can focus on judgment, relationships, and
        the work that moves the business. Not automation for its own
        sake. Systems that make your team more capable than they were before.
      </p>
    </Section>
  );
}