import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function HowIWork() {
  const { t } = useLanguage();
  const steps = t.how.steps;
  return (
    <Section id="how" eyebrow={t.how.eyebrow} title={t.how.title}>
      <ol className="divide-y divide-border border-y border-border">
        {steps.map((s) => (
          <li
            key={s.title}
            className="grid gap-3 py-8 md:grid-cols-12 md:gap-10 md:py-10"
          >
            <h3 className="font-serif text-2xl leading-tight md:col-span-5 md:text-3xl">
              {s.title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-7">
              {s.desc}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
