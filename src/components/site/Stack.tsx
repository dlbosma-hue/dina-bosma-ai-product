import { Section } from "./Section";

const groups = [
  {
    label: "AI & Build",
    items: [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "RAG",
      "MCP",
      "n8n",
      "Gradio",
      "scikit-learn",
    ],
  },
  {
    label: "PM & Delivery",
    items: [
      "OKRs",
      "RICE / MoSCoW",
      "JIRA",
      "Confluence",
      "Power BI",
      "Scrum",
      "Stakeholder Workshops",
    ],
  },
];

export function Stack() {
  return (
    <Section id="stack" eyebrow="Stack" title="Tools I reach for.">
      <div className="space-y-12">
        {groups.map((g) => (
          <div key={g.label} className="grid gap-6 md:grid-cols-5">
            <div className="text-sm uppercase tracking-[0.18em] text-muted-foreground md:col-span-1">
              {g.label}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 md:col-span-4">
              {g.items.map((t) => (
                <span key={t} className="font-serif text-xl text-foreground/90">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
