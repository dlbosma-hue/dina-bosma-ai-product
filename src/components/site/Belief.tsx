import { Section } from "./Section";

export function Belief() {
  return (
    <Section id="belief" eyebrow="What I believe">
      <div className="flex flex-col items-center py-10 md:py-16">
        <div className="h-px w-12 bg-foreground/30" />
        <blockquote className="mt-10 text-center font-serif tracking-tight text-foreground">
          <p className="text-4xl leading-[1.05] md:text-6xl">
            AI should make your people
            <span className="mt-2 block">faster,</span>
            <span className="mt-2 block">not fewer.</span>
          </p>
        </blockquote>
        <div className="mt-10 h-px w-12 bg-foreground/30" />
        <div className="mt-4 h-1 w-1 rounded-full bg-foreground/20" />
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