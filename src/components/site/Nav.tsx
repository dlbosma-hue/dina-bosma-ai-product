import { useEffect, useState } from "react";

export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  const externalLinks: { href: string; label: string }[] = [];

  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 pt-6 pb-3 md:px-10 md:pt-8">
        <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Vol. I · Berlin
          </div>
          <a
            href="#contact"
            className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground md:inline"
          >
            Let&rsquo;s talk →
          </a>
        </div>
        <a href="#top" className="block py-3 text-center">
          <span className="font-serif text-5xl leading-none tracking-tight md:text-7xl">
            HUMINT
          </span>
          <span className="mt-2 block text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            Human intelligence · AI powered
          </span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-border pt-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:gap-x-10">
          {links.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : ""
                }`}
              >
                {l.label}
              </a>
            );
          })}
          {externalLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {l.label} ↗
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
