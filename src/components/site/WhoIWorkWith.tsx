import { Section } from "./Section";

const companyTypes = [
  "Startups and scale-ups building their first meaningful AI layer",
  "Product teams shipping AI features without deep internal AI expertise",
  "Retail and e-commerce businesses, especially in fashion and lifestyle, with operational bottlenecks and data they are not yet using systematically. This is where the Outfittery experience translates directly.",
  "Small business owners who want to automate repetitive work and use AI practically in their day-to-day operations, without needing a technical team to make it happen.",
  "Founders who need someone who can talk to engineers and business stakeholders equally well",
];

const signals = [
  "Your team has identified an AI opportunity but has not turned it into a real build yet",
  "You have tested tools, but nothing has stuck operationally",
  "Your project is stalled between idea, implementation, and adoption",
  "You need hands-on help, not just a slide deck",
];

export function WhoIWorkWith() {
  const columns = [
    { title: "Who I work with", items: companyTypes },
    { title: "When it tends to fit", items: signals },
  ];
  return (
    <Section id="who" eyebrow="Engagements" title="Who I work with.">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {col.title}
            </h3>
            <ul className="space-y-5">
              {col.items.map((item) => (
                <li
                  key={item}
                  className="font-serif text-xl leading-snug text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}