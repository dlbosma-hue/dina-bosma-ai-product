import { Section } from "./Section";
import dinaPortrait from "@/assets/dina-portrait.jpg";

export function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            Before I managed the tools, I used them. As an online stylist
            with my own customer portfolio, I knew what the job actually
            demanded. Then I became the Product Manager building the
            platform for people doing that same work.
          </p>
          <p>
            I now work as an AI consultant and product leader, helping small
            businesses and founders build systems that reduce manual work
            without sidelining their people. No AI for the sake of it. Just
            systems that reduce manual work and free people up to do what
            only humans can do.
          </p>
          <p className="text-base text-muted-foreground">
            Based in Berlin. Working in Dutch (native), English (C2), and
            German (C1).
          </p>
        </div>
        <aside className="md:col-span-2 md:border-l md:border-border md:pl-10">
          <img
            src={dinaPortrait}
            alt="Portrait of Dina Bosma-Buczynska"
            className="aspect-square w-full max-w-xs rounded-full object-cover"
          />
        </aside>
      </div>
    </Section>
  );
}
