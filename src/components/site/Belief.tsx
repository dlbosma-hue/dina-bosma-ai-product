import { Section } from "./Section";

export function Belief() {
  return (
    <Section id="belief" eyebrow="What I believe">
      <div className="flex flex-col items-center py-6 md:py-10">
        <blockquote className="text-center font-serif tracking-tight text-foreground">
          <p className="text-4xl leading-[1.05] md:text-6xl">
            AI should make your people
            <span className="mt-2 block">
              <span className="relative inline-block">
                faster,
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent"
                />
              </span>
            </span>
            <span className="mt-4 block">not fewer.</span>
          </p>
        </blockquote>
        <div className="mt-8 md:mt-10 h-[3px] w-16 bg-accent" />
      </div>
      <p className="mx-auto mt-6 md:mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
        I build AI systems that reduce the repetitive, low-value work that
        slows teams down, so people can focus on judgment, relationships, and
        the work that moves the business. Not automation for its own
        sake. Systems that make your team more capable than they were before.
      </p>
    </Section>
  );
}
