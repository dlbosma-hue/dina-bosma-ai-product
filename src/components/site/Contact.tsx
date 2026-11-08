import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="scroll-mt-28 border-b-2 border-navy bg-sky">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <span className="retro-tape bg-rose">{t.contact.eyebrow}</span>
        <h2 className="mt-7 max-w-4xl text-5xl md:text-7xl">{t.contact.title}</h2>
        <p className="mt-6 text-lg text-navy">{t.contact.intro}</p>
        <div className="mt-7 space-y-4 text-base text-navy">
          <p>{t.contact.availability}</p>
          <p>{t.contact.pricing}</p>
          <p>{t.contact.values}</p>
        </div>
        <div className="mt-8 max-w-4xl overflow-hidden border-2 border-navy bg-cream">
          <iframe src="https://calendly.com/dlbosma/30min?hide_event_type_details=1&hide_gdpr_banner=1" title="Calendly – Gespräch buchen" loading="lazy" className="h-[700px] w-full" />
        </div>
      </div>
    </section>
  );
}
