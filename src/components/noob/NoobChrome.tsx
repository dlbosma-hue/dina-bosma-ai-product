import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { noobClub } from "@/config/noobClub";
import headerLogoAsset from "@/assets/ai-noob-club-header-logo.png.asset.json";

export const btnPrimary = "retro-button";
const navLink = "inline-flex min-h-11 items-center px-1 text-sm font-semibold text-navy underline-offset-4 hover:underline";

export function NoobHeader() {
  const { lang, setLang } = useLanguage();
  const t = noobContent[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  const langButton = (
    <button type="button" onClick={() => setLang(lang === "en" ? "de" : "en")} aria-label={t.langAria} className="inline-flex h-11 min-w-11 items-center justify-center border-2 border-navy bg-cream px-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy transition-colors duration-200 hover:bg-rose">
      {t.langLabel}
    </button>
  );
  const igLink = noobClub.links.instagram ? (
    <a href={noobClub.links.instagram} target="_blank" rel="noopener noreferrer" aria-label={t.igAria} className="inline-flex h-11 w-11 items-center justify-center border-2 border-navy bg-cream text-navy transition-colors duration-200 hover:bg-rose">
      <Instagram aria-hidden className="h-5 w-5" />
    </a>
  ) : null;
  const textLinks = (
    <>
      <Link to="/ai-noob-club" hash="ki-start-check" onClick={close} className={navLink}>{t.navStartCheck}</Link>
      <Link to="/ai-noob-club" hash="checkliste" onClick={close} className={navLink}>{t.navChecklist}</Link>
      <Link to="/ai-noob-club/content-assistentin" onClick={close} className={`${navLink} whitespace-normal lg:max-w-40`}>{t.navCommunity}</Link>
      <Link to="/ai-noob-club" hash="treffen" onClick={close} className={navLink}>{t.navLive}</Link>
      <Link to="/ai-noob-club" hash="shop" onClick={close} className={navLink}>{t.heroShopCta}</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b-2 border-navy bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 md:px-8">
        <div className="flex min-w-0 flex-col items-start">
          <Link to="/ai-noob-club" hash="top" className="block max-w-full shrink-0">
            <img src={headerLogoAsset.url} alt={t.brand} className="block h-14 w-14 md:h-20 md:w-20" width={1254} height={1254} />
          </Link>
          <Link to="/" className="text-xs text-link underline-offset-2 hover:underline">{t.badge}</Link>
        </div>
        <nav className="hidden items-center gap-2 lg:flex" aria-label={t.brand}>
          {langButton}{igLink}{textLinks}
          <Link to="/ai-noob-club" hash="checkliste" className={btnPrimary}>{t.navChecklistCta}</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          {langButton}{igLink}
          <button type="button" onClick={() => setMenuOpen((o) => !o)} aria-expanded={menuOpen} aria-controls="noob-menu" aria-label={menuOpen ? t.menuClose : t.menuOpen} className="inline-flex h-11 w-11 items-center justify-center border-2 border-navy bg-cream text-navy transition-colors duration-200 hover:bg-rose">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="noob-menu" className="border-t-2 border-navy bg-rose px-4 pb-5 pt-3 lg:hidden" aria-label={t.brand}>
          <div className="flex flex-col gap-1">
            {textLinks}
            <Link to="/ai-noob-club" hash="checkliste" onClick={close} className={`${btnPrimary} mt-3 w-full`}>{t.navChecklistCta}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function NoobFooter() {
  const { lang } = useLanguage();
  const t = noobContent[lang];
  const fl = "inline-flex min-h-11 items-center text-link underline-offset-4 hover:underline";
  return (
    <footer className="border-t-2 border-navy bg-rose">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-navy md:px-8">
        <p>{t.footer}</p>
        <nav aria-label={lang === "de" ? "Rechtliches" : "Legal"} className="flex flex-wrap gap-x-5">
          <Link to="/impressum" className={fl}>Impressum</Link>
          <Link to="/datenschutz" className={fl}>Datenschutz</Link>
          {noobClub.showWiderruf && <Link to="/ai-noob-club/widerruf" className={fl}>{lang === "de" ? "Widerruf" : "Cancellation"}</Link>}
          <Link to="/ai-noob-club" hash="treffen" className={fl}>{t.navLive}</Link>
          {noobClub.links.meetup && <a href={noobClub.links.meetup} target="_blank" rel="noopener noreferrer" className={fl}>Meetup</a>}
          <Link to="/" className={fl}>{lang === "de" ? "Zur HUMINT Startseite" : "HUMINT homepage"}</Link>
          {noobClub.links.instagram && <a href={noobClub.links.instagram} target="_blank" rel="noreferrer" className={fl}>Instagram</a>}
        </nav>
      </div>
    </footer>
  );
}
