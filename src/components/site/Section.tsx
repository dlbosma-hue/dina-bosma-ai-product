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
      <div className="humint-section-inner">
      {title && (
        <div className="mb-5 md:mb-6">
          {title && (
            <h2 className="font-serif text-[38px] leading-[1.02] md:text-[62px]">{title}</h2>
          )}
        </div>
      )}
      {children}
      </div>
    </section>
  );
}
