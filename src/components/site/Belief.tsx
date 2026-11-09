import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function Belief() {
  const { t } = useLanguage();
  return (
    <Section id="belief" eyebrow={t.belief.eyebrow}>
      <ul className="humint-belief-points">
        {t.credibility.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {t.belief.body}
      </p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {t.belief.body2}
      </p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {t.belief.body3}
      </p>
    </Section>
  );
}
