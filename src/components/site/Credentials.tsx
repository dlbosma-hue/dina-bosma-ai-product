import { Section } from "./Section";

const items = [
  { title: "AI Consulting & Integration", org: "IronHack", year: "2026" },
  { title: "Microsoft Certified: AI-900 Azure AI Fundamentals", org: "Microsoft", year: "" },
  { title: "Certified Agile Project Manager", org: "IAPM", year: "" },
];

export function Credentials() {
  return (
    <Section id="credentials" eyebrow="Credentials" title="Certified.">
      <ul className="divide-y divide-border border-y border-border">
        {items.map((i) => (
          <li
            key={i.title}
            className="flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8"
          >
            <span className="font-serif text-xl md:text-2xl">{i.title}</span>
            <span className="text-sm text-muted-foreground">
              {i.org}
              {i.year && <span className="ml-3 font-mono text-xs">{i.year}</span>}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
