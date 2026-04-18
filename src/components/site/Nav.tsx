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

  const externalLinks = [
    { href: "https://github.com/dlbosma-hue", label: "GitHub" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-serif text-xl tracking-tight">
          Dina Bosma
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
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
          className="hidden rounded-full border border-foreground px-4 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background md:inline-block"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}
