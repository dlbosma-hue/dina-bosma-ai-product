import { useLanguage } from "@/lib/i18n";

export function CredibilityStrip() {
  const { t } = useLanguage();
  const items = t.credibility;
  return (
    <section aria-label="Credibility" className="border-y border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-6 text-xs uppercase tracking-[0.22em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-6">
            {item}
            {i < items.length - 1 && (
              <span aria-hidden className="hidden h-px w-8 bg-border md:inline-block" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
