import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function Services() {
  const { t } = useLanguage();
  const services = t.services.items;
  return (
    <Section id="services" eyebrow={t.services.eyebrow} title={t.services.title}>
      <ul className="divide-y divide-border border-y border-border">
        {services.map((s) => (
          <li
            key={s.title}
            className="grid gap-3 py-8 md:grid-cols-12 md:gap-10 md:py-10"
          >
            <h3 className="font-serif text-[26px] leading-tight md:col-span-5 md:text-[32px]">
              {s.title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-7">
              {s.desc}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
