import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { noobClub } from "@/config/noobClub";
import badgeAsset from "@/assets/ai-noob-club-badge.webp.asset.json";

export const btnPrimary =
  "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const navLink =
  "inline-flex min-h-11 items-center whitespace-nowrap px-2 text-sm font-medium text-foreground hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md";

export function NoobHeader() {
  const { lang, setLang } = useLanguage();
  const t = noobContent[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  const langButton = (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "de" : "en")}
      aria-label={t.langAria}
      className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-foreground/40 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {t.langLabel}
    </button>
  );
  const textLinks = (
    <>
      <Link to="/ai-noob-club" hash="starterset" onClick={close} className={navLink}>{t.navStarter}</Link>
      <Link to="/ai-noob-club" hash="checkliste" onClick={close} className={navLink}>{t.navChecklist}</Link>
      <Link to="/ai-noob-club-anmeldung" onClick={close} className={navLink}>
        {lang === "de" ? "Jetzt dabei sein" : "Sign up now"}
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-noob-rosa bg-noob-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-2 md:px-10">
        <div className="flex items-center gap-3">
          <Link to="/ai-noob-club" hash="top" className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <img src={badgeAsset.url} alt={t.brand} className="h-12 w-12" width={556} height={556} />
          </Link>
          <span className="flex flex-col leading-tight">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-foreground">{t.headerSubtitle}</span>
            <Link to="/" className="-my-3 py-3 text-[11px] text-foreground/80 underline-offset-2 hover:underline">{t.badge}</Link>
          </span>
        </div>
        <nav className="hidden items-center gap-2 lg:flex" aria-label={t.brand}>
          {langButton}
          {textLinks}
          <Link to="/ai-noob-club" hash="waitlist" className={btnPrimary}>{t.navWaitlist}</Link>
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="noob-menu"
          aria-label={menuOpen ? t.menuClose : t.menuOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/40 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <nav id="noob-menu" className="border-t border-noob-rosa bg-noob-cream px-4 pb-5 pt-3 lg:hidden" aria-label={t.brand}>
          <div className="flex flex-col gap-1">
            <div className="py-1">{langButton}</div>
            {textLinks}
            <Link to="/ai-noob-club" hash="waitlist" onClick={close} className={`${btnPrimary} mt-3 w-full`}>{t.navWaitlist}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function NoobFooter() {
  const { lang } = useLanguage();
  const t = noobContent[lang];
  const fl = "inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md";
  return (
    <footer className="noob-dark">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm md:px-10">
        <p>{t.footer}</p>
        <nav aria-label={lang === "de" ? "Rechtliches" : "Legal"} className="flex flex-wrap gap-x-5">
          <Link to="/impressum" className={fl}>Impressum</Link>
          <Link to="/datenschutz" className={fl}>Datenschutz</Link>
          {noobClub.showWiderruf && <Link to="/ai-noob-club/widerruf" className={fl}>{lang === "de" ? "Widerruf" : "Cancellation"}</Link>}
          <Link to="/" className={fl}>{lang === "de" ? "Zur HUMINT Startseite" : "HUMINT homepage"}</Link>
          {noobClub.links.instagram && <a href={noobClub.links.instagram} target="_blank" rel="noreferrer" className={fl}>Instagram</a>}
        </nav>
      </div>
    </footer>
  );
}
