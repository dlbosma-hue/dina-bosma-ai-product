import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-7 md:px-10 md:py-10"
    >
      <div className="mb-6 flex items-center gap-3 text-[13px] uppercase tracking-[0.28em] text-muted-foreground">
        <span aria-hidden="true" className="h-3 w-[3px] shrink-0 bg-accent" />
        {t.contact.eyebrow}
      </div>
      <h2 className="max-w-3xl font-serif text-[50px] leading-[1.02] md:text-[74px]">
        {t.contact.title}
      </h2>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        {t.contact.intro}
      </p>

      <div className="mt-8">
        <p className="mb-4 max-w-2xl text-base text-muted-foreground">
          {t.contact.availability}
        </p>
        <p className="mb-8 max-w-2xl text-base text-muted-foreground">
          {t.contact.pricing}
        </p>
        <p className="mb-8 max-w-2xl text-base text-muted-foreground">
          {t.contact.values}
        </p>
        <a
          href="https://calendly.com/dlbosma/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <span>{t.contact.bookingCta}</span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 motion-reduce:translate-x-0 motion-reduce:transition-none group-hover:translate-x-1 group-active:translate-x-1"
          >
            &#8594;
          </span>
        </a>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          {t.contact.calendlyNote}
        </p>
      </div>

    </section>
  );
}
