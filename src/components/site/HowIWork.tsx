import { Section } from "./Section";

const steps = [
  {
    title: "Find the coordination tax",
    desc: "Before anything gets built, I look at how work actually moves. Where are people doing what a process should be doing? Where is information getting lost between handoffs? Most operational drag hides in the gaps between tools and between people, not in the tools themselves.",
  },
  {
    title: "Decide what is worth fixing",
    desc: "Not every inefficiency is worth automating. I help you separate the high-cost, high-frequency problems from the ones that feel annoying but do not move the needle. Honest trade-offs, no vendor allegiance, no solution looking for a problem.",
  },
  {
    title: "Build something that works in practice",
    desc: "A working slice, not a slide deck. Agents, automations, pipelines, or product features, scoped to deliver value early and designed around how your team actually works, not how a demo assumes they do.",
  },
  {
    title: "Hand it over so it sticks",
    desc: "Most AI projects fail at adoption, not at build. I make sure the system is usable without me: documented, compliant where it needs to be, and understood by the people who will run it. Because a system your team does not use is just expensive infrastructure.",
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
