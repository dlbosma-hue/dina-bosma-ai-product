import { Section } from "./Section";

type Metric = { value: string; label: string };

type Case = {
  client: string;
  title: string;
  body: string;
  role?: string;
  deliverables?: string[];
  metrics: Metric[];
  tags: string[];
  link?: string;
};

const cases: Case[] = [
  {
    client: "Outfittery",
    title: "AI-Assisted Stylist Platform",
    role: "Product Manager, internal tools",
    body: "The online stylist team was spending a significant part of every working day on coordination that should have been handled by the system. Matching customers to stylists, routing work, chasing status. I defined the problem with operations, scoped the fix with engineering, and shipped iteratively into live workflows without disrupting the team mid-shift.",
    deliverables: [
      "Reduced manual coordination workload by 80% through automated customer-stylist assignment",
      "Increased throughput from 29 to 34 orders per day through AI-assisted decision support, keeping stylists in control of every customer-facing call",
    ],
    metrics: [
      { value: "+17%", label: "efficiency (29 → 34 orders/day)" },
      { value: "−80%", label: "manual coordination workload" },
    ],
    tags: [],
  },
  {
    client: "Spottr / Capstone Project",
    title: "AI Member Retention for Boutique Fitness Studios",
    role: "End-to-end AI consultant engagement",
    body: "Structured as a real consulting engagement from day one. Identified churn as the core commercial problem for boutique fitness studios, built and validated a working MVP, and packaged the result with the documentation a buyer needs before saying yes to any AI system.",
    deliverables: [
      "Working churn prediction model at 92.5% accuracy with automated weekly coach briefings via n8n",
      "GDPR data protection impact assessment covering wearable and member data",
      "EU AI Act compliance pack and standalone ROI model included as standard",
    ],
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
                        Based on a modelled scenario: 200-member studio, €3K implementation cost
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
