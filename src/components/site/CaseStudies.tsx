import { Section } from "./Section";

const cases = [
  {
    client: "Outfittery",
    title: "AI-Assisted Stylist Platform",
    body: "Built AI decision systems integrating OpenAI APIs and workflow automation. Humans stayed in control throughout.",
    metrics: [
      { value: "+17%", label: "efficiency (29 → 34 orders/day)" },
      { value: "−80%", label: "manual coordination workload" },
    ],
    tags: ["LangChain", "OpenAI API", "Workflow Automation", "Product Strategy"],
  },
  {
    client: "Confidential Client",
    title: "Churn Prediction System",
    body: "Designed and built a machine learning system to identify at-risk customers before they churn. Reactive retention became proactive strategy.",
    metrics: [],
    tags: ["Python", "scikit-learn", "ML Classification", "Business Strategy"],
  },
];

export function CaseStudies() {
  return (
    <Section id="work" eyebrow="Selected work" title="Case studies.">
      <div className="grid gap-8 md:grid-cols-2">
        {cases.map((c) => (
          <article
            key={c.title}
            className="flex flex-col rounded-lg border border-border bg-background p-8 transition-colors hover:border-foreground/30 md:p-10"
          >
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-accent">
              {c.client}
            </div>
            <h3 className="font-serif text-3xl leading-tight">{c.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {c.body}
            </p>

            {c.metrics.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-serif text-3xl">{m.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
