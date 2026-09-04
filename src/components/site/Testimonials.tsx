import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useLanguage();
  const quotes = t.testimonials.quotes;
  return (
    <Section
      id="testimonials"
      eyebrow={t.testimonials.eyebrow}
      title={t.testimonials.title}
    >
      <div className="grid gap-px bg-border md:grid-cols-3">
        {quotes.map((q) => (
          <figure
            key={q.role}
            className="flex flex-col justify-between gap-6 bg-background p-8 md:p-10"
          >
            <blockquote className="font-serif text-[20px] leading-snug text-foreground/90 md:text-[22px]">
              <span aria-hidden className="text-muted-foreground">&ldquo;</span>{q.quote}<span aria-hidden className="text-muted-foreground">&rdquo;</span>
            </blockquote>
            <figcaption className="flex flex-col gap-1 border-t border-border pt-4 text-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {q.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}