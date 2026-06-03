export function Belief() {
  return (
    <section
      id="belief"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mb-10 text-center text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
        What I believe
      </div>
      <div className="border-t border-border" />
      <blockquote className="mx-auto max-w-4xl px-2 py-14 text-center font-serif text-4xl italic leading-[1.08] tracking-tight text-foreground md:py-20 md:text-6xl lg:text-7xl">
        &ldquo;AI should make your people faster, not fewer.&rdquo;
      </blockquote>
      <div className="border-t border-border" />
      <p className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
        I build AI systems that reduce the repetitive, low-value work that
        slows teams down, so people can focus on judgment, relationships, and
        the work that moves the business. Not automation for its own sake.
        Systems that make your team more capable than they were before.
      </p>
    </section>
  );
}