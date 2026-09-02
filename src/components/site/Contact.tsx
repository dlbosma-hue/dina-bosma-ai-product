import { ContactForm } from "./ContactForm";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-12 md:px-10 md:py-16"
    >
      <div className="mb-6 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        {t.contact.eyebrow}
      </div>
      <h2 className="max-w-3xl font-serif text-5xl leading-[1.02] md:text-7xl">
        {t.contact.title}
      </h2>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        {t.contact.intro}
      </p>

      <div className="mt-12">
        <p className="mb-4 max-w-2xl text-base text-muted-foreground">
          {t.contact.availability}
        </p>
        <p className="mb-8 max-w-2xl text-base text-muted-foreground">
          {t.contact.pricing}
        </p>
        <p className="mb-8 max-w-2xl text-base text-muted-foreground">
          {t.contact.values}
        </p>
        <div className="mb-12">
          <ContactForm />
        </div>
      </div>

    </section>
  );
}
