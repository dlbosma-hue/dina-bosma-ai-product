import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-12 md:px-10 md:py-16"
    >
      <div className="mb-6 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        Contact
      </div>
      <h2 className="max-w-3xl font-serif text-5xl leading-[1.02] md:text-7xl">
        Let&apos;s talk.
      </h2>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        Based in Berlin. Available for consulting, workshops, and fractional product leadership across Europe.
      </p>

      <div className="mt-12">
        <p className="mb-4 max-w-2xl text-base text-muted-foreground">
          Currently available for Q3 engagements.
        </p>
        <p className="mb-8 max-w-2xl text-base text-muted-foreground">
          Most projects start with a scoping conversation or a one-day workshop. From there, engagements are shaped around what actually makes sense for your team and situation. Happy to talk through what that could look like.
        </p>
        <div className="mb-12">
          <ContactForm />
        </div>
        <div className="flex flex-wrap items-center gap-8">
        <a
          href="https://www.linkedin.com/in/dina-bosma-buczynska-b1a64544/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          LinkedIn
          <span aria-hidden>↗</span>
        </a>
        <a
          href="https://github.com/dlbosma-hue"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          GitHub
          <span aria-hidden>↗</span>
        </a>
        <a
          href="https://medium.com/@dinaleonidovnabosma"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Blog
          <span aria-hidden>↗</span>
        </a>
        </div>
      </div>

    </section>
  );
}
