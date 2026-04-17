export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Contact
      </div>
      <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] md:text-6xl">
        Let&apos;s talk.
      </h2>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        Available for consulting, fractional PM work, and workshops across Europe.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-90"
        >
          Email me
          <span aria-hidden>→</span>
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
        >
          LinkedIn
          <span aria-hidden>↗</span>
        </a>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Email placeholder — replace with your address.
      </p>
    </section>
  );
}
