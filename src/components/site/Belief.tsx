export function Belief() {
  return (
    <section
      id="belief"
      className="scroll-mt-24 border-y border-border bg-card"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-accent">
          <span aria-hidden className="h-px w-10 bg-accent" />
          What I believe
        </div>
        <blockquote className="font-serif text-5xl font-light leading-[0.98] tracking-[-0.02em] text-foreground md:text-7xl lg:text-[5.5rem]">
          <span aria-hidden className="mr-2 text-accent">“</span>
          AI should make your people <em className="italic text-accent">faster</em>, not fewer.
          <span aria-hidden className="ml-1 text-accent">”</span>
        </blockquote>
        <p className="mt-14 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I build AI systems that reduce the repetitive, low-value work that
          slows teams down, so people can focus on judgment, relationships,
          and the work that moves the business. Not automation for its own
          sake. Systems that make your team more capable than they were
          before.
        </p>
      </div>
    </section>
  );
}