import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function WhoIWorkWith() {
  const { t } = useLanguage();
  return (
    <Section id="who" eyebrow={t.who.eyebrow} title={t.who.title}>
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>{t.who.intro}</p>
          <p>{t.who.listIntro}</p>
          <ul className="space-y-3 pl-5 list-disc marker:text-muted-foreground">
            {t.who.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p>{t.who.closing}</p>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {t.who.fitHeading}
          </h3>
          <p>{t.who.fit1}</p>
          <p>{t.who.fit2}</p>
        </div>
      </div>
    </Section>
  );
}