import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function Services() {
  const { t } = useLanguage();
  const services = t.services.items;
  return (
    <Section id="services" eyebrow={t.services.eyebrow} title={t.services.title}>
      <ul className="humint-services-grid">
        {services.map((s) => (
          <li
            key={s.title}
              className="humint-service-card"
          >
            <span aria-hidden="true" className="humint-service-dot" />
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
