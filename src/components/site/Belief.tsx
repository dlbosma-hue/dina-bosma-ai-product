import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function Belief() {
  const { t } = useLanguage();
  return (
    <Section id="belief" eyebrow={t.belief.eyebrow}>
      <blockquote className="max-w-5xl font-headline text-4xl leading-[1.05] text-navy md:text-7xl">
        <p className="max-w-none">{t.belief.line1}<span className="mt-2 block"><span className="inline-block border-b-4 border-grapefruit pb-1">{t.belief.word}</span></span><span className="mt-4 block">{t.belief.line3}</span></p>
      </blockquote>
      <div className="mt-8 space-y-4 text-lg text-navy">
        <p>{t.belief.body}</p>
        <p>{t.belief.body2}</p>
        <p>{t.belief.body3}</p>
      </div>
    </Section>
  );
}
