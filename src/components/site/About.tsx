import { Section } from "./Section";
import dinaPortrait from "@/assets/dina-portrait-square.jpg";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();
  return (
    <Section id="about" eyebrow={t.about.eyebrow}>
      <div className="grid items-center gap-10 md:grid-cols-5">
        <div className="space-y-5 text-lg text-navy md:col-span-3">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3a}<br />{t.about.p3b}</p>
          <p className="text-base">{t.about.p4}</p>
        </div>
        <aside className="retro-card mx-auto w-full max-w-xs bg-rose p-5 md:col-span-2">
          <img src={dinaPortrait} alt={t.about.portraitAlt} className="aspect-square w-full rounded-full border-2 border-navy object-cover" />
        </aside>
      </div>
    </Section>
  );
}
