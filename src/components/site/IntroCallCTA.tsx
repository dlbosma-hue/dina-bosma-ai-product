export function IntroCallCTA() {
  return (
    <section aria-label="Intro call" className="border-y border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
        <p className="max-w-2xl font-serif text-2xl leading-snug md:text-3xl">
          Not sure where to start? That is exactly what the intro call is for.
        </p>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-2 self-start border border-accent px-6 py-3 text-sm uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground md:self-auto"
        >
          Book a free 30-minute call
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}