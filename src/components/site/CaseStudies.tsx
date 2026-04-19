import { Section } from "./Section";

type Metric = { value: string; label: string };

type Case = {
  client: string;
  title: string;
  body: string;
  metrics: Metric[];
  tags: string[];
  link?: string;
};

const cases: Case[] = [
  {
    client: "Outfittery",
    title: "AI-Assisted Stylist Platform",
    body: "Led product for an internal AI system integrating OpenAI APIs and workflow automation into the stylist workflow. Scoped requirements, aligned engineering and ops stakeholders, and shipped iteratively, keeping humans in control throughout.",
    metrics: [
      { value: "+17%", label: "efficiency (29 → 34 orders/day)" },
      { value: "−80%", label: "manual coordination workload" },
    ],
    tags: ["OpenAI API", "Workflow Automation", "Product Strategy", "Stakeholder Alignment"],
  },
  {
    client: "Spottr / Capstone Project",
    title: "AI Member Retention for Boutique Fitness Studios",
    body: "End-to-end AI consultant engagement: scoped the business problem, built a logistic regression churn model (92.5% accuracy, 0.977 AUC-ROC), automated weekly coach briefings via n8n, integrated GDPR-compliant wearable data, and delivered a full EU AI Act compliance pack and commercialisation roadmap.",
    metrics: [
      { value: "33 days", label: "break-even point" },
      { value: "1,099%", label: "projected 12-month ROI" },
    ],
    tags: ["Python", "scikit-learn", "LangChain", "n8n", "GDPR", "EU AI Act"],
    link: "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/Final_Project_DinaBB",
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
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.body}</p>

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

            <div className="mt-6 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            {c.link && (
              <div className="mt-6 border-t border-border pt-5">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground underline-offset-4 hover:underline"
                >
                  View project ↗
                </a>
              </div>
            )}
            {c.client === "Spottr / Capstone Project" && (
              <div className="mt-6 rounded-md border border-border bg-muted/30 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-accent">
                      Pitch deck
                    </div>
                    <div className="mt-1 font-serif text-lg leading-tight">
                      Spottr — Smart Member Retention
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      PDF, 8 slides
                    </p>
                  </div>
                  <a
                    href="/spottr_deck.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground/40"
                  >
                    Open deck ↗
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
