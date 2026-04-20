export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pt-12 pb-16 md:px-10 md:pt-20 md:pb-20"
    >
      <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-px w-8 bg-accent" />
        Berlin · Available now
      </div>
      <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
        Dina Bosma-Buczynska
      </h1>
      <p className="mt-6 max-w-2xl font-serif text-2xl leading-snug text-foreground/85 md:text-3xl">
        AI Consultant &amp; Product Manager.
        <br />
        Strategy, implementation, and the bridge between them.
      </p>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        Berlin-based. Available in English, German, and Dutch.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-90"
        >
          Let's talk
          <span aria-hidden>→</span>
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          See selected work
        </a>
      </div>
    </section>
  );
}
