import { useLanguage } from "@/lib/i18n";
import heroWave from "@/assets/hero-wave.png.asset.json";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="top"
      className="mx-auto max-w-7xl px-6 md:px-10"
    >
      <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-0">
        {/* Left: text */}
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <div className="mb-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            {t.hero.eyebrow}
          </div>
          <h1 className="font-serif text-5xl leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
            HUMINT
          </h1>
          <p className="mt-6 max-w-xl font-serif text-3xl leading-[1.2] text-foreground md:text-[2.5rem]">
            {t.hero.headline} <span className="italic">{t.hero.headlineItalic}</span>
          </p>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            {t.hero.intro}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            {t.hero.availability}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-wide text-foreground transition-opacity hover:opacity-70"
            >
              {t.hero.ctaPrimary}
              <span aria-hidden>→</span>
            </a>
            <a
              href={t.nav.gumroad.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.hero.gumroad}
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="order-1 relative flex h-[40vh] items-center justify-center lg:order-2 lg:h-auto lg:min-h-[calc(100vh-5rem)]">
          <img
            src={heroWave.url}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
