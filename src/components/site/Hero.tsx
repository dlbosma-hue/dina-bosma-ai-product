import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pt-16 pb-14 md:px-10 md:pt-24 md:pb-20"
    >
      <div className="mb-10 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        {t.hero.eyebrow}
      </div>
      <h1 className="font-serif text-6xl leading-[0.98] tracking-tight md:text-8xl lg:text-[8.5rem]">
        HUMINT
      </h1>
      <p className="mt-10 max-w-3xl font-serif text-3xl leading-[1.2] text-foreground md:text-[2.5rem]">
        {t.hero.headline} <span className="italic">{t.hero.headlineItalic}</span>
      </p>
      <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
        {t.hero.intro}
        <br />
        {t.hero.availability}
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-8">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-wide text-foreground transition-opacity hover:opacity-70"
        >
          {t.hero.ctaPrimary}
          <span aria-hidden>→</span>
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
