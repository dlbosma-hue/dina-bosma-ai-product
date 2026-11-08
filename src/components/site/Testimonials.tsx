import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <Section id="testimonials" eyebrow={t.testimonials.eyebrow} title={t.testimonials.title}>
      <div className="grid gap-5 md:grid-cols-3">
        {t.testimonials.quotes.map((q) => (
          <figure key={q.role} className="retro-card flex flex-col justify-between gap-6 p-6 md:p-8">
            <blockquote className="text-lg leading-relaxed text-navy">&ldquo;{q.quote}&rdquo;</blockquote>
            <figcaption className="border-t-2 border-grapefruit pt-4">
              <span className="retro-note">{q.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
