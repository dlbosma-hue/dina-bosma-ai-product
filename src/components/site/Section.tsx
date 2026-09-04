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
      className={`mx-auto max-w-5xl scroll-mt-24 px-6 py-7 md:px-10 md:py-10 ${className}`}
    >
      {(eyebrow || title) && (
        <div className="mb-5 md:mb-6">
          {eyebrow && (
            <div className="mb-4 flex items-center gap-3 text-[13px] uppercase tracking-[0.28em] text-muted-foreground">
              <span aria-hidden="true" className="h-3 w-[3px] shrink-0 bg-accent" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-serif text-[38px] leading-[1.02] md:text-[62px]">{title}</h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
