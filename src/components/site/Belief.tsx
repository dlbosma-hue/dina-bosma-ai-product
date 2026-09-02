import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function Belief() {
  const { t } = useLanguage();
  return (
    <Section id="belief" eyebrow={t.belief.eyebrow}>
      <div className="flex flex-col items-center py-6 md:py-10">
        <blockquote className="text-center font-serif tracking-tight text-foreground">
          <p className="text-4xl leading-[1.05] md:text-6xl">
            {t.belief.line1}
            <span className="mt-2 block">
              <span className="relative inline-block">
                {t.belief.word}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent"
                />
              </span>
            </span>
            <span className="mt-4 block">{t.belief.line3}</span>
          </p>
        </blockquote>
      </div>
      <p className="mx-auto mt-6 md:mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {t.belief.body}
      </p>
      <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {t.belief.body2}
      </p>
    </Section>
  );
}
