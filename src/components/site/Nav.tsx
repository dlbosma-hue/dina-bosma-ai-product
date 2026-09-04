import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function Nav() {
  const { t, lang, setLang } = useLanguage();
  const links = t.nav.links;

  const externalLinks: { href: string; label: string }[] = t.nav.gumroad
    ? [t.nav.gumroad]
    : [];

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
    <header className="sticky top-[var(--banner-height,0px)] z-40 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5 md:px-10">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-serif text-xl tracking-tight">HUMINT</span>
          <span className="text-[11px] font-light text-muted-foreground tracking-wide">
            {t.nav.tagline}
          </span>
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-5 text-sm text-muted-foreground md:flex lg:gap-7">
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
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            aria-label={t.langAria}
            className="rounded-none border border-border px-2.5 py-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            {t.langLabel}
          </button>
          <a
            href="#contact"
            className="hidden rounded-none border border-foreground px-4 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background md:inline-block"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
