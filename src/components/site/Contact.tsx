import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mb-6 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        Contact
      </div>
      <h2 className="max-w-3xl font-serif text-5xl leading-[1.02] md:text-7xl">
        Let&apos;s talk.
      </h2>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        Based in Berlin. Available for consulting, workshops, and fractional Product Management
        work across Europe.
      </p>

      <div className="mt-12">
        <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Currently available for Q3 engagements.
        </div>
        <p className="mb-8 max-w-2xl text-base text-muted-foreground">
          Typical engagements start with a one-day AI potential workshop. From
          there, projects are scoped to what makes sense for your size and
          budget. Day rates start at 600 EUR for strategy and workshops and
          from 800 EUR for technical work. Retainer arrangements are available
          once we have worked together. Happy to talk through what would fit
          on a call.
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
