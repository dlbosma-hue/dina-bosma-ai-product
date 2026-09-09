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
        <div className="mb-12 max-w-3xl overflow-hidden border border-border/60">
          <iframe
            src="https://calendly.com/dlbosma/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            title="Calendly – Gespräch buchen"
            loading="lazy"
            className="h-[700px] w-full"
          />
        </div>
      </div>

    </section>
  );
}
