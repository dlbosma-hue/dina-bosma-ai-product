import { Section } from "./Section";

const PROFILE_URL = "https://medium.com/@dinaleonidovnabosma";

const articles = [
  {
    title:
      "I built an AI agent that audits media diversity. Here's what actually went wrong.",
    url: "https://medium.com/@dinaleonidovnabosma/i-built-an-ai-agent-that-audits-media-diversity-heres-what-actually-went-wrong-4b38790a6e3f",
    eyebrow: "Essay · Medium",
  },
  {
    title:
      "I learned how to build a working AI system in 9 weeks. Here's what the tutorials never mention.",
    url: "https://medium.com/@dinaleonidovnabosma/i-learned-how-to-build-a-working-ai-system-in-9-weeks-here-is-what-the-tutorials-never-mention-7cb59c81b100",
    eyebrow: "Essay · Medium",
  },
];

export function Writing() {
  return (
    <Section id="writing" eyebrow="Writing" title="Thinking out loud.">
      <div className="grid gap-px bg-border md:grid-cols-2">
        {articles.map((a) => (
          <a
            key={a.url}
            href={a.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-8 bg-background p-8 transition-colors hover:bg-muted/40 md:p-10"
          >
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {a.eyebrow}
              </div>
              <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                {a.title}
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 text-sm text-foreground underline-offset-4 group-hover:underline">
              Read on Medium <span aria-hidden>↗</span>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-10">
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground"
        >
          More on Medium <span aria-hidden>→</span>
        </a>
      </div>
    </Section>
  );
}
