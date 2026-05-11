export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:px-10 md:pt-32 md:pb-36"
    >
      <div className="mb-10 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        AI consulting · Berlin
      </div>
      <h1 className="font-serif text-6xl leading-[0.98] tracking-tight md:text-8xl lg:text-[8.5rem]">
        HUMINT
      </h1>
      <p className="mt-10 max-w-3xl font-serif text-3xl leading-[1.2] text-foreground md:text-[2.5rem]">
        Most AI projects stall between idea and adoption. I work in that gap:
        strategy, build, and the human side.
      </p>
      <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
        Independent advisory and fractional product leadership for teams that
        need strategy, implementation, and the bridge between them. Available
        for EU and remote engagements in English, German, and Dutch.
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-8">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-wide text-foreground transition-opacity hover:opacity-70"
        >
          Book an intro call
          <span aria-hidden>→</span>
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          See selected work
        </a>
      </div>
    </section>
  );
}
