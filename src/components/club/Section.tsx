import type { ReactNode } from "react";
import { Rich } from "./Rich";

type Tone = "cream" | "rosa" | "sky" | "midsky";
const toneClass: Record<Tone, string> = {
  cream: "bg-cream",
  rosa: "bg-rosa",
  sky: "bg-sky",
  midsky: "bg-midsky",
};

export function Section({ tone = "cream", id, children, className = "", tightBottom = false }: { tone?: Tone; id?: string; children: ReactNode; className?: string; tightBottom?: boolean }) {
  return (
    <section id={id} className={`${toneClass[tone]} text-ink scroll-mt-24 ${className}`}>
      <div className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${tightBottom ? "pb-10 md:pb-14" : ""}`}>{children}</div>
    </section>
  );
}

export function SectionHead({ club-eyebrow, title, center, as = "h2" }: { club-eyebrow?: string; title: string; center?: boolean; as?: "h1" | "h2" }) {
  const H = as;
  return (
    <div className={center ? "flex flex-col items-center text-center" : ""}>
      <span className="club-rule-accent mb-5" aria-hidden />
      {club-eyebrow && <p className="club-eyebrow mb-4">{club-eyebrow}</p>}
      <H className={`text-navy ${as === "h1" ? "text-4xl sm:text-5xl md:text-6xl" : "text-3xl sm:text-4xl"}`}>
        <Rich text={title} />
      </H>
    </div>
  );
}

export function SignOff() {
  return <p className="font-hand text-4xl font-semibold text-navy">Dina</p>;
}
