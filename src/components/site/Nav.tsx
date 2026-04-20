import { useEffect, useState } from "react";

export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#writing", label: "Writing" },
    { href: "#recommendations", label: "Recommendations" },
    { href: "#contact", label: "Contact" },
  ];

  const externalLinks = [{ href: "https://github.com/dlbosma-hue", label: "GitHub" }];

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
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5 md:px-10">
        <a href="#top" className="font-serif text-xl tracking-tight">
          Dina Bosma-Buczynska
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`transition-colors hover:text-foreground ${
                  isActive ? "text-foreground font-medium" : ""
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
        <a
          href="#contact"
          className="hidden shrink-0 rounded-full border border-foreground px-4 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background md:inline-block"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}
