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
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="mb-6 font-serif text-2xl leading-tight">Company types.</h3>
          <ul className="space-y-4 text-foreground/85">
            {companyTypes.map((item, i) => (
              <li key={item} className="flex gap-4 border-t border-border pt-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 font-serif text-2xl leading-tight">You might need me if.</h3>
          <ul className="space-y-4 text-foreground/85">
            {signals.map((item, i) => (
              <li key={item} className="flex gap-4 border-t border-border pt-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}