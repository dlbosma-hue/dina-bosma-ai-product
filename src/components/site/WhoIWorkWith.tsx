import { Section } from "./Section";

const companyTypes = [
  "Startups and scale-ups building their first meaningful AI layer",
  "Product teams shipping AI features without deep internal AI expertise",
  "Retail, e-commerce, and service businesses with operational bottlenecks and unused data",
  "Founders who need someone who can talk to engineers and business stakeholders equally well",
];

const signals = [
  "Your team has identified an AI opportunity but has not turned it into a real build yet",
  "You have tested tools, but nothing has stuck operationally",
  "Your project is stalled between idea, implementation, and adoption",
  "You need hands-on help, not just a slide deck",
];

export function WhoIWorkWith() {
  return (
    <Section id="who" eyebrow="Who I work with" title="Who I work with.">
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {[
          { title: "Who I work with.", items: companyTypes },
          { title: "You will probably benefit from working with me if.", items: signals },
        ].map((col) => (
          <div
            key={col.title}
            className="rounded-lg border border-border bg-card/40 p-6 md:p-8"
          >
            <h3 className="mb-6 font-serif text-2xl leading-tight">{col.title}</h3>
            <ul className="divide-y divide-border/70">
              {col.items.map((item, i) => (
                <li key={item} className="flex items-start gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="mt-1 shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-relaxed text-foreground/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}