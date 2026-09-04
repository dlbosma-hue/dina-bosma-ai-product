import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";
import dachAsset from "@/assets/dach.png.asset.json";


export function WhoIWorkWith() {
  const { t } = useLanguage();
  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <img
          src={dachAsset.url}
          alt="DACH region collaboration: service businesses, teams, and retail across Europe"
          className="w-full border-2 border-white"
        />
      </div>
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
          <h3 className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden="true" className="h-3 w-[3px] shrink-0 bg-accent" />
            {t.who.fitHeading}
          </h3>
          <p>{t.who.fit1}</p>
          <p>{t.who.fit2}</p>
        </div>
      </div>
    </Section>
    </div>
  );
}
