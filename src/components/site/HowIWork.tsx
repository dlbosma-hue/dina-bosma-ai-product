import { Section } from "./Section";

const steps = [
  {
    title: "Clarify the business problem",
    desc: "Cut through the noise. Define what success actually looks like before touching a model or a tool.",
  },
  {
    title: "Shape the right solution",
    desc: "Decide what to build, what to buy, and what to leave alone. Honest trade-offs, no vendor allegiance.",
  },
  {
    title: "Build the first valuable version",
    desc: "Ship a working slice, not a slide deck. Agents, RAG, automations, or product features, scoped to deliver value early.",
  },
  {
    title: "Make it usable in the real world",
    desc: "Adoption, handover, compliance, and the human side. The part most AI projects underestimate.",
  },
];

export function HowIWork() {
  return (
    <Section id="how" eyebrow="How I work" title="A clear, four-step engagement.">
      <ol className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="bg-background p-8 transition-colors hover:bg-muted/40 md:p-10"
          >
            <div className="mb-4 font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-serif text-2xl leading-tight">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
