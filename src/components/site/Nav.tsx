import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export function Nav() {
  const { t, lang, setLang } = useLanguage();
  const links = t.nav.links;
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
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-navy bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 md:gap-5 md:px-8">
        <Link to="/" className="flex min-w-0 flex-col items-start leading-tight" aria-label="HUMINT">
          <span className="retro-chip retro-chip-accent px-3 pb-1 pt-0.5 text-xl md:px-4 md:pb-1.5 md:text-2xl">HUMINT</span>
          <span className="mt-2 hidden text-xs text-navy md:block">{t.nav.tagline}</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-5 text-sm text-navy lg:flex" aria-label="HUMINT">
          {links.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <Link
                key={l.href}
                to="/"
                hash={l.href.slice(1)}
                hashScrollIntoView
                className={`inline-flex min-h-11 items-center text-center leading-snug underline-offset-4 hover:underline ${isActive ? "font-semibold underline" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
          {lang === "de" && (
            <Link to="/ki-workflow-check" className="inline-flex min-h-11 items-center text-center leading-snug underline-offset-4 hover:underline">
              {t.nav.kiCheck}
            </Link>
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href="https://calendly.com/dlbosma/30min" target="_blank" rel="noreferrer" className="retro-button hidden xl:inline-flex">
            {t.nav.cta}
          </a>
          <Link to="/ai-noob-club" className="retro-button retro-button-secondary px-3 text-xs sm:text-sm">
            {t.nav.noobClub}
          </Link>
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            aria-label={t.langAria}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border-2 border-navy bg-cream px-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy transition-colors duration-200 hover:bg-rose"
          >
            {t.langLabel}
          </button>
        </div>
      </div>
    </header>
  );
}
