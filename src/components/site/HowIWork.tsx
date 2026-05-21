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
    desc: "Adoption, handover, compliance, and the human side. The part most AI projects underestimate. Because adoption is the point. A system your team doesn't use is just expensive infrastructure.",
  },
];

export function HowIWork() {
  return (
    <Section id="how" eyebrow="How I work" title="A clear engagement.">
      <ol className="divide-y divide-border border-y border-border">
        {steps.map((s) => (
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
      </ol>
    </Section>
  );
}
