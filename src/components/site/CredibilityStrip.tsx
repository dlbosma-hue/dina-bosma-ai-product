import { useLanguage } from "@/lib/i18n";

export function CredibilityStrip() {
  const { t } = useLanguage();
  return (
    <section aria-label="Credibility" className="border-b-2 border-navy bg-rose">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs font-semibold uppercase tracking-[0.14em] text-navy md:flex-row md:items-center md:justify-between md:px-8">
        {t.credibility.map((item, i) => (
          <span key={item} className="flex items-center gap-5">
            {item}
            {i < t.credibility.length - 1 && <span aria-hidden className="hidden h-0.5 w-8 bg-grapefruit md:inline-block" />}
          </span>
        ))}
      </div>
    </section>
  );
}
