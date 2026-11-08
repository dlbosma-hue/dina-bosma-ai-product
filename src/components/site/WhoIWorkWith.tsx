import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";
import dachAsset from "@/assets/dach.png.asset.json";

export function WhoIWorkWith() {
  const { t } = useLanguage();
  return (
    <div className="bg-rose">
      <div className="mx-auto max-w-6xl px-5 pt-12 md:px-8 md:pt-16">
        <img src={dachAsset.url} alt="DACH region collaboration: service businesses, teams, and retail across Europe" className="max-h-64 w-full border-2 border-navy object-cover" />
      </div>
      <Section id="who" eyebrow={t.who.eyebrow} title={t.who.title} className="border-b-0">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5 text-lg text-navy">
            <p>{t.who.intro}</p>
            <p>{t.who.listIntro}</p>
            <ul className="list-disc space-y-3 pl-5 marker:text-navy">
              {t.who.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <p>{t.who.closing}</p>
          </div>
          <div className="retro-card bg-cream p-6 md:p-8">
            <h3 className="text-2xl">{t.who.fitHeading}</h3>
            <p className="mt-5 text-base">{t.who.fit1}</p>
            <p className="mt-4 text-base">{t.who.fit2}</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
