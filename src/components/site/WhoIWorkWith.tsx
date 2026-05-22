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
            I work best with small businesses, founders, and small teams who
            want to use AI in a way that still feels human.
          </p>
          <p>That includes:</p>
          <ul className="space-y-3 pl-5 list-disc marker:text-muted-foreground">
            <li>
              Small and growing businesses with repetitive operational work
              they want to get off their plate.
            </li>
            <li>
              Founders and startups building their first AI layer, without a
              dedicated tech team to make it happen.
            </li>
            <li>
              Retail and e-commerce teams, especially in fashion and
              lifestyle, sitting on data they are not yet using.
            </li>
          </ul>
          <p>
            If you have identified a problem and need someone who can both
            think it through and build something real, that is where I
            come in.
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
          </p>
        </div>
      </div>
    </Section>
  );
}