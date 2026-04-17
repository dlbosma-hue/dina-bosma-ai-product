import { Section } from "./Section";

const services = [
  {
    title: "AI Workflow Integration",
    desc: "LangChain, n8n, RAG pipelines, agents.",
  },
  {
    title: "AI Product Strategy & Roadmapping",
    desc: "Outcomes over output. Roadmaps that survive contact with reality.",
  },
  {
    title: "Build-or-Buy Analysis & Vendor Selection",
    desc: "Honest trade-offs. No vendor allegiance.",
  },
  {
    title: "EU AI Act & GDPR Compliance",
    desc: "Practical guidance, not legalese.",
  },
  {
    title: "Stakeholder Workshop Facilitation",
    desc: "Aligning humans before aligning models.",
  },
  {
    title: "Technical PM, Embedded",
    desc: "Hands-on, in your product team, on a fractional basis.",
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
