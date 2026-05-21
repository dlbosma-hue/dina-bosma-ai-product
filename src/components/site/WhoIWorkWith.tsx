import { Section } from "./Section";

export function WhoIWorkWith() {
  return (
    <Section id="who" eyebrow="Engagements" title="Who I work with.">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Who I work with
          </h3>
          <p>
            I work with startups and scale-ups building their first real AI
            layer, and product teams shipping AI features without deep
            internal expertise. A good chunk of my work is in retail and
            e-commerce, especially fashion and lifestyle, where there is
            usually operational data sitting unused and bottlenecks that AI
            can actually fix. That is where the Outfittery experience
            translates directly.
          </p>
          <p>
            I also work with small business owners who want to automate
            repetitive work without needing a technical team, and founders
            who need someone who can talk to engineers and business
            stakeholders in the same conversation.
          </p>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            When it tends to fit
          </h3>
          <p>
            Usually your team has spotted an AI opportunity but has not
            turned it into a real build yet. You have tested a few tools,
            but nothing has stuck operationally, and the project is stalled
            somewhere between idea, implementation, and adoption.
          </p>
          <p>
            At that point you need hands-on help, not another slide deck.
            That is the moment I tend to come in.
          </p>
        </div>
      </div>
    </Section>
  );
}