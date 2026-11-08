import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const roseSections = new Set(["who", "testimonials", "work", "credentials"]);

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  const background = id && roseSections.has(id) ? "bg-rose" : "bg-cream";
  return (
    <section id={id} className={`scroll-mt-28 border-b-2 border-navy ${background} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        {(eyebrow || title) && (
          <div className="mb-8 md:mb-10">
            {eyebrow && <span className="retro-tape">{eyebrow}</span>}
            {title && <h2 className="mt-6 text-4xl md:text-6xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
