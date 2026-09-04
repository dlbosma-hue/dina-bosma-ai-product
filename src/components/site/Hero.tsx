import { useLanguage } from "@/lib/i18n";
import heroWave from "@/assets/hero-wave.png.asset.json";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden"
    >
      {/* Full-width background image */}
      <img
        src={heroWave.url}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col justify-center px-6 py-16 md:px-10">
        <div className="mb-8 text-[11px] uppercase tracking-[0.28em] text-background/70">
          {t.hero.eyebrow}
        </div>
        <h1 className="font-serif text-6xl leading-[0.98] tracking-tight text-background md:text-8xl lg:text-[8.5rem]">
          HUMINT
        </h1>
        <p className="mt-6 max-w-3xl font-serif text-3xl leading-[1.2] text-background md:text-[2.5rem]">
          {t.hero.headline} <span className="italic">{t.hero.headlineItalic}</span>
        </p>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-background/80">
          {t.hero.intro}
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-background/80">
          {t.hero.availability}
        </p>
        <div className="mt-10 flex flex-col items-start gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-b border-background pb-1 text-sm tracking-wide text-background transition-opacity hover:opacity-70"
          >
            {t.hero.ctaPrimary}
            <span aria-hidden>→</span>
          </a>
          <a
            href={t.nav.gumroad.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-background transition-colors hover:text-background/80"
          >
            {t.hero.gumroad}
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
