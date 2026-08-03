import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function CaseStudies() {
  const { t } = useLanguage();
  const cases = t.cases.items;
  const spottr = cases[1]!.client;
  return (
    <Section id="work" eyebrow={t.cases.eyebrow} title={t.cases.title}>
      <div className="grid gap-16 md:gap-20">
        {cases.map((c) => (
          <article
            key={c.title}
            className="flex flex-col border-t border-foreground/80 pt-10 md:pt-12"
          >
            <div className="mb-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              {c.client}
            </div>
            <h3 className="font-serif text-4xl leading-tight md:text-5xl">{c.title}</h3>
            {c.role && (
              <div className="mt-3 text-sm italic text-muted-foreground">{c.role}</div>
            )}
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/85">{c.body}</p>

            {c.deliverables && c.deliverables.length > 0 && (
              <ul className="mt-8 space-y-3">
                {c.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                  >
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-foreground/40" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            )}

            {c.metrics.length > 0 && (
              <div className="mt-10 grid grid-cols-2 gap-10 border-t border-border pt-8 md:max-w-2xl">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-serif text-4xl md:text-5xl">{m.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{m.label}</div>
                    {c.client === "Spottr / Capstone Project" && m.value === "1,099%" && (
                      <div className="mt-2 text-[11px] leading-snug text-muted-foreground/70">
                        Based on a modelled scenario: studio with 200 members, €3K implementation cost
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {c.client === "Spottr / Capstone Project" && (
              <div className="mt-8 border-l-2 border-foreground/40 bg-muted/30 px-6 py-5 md:max-w-2xl">
                <div className="mb-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  Compliance &amp; buyer readiness
                </div>
                <p className="text-sm leading-relaxed text-foreground/85">
                  Delivered with full compliance documentation: GDPR data
                  protection impact assessment, EU AI Act compliance pack ready
                  for stakeholder review, and a standalone ROI model. Everything
                  a buyer needs before saying yes.
                </p>
              </div>
            )}

            {c.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                {c.tags.map((t, i) => (
                  <span key={t} className="inline-flex items-center">
                    {i > 0 && <span className="mr-2 text-border">·</span>}
                    {t}
                  </span>
                ))}
              </div>
            )}

            {c.link && (
              <div className="mt-8">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-foreground/60 pb-0.5 text-sm text-foreground transition-opacity hover:opacity-70"
                >
                  View project ↗
                </a>
              </div>
            )}
            {c.client === "Spottr / Capstone Project" && (
              <div className="mt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      Pitch deck
                    </div>
                    <div className="mt-1 font-serif text-lg leading-tight">
                      Spottr. Smart Member Retention.
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      PDF, 8 slides
                    </p>
                  </div>
                  <a
                    href="/spottr_deck.pdf"
                    download="Spottr_Smart_Member_Retention_Final_Exact_Version.pdf"
                    className="inline-flex shrink-0 items-center gap-2 border-b border-foreground/60 pb-0.5 text-sm text-foreground transition-opacity hover:opacity-70"
                  >
                    Download deck ↓
                  </a>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
