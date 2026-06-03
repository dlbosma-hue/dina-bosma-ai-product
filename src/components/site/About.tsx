import { Section } from "./Section";
import dinaPortrait from "@/assets/dina-portrait.png.asset.json";

export function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            Before I managed the tools, I used them. As an online stylist
            with my own customer portfolio, I knew what the job actually
            demanded. Then I became the Product Manager building the platform
            for people doing that same work.
          </p>
          <p>
            I now work as an AI consultant and product leader, helping small
            businesses and founders build systems that reduce manual work
            without sidelining their people. No AI for the sake of it.
            <br />
            Just systems that reduce manual work and free people up to do what
            only humans can do.
          </p>
          <p className="text-base text-muted-foreground">
            Based in Berlin. Working in Dutch (native), English (C2), and
            German (C1).
          </p>
        </div>
        <aside className="md:col-span-2">
          <figure className="relative w-full max-w-sm border border-border bg-muted">
            <img
              src={dinaPortrait.url}
              alt="Portrait of Dina Bosma-Buczynska"
              className="block aspect-[4/5] w-full object-cover"
            />
          </figure>
        </aside>
      </div>
    </Section>
  );
}
