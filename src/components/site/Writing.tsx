import { Section } from "./Section";

const FEATURED_URL =
  "https://medium.com/@dinaleonidovnabosma/i-built-an-ai-agent-that-audits-media-diversity-heres-what-actually-went-wrong-4b38790a6e3f";
const PROFILE_URL = "https://medium.com/@dinaleonidovnabosma";

export function Writing() {
  return (
    <Section id="writing" eyebrow="Writing" title="Thinking out loud.">
      <a
        href={FEATURED_URL}
        target="_blank"
        rel="noreferrer"
        className="group block rounded-lg border border-border bg-background p-8 transition-colors hover:border-foreground/30 md:p-12"
      >
        <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Featured · Medium
        </div>
        <h3 className="font-serif text-3xl leading-tight md:text-4xl">
          I built an AI agent that audits media diversity. Here&apos;s what actually went
          wrong.
        </h3>
        <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-foreground underline-offset-4 group-hover:underline">
          Read on Medium <span aria-hidden>↗</span>
        </div>
      </a>
      <div className="mt-8">
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
