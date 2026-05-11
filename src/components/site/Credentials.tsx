import { Section } from "./Section";

const items = [
  {
    title: "AI Consulting & Integration",
    org: "IronHack",
    year: "2026",
    detail:
      "Intensive programme covering agents, RAG, ML, automation, GDPR and EU AI Act, delivered through a full client-style capstone.",
  },
  {
    title: "Microsoft Certified: AI-900 Azure AI Fundamentals",
    org: "Microsoft",
    year: "",
    detail: "Foundational certification in AI workloads, responsible AI, and Azure AI services.",
  },
];

const experience = [
  {
    title: "Product Manager, internal tools",
    org: "Outfittery",
    year: "4 yrs",
    detail:
      "Shipped internal AI-assisted and operational tools used daily by stylists and operations teams.",
  },
];

export function Credentials() {
  return (
    <Section id="credentials" eyebrow="Credentials" title="Background and certifications.">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Experience
          </h3>
          <ul className="divide-y divide-border border-y border-border">
            {experience.map((i) => (
              <li key={i.title} className="py-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <span className="font-serif text-xl leading-tight md:text-2xl">{i.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {i.org}
                    {i.year && <span className="ml-3 font-mono text-xs">{i.year}</span>}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Certifications
          </h3>
          <ul className="divide-y divide-border border-y border-border">
            {items.map((i) => (
              <li key={i.title} className="py-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <span className="font-serif text-xl leading-tight md:text-2xl">{i.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {i.org}
                    {i.year && <span className="ml-3 font-mono text-xs">{i.year}</span>}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
