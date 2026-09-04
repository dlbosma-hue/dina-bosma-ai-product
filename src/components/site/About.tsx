import { Section } from "./Section";
import dinaPortrait from "@/assets/dina-portrait.jpg.asset.json";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();
  return (
    <Section id="about" eyebrow={t.about.eyebrow}>
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>
            {t.about.p3a}
            <br />
            {t.about.p3b}
          </p>
          <p className="text-base">{t.about.p4}</p>
        </div>
        <aside className="md:col-span-2 md:border-l md:border-border md:pl-10 flex flex-col justify-center">
          <img
            src={dinaPortrait.url}
            alt={t.about.portraitAlt}
            className="aspect-square w-full max-w-[200px] rounded-full object-cover mx-auto"
          />
        </aside>
      </div>
    </Section>
  );
}
