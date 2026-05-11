import { Section } from "./Section";

const services = [
  {
    title: "AI workflow integration",
    desc: "Agents, RAG pipelines, and n8n automations wired into the way your team actually works.",
  },
  {
    title: "AI product strategy and roadmapping",
    desc: "Outcomes over output. Roadmaps that survive contact with reality.",
  },
  {
    title: "Build or buy analysis",
    desc: "Honest trade-offs and vendor selection. No allegiance, no resale fees.",
  },
  {
    title: "Practical AI compliance support",
    desc: "GDPR and EU AI Act guidance that engineers and stakeholders can use, not legalese.",
  },
  {
    title: "Fractional product leadership",
    desc: "Embedded in your product team on a fractional basis. Strategy, delivery, and stakeholder alignment.",
  },
];

export function Services() {
  return (
    <Section id="services" eyebrow="What I do" title="Services.">
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group bg-background p-8 transition-colors hover:bg-muted/40 md:p-10"
          >
            <div className="mb-4 font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-serif text-2xl leading-tight">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
