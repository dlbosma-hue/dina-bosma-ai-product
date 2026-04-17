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
      className={`mx-auto max-w-5xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28 ${className}`}
    >
      {(eyebrow || title) && (
        <div className="mb-12 md:mb-16">
          {eyebrow && (
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">{title}</h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
