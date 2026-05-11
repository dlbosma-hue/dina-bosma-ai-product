import { Section } from "./Section";

const quotes = [
  {
    quote:
      "Dina is a professional, motivated, and capable Product Owner who bridges the gap between business needs and technical execution effortlessly.",
    name: "Biniam Asnake Kefale",
    role: "Engineering Lead, Outfittery",
  },
  {
    quote:
      "Her ability to take initiative and drive projects forward with focus and reliability has made a real impact on our team.",
    name: "Diana Pulnar",
    role: "VP Product, Outfittery",
  },
  {
    quote:
      "Dina brings a rare combination of dedication, professionalism, warmth, and humor, making her not only effective but also a joy to collaborate with.",
    name: "Malin Finne",
    role: "CCO & Former COO, Outfittery",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="What colleagues say" title="In their words.">
      <div className="grid gap-px bg-border md:grid-cols-3">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="flex flex-col justify-between gap-6 bg-background p-8 md:p-10"
          >
            <blockquote className="font-serif text-lg leading-snug text-foreground/90 md:text-xl">
              <span aria-hidden className="mr-1 text-muted-foreground">&ldquo;</span>
              {q.quote}
              <span aria-hidden className="ml-1 text-muted-foreground">&rdquo;</span>
            </blockquote>
            <figcaption className="flex flex-col gap-1 border-t border-border pt-4 text-sm">
              <span className="text-foreground">{q.name}</span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {q.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}