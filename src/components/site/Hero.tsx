import { useLanguage } from "@/lib/i18n";
import heroWave from "@/assets/hero-wave.png.asset.json";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="border-b-2 border-navy bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-20">
        <div>
          <span className="retro-tape">{t.hero.eyebrow}</span>
          <h1 className="mt-8 text-6xl md:text-8xl lg:text-9xl">
            <span className="retro-chip retro-chip-accent">HUMINT</span>
          </h1>
          <p className="mt-8 font-headline text-3xl leading-[1.05] text-navy md:text-5xl">
            {t.hero.headline} {t.hero.headlineItalic}
          </p>
          <p className="mt-6 text-lg text-navy">{t.hero.intro}</p>
          <p className="mt-4 text-base text-navy">{t.hero.availability}</p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">
            <a href="https://calendly.com/dlbosma/30min" target="_blank" rel="noreferrer" className="retro-button">
              {t.hero.ctaPrimary}<span aria-hidden>→</span>
            </a>
            <a href={t.hero.secondaryHref} target="_blank" rel="noreferrer" className="retro-button retro-button-secondary">
              {t.hero.gumroad}<span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <img src={heroWave.url} alt="" className="hidden aspect-square w-full border-2 border-navy object-cover md:block" />
      </div>
    </section>
  );
}
