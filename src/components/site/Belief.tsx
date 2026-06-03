import { Section } from "./Section";

export function Belief() {
  return (
    <Section id="belief" eyebrow="What I believe">
      <div className="flex flex-col items-center py-16 md:py-24">
        <div className="h-px w-12 bg-foreground/30" />
        <blockquote className="mt-10 text-center font-serif tracking-tight text-foreground">
          <p className="text-4xl leading-[1.05] md:text-6xl">
            AI should make your{" "}
            <span className="italic font-normal opacity-80">people</span>
            <span className="mt-2 block text-5xl font-bold md:text-7xl">
              faster,
            </span>
            <span className="mt-2 block text-4xl md:text-6xl">
              not <span className="italic font-normal">fewer.</span>
            </span>
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