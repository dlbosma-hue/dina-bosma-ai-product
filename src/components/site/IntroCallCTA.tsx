import { useLanguage } from "@/lib/i18n";

export function IntroCallCTA() {
  const { t } = useLanguage();
  return (
    <section aria-label="Intro call" className="border-y border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 py-16 md:px-10 md:py-20">
        <p className="max-w-2xl font-serif text-2xl leading-snug md:text-3xl">
          {t.introCta.text}
        </p>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-none border border-foreground px-6 py-3 text-sm uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          {t.introCta.button}
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}