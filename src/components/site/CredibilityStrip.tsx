const items = [
  "Worked at Outfittery",
  "Built real AI systems hands-on in 2026",
  "Experienced across product, automation, and implementation",
  "GDPR and EU AI Act aware",
];

export function CredibilityStrip() {
  return (
    <section
      aria-label="Credibility"
      className="border-y border-border bg-muted/20"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="bg-background px-6 py-6 text-sm leading-snug text-foreground/85 md:px-8"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
