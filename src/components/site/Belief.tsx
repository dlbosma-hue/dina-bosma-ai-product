import { Section } from "./Section";

export function Belief() {
  return (
    <Section id="belief" eyebrow="What I believe">
      <div className="flex flex-col items-center py-6 md:py-10">
        <div className="h-px w-12 bg-foreground/30" />
        <blockquote className="mt-6 md:mt-8 text-center font-serif tracking-tight text-foreground">
          <p className="text-4xl leading-[1.05] md:text-6xl">
            AI should make your people
            <span className="mt-2 block">
              <span className="relative inline-block">
                faster,
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-[#FFD54F]"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8.5C40 3.5 120 1.5 198 10.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
            <span className="mt-4 block">
              not{" "}
              <span className="relative inline-block px-1">
                fewer.
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-2 -right-2 top-1/2 h-4 -translate-y-1/2 text-[#F06292]"
                  viewBox="0 0 160 16"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 13.5C30 9.5 90 2.5 158 5.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 8.5C45 6.5 110 4.5 155 10.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </span>
          </p>
        </blockquote>
        <div className="mt-6 md:mt-8 h-px w-12 bg-foreground/30" />
        <div className="mt-4 h-1 w-1 rounded-full bg-foreground/20" />
      </div>
      <p className="mx-auto mt-6 md:mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
        I build AI systems that reduce the repetitive, low-value work that
        slows teams down, so people can focus on judgment, relationships, and
        the work that moves the business. Not automation for its own
        sake. Systems that make your team more capable than they were before.
      </p>
    </Section>
  );
}