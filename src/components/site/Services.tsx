import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function Services() {
  const { t } = useLanguage();
  return (
    <Section id="services" eyebrow={t.services.eyebrow} title={t.services.title}>
      <ul className="grid gap-4">
        {t.services.items.map((s, i) => (
          <li key={s.title} className={`retro-card grid gap-4 p-6 md:grid-cols-12 md:gap-8 md:p-8 ${i % 2 ? "bg-rose" : "bg-cream"}`}>
            <h3 className="text-3xl md:col-span-5 md:text-4xl">{s.title}</h3>
            <p className="text-base text-navy md:col-span-7">{s.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
