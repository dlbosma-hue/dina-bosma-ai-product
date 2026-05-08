import { Section } from "./Section";

const companyTypes = [
  "Startups and scale-ups building their first AI layer",
  "Retail and e-commerce teams with manual ops bottlenecks",
  "Founders who need someone to bridge strategy and engineering",
  "Product teams shipping AI features without internal expertise",
  "Mid-size companies sitting on data they're not using yet",
];

const signals = [
  "Your team is drowning in repetitive manual work",
  "You've tried AI tools but nothing has stuck",
  "You have a use case but no one to build it",
  "Your AI project stalled between planning and production",
  "You need someone who speaks both stakeholder and engineer",
];

export function WhoIWorkWith() {
  return (
    <Section id="who" eyebrow="Who I work with" title="Who I work with.">
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {[
          { title: "Company types.", items: companyTypes },
          { title: "You might need me if.", items: signals },
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