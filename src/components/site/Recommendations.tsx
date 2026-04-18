import { Section } from "./Section";

const recommendations = [
  {
    quote:
      "Dina is a professional, motivated, and capable Product Owner who bridges the gap between business needs and technical execution effortlessly. She quickly grasped complex technical topics and architectural constraints, allowing her to communicate requirements to the developers with clarity and precision.",
    role: "Engineering Lead, former colleague at Outfittery",
    date: "December 2025",
  },
  {
    quote:
      "She expertly translates complex technical concepts into clear business value while ensuring development teams understand the strategic vision behind each initiative. Rather than simply focusing on feature delivery, she prioritised usability, operational efficiency, and technical debt reduction.",
    role: "Software Architect, former colleague at Outfittery",
    date: "June 2025",
  },
  {
    quote:
      "Dina brings exceptional dedication, ownership, and domain expertise to everything she does. She has a structured, organized approach that ensures initiatives are well-executed and delivered on time. One of her standout strengths is stakeholder management.",
    role: "VP Product, former direct manager",
    date: "June 2025",
  },
  {
    quote:
      "Her work was instrumental in driving improvements that directly supported the performance of our sales team. Dina consistently demonstrated strong dedication, excellent time management, and clear, proactive communication.",
    role: "VP Sales & CS, former senior colleague",
    date: "May 2025",
  },
  {
    quote:
      "Dina has a pragmatic, results-driven approach, always keeping the customer at the center, without losing sight of the end user's needs or the business goals. She has a real talent for breaking down complex topics into clear, accessible insights for a broad audience.",
    role: "CCO and former COO, former senior colleague",
    date: "April 2025",
  },
  {
    quote:
      "Dina excels at balancing long-term vision with short-term execution, ensuring that projects stay aligned with company goals while adapting to market dynamics. Forceful when needed but still always going above and beyond to ensure stakeholders are heard.",
    role: "Former direct manager",
    date: "January 2025",
  },
];

export function Recommendations() {
  return (
    <Section
      id="recommendations"
      eyebrow="Recommendations"
      title="In their words."
    >
      <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:mb-16">
        Excerpts from LinkedIn recommendations by former managers, peers, and engineering
        partners. Names withheld; full versions available on request.
      </p>
      <div className="grid gap-px bg-border sm:grid-cols-2">
        {recommendations.map((r) => (
          <figure
            key={r.role + r.date}
            className="flex flex-col justify-between gap-6 bg-background p-8 md:p-10"
          >
            <blockquote className="font-serif text-lg leading-snug text-foreground/90 md:text-xl">
              <span aria-hidden className="mr-1 text-muted-foreground">
                &ldquo;
              </span>
              {r.quote}
              <span aria-hidden className="ml-1 text-muted-foreground">
                &rdquo;
              </span>
            </blockquote>
            <figcaption className="flex flex-col gap-1 border-t border-border pt-4 text-sm">
              <span className="text-foreground">{r.role}</span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {r.date}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
