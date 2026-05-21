import { Section } from "./Section";

const services = [
  {
    title: "AI workflow integration",
    desc: "You have repetitive work eating up your team's time. I connect agents, automations, and pipelines to how your team actually works, not how a demo assumes they do.",
  },
  {
    title: "AI product strategy and roadmapping",
    desc: "You know AI should be part of your product but you are not sure where to start or what to build first. I help you cut through the noise and decide what actually moves the needle.",
  },
  {
    title: "Build or buy analysis",
    desc: "There are a hundred tools promising to solve your problem. I give you an honest comparison with no vendor allegiance and no resale fees.",
  },
  {
    title: "Practical AI compliance support",
    desc: "GDPR and the EU AI Act feel overwhelming. I translate them into clear steps your team can actually follow, without the legalese.",
  },
  {
    title: "Fractional product leadership",
    desc: "You need someone who can work alongside your team, not just hand over a slide deck. I embed part-time and help you ship.",
  },
];

export function Services() {
  return (
    <Section id="services" eyebrow="What I do" title="Services.">
      <ul className="divide-y divide-border border-y border-border">
        {services.map((s) => (
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
      </ul>
    </Section>
  );
}
