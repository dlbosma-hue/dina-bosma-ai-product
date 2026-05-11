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
      <ul className="divide-y divide-border border-y border-border">
        {services.map((s) => (
          <li
            key={s.title}
            className="grid gap-3 py-8 md:grid-cols-12 md:gap-10 md:py-10"
          >
            <h3 className="font-serif text-2xl leading-tight md:col-span-5 md:text-3xl">
              {s.title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-7">
              {s.desc}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
