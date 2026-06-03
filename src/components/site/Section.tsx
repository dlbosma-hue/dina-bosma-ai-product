import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-5xl scroll-mt-24 px-6 py-12 md:px-10 md:py-16 ${className}`}
    >
      {(eyebrow || title) && (
        <div className="mb-12 md:mb-16">
          {eyebrow && (
            <div className="mb-8 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-accent">
              <span aria-hidden className="h-px w-10 bg-accent/70" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-serif text-4xl font-light leading-[1] tracking-[-0.02em] md:text-6xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
