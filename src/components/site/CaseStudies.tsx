import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";
import spottrDeck from "@/assets/spottr-deck.pdf.asset.json";

export function CaseStudies() {
  const { t } = useLanguage();
  const cases = t.cases.items;
  const spottr = cases[1]!.client;
  return (
    <Section id="work" eyebrow={t.cases.eyebrow} title={t.cases.title}>
      <div className="grid gap-6">
        {cases.map((c) => (
          <article key={c.title} className="retro-card p-6 md:p-8">
            <div className="retro-pill">{c.client}</div>
            <h3 className="mt-5 text-4xl md:text-5xl">{c.title}</h3>
            {c.role && <p className="retro-note mt-3">{c.role}</p>}
            <p className="mt-6 text-lg text-navy">{c.body}</p>
            {c.deliverables && c.deliverables.length > 0 && (
              <ul className="mt-7 space-y-3">
                {c.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-base text-navy">
                    <span aria-hidden className="mt-3 h-0.5 w-4 shrink-0 bg-navy" /><span>{d}</span>
                  </li>
                ))}
              </ul>
            )}
            {c.metrics.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-6 border-t-2 border-navy pt-6 md:max-w-2xl">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-headline text-4xl leading-[1.05] md:text-5xl">{m.value}</div>
                    <div className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-navy">{m.label}</div>
                    {c.client === spottr && m.value.includes("099") && <p className="mt-2 text-sm text-navy">{t.cases.roiNote}</p>}
                  </div>
                ))}
              </div>
            )}
            {c.client === spottr && (
              <div className="mt-8 border-2 border-navy bg-sky p-5 md:max-w-2xl">
                <div className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">{t.cases.complianceLabel}</div>
                <p className="mt-2 text-base text-navy">{t.cases.complianceBody}</p>
              </div>
            )}
            {c.tags.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {c.tags.map((tag) => <span key={tag} className="retro-pill">{tag}</span>)}
              </div>
            )}
            {c.client === spottr && (
              <div className="mt-7 border-t-2 border-grapefruit pt-5">
                <div className="text-sm font-semibold uppercase tracking-[0.08em] text-navy">{t.cases.deckLabel}</div>
                <p className="mt-1 text-base font-semibold">{t.cases.deckName}</p>
                <a href={spottrDeck.url} download className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-link underline">
                  {t.cases.deckDownload}
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
