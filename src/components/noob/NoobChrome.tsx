import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { noobClub } from "@/config/noobClub";
import badgeAsset from "@/assets/ai-noob-club-badge-v2.webp.asset.json";

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
      <Link to="/ai-noob-club" hash="checkliste" onClick={close} className={navLink}>{t.navChecklist}</Link>
      <Link to="/ai-noob-club" hash="community" onClick={close} className={navLink}>{t.navCommunity}</Link>
      <Link to="/ai-noob-club" hash="treffen" onClick={close} className={navLink}>{t.navLive}</Link>
      <Link to="/ai-noob-club" hash="shop" onClick={close} className={navLink}>{t.heroShopCta}</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-noob-rosa bg-noob-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 pt-2 pb-4 md:px-8">
        <div className="flex min-w-0 flex-col items-start">
          <Link to="/ai-noob-club" hash="top" className="block max-w-full shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <img src={badgeAsset.url} alt={t.brand} className="noob-badge block h-16 w-16 md:h-20 md:w-20" width={768} height={768} />
          </Link>
          <Link to="/" className="-my-3 py-3 text-[11px] text-foreground underline-offset-2 hover:underline">{t.badge}</Link>
        </div>
        <nav className="hidden items-center gap-2 lg:flex" aria-label={t.brand}>
          {langButton}
          {textLinks}
          <Link to="/ai-noob-club" hash="checkliste" className={btnPrimary}>{t.navChecklistCta}</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
        {langButton}
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
      </div>
      {menuOpen && (
        <nav id="noob-menu" className="border-t border-noob-rosa bg-noob-cream px-4 pb-5 pt-3 lg:hidden" aria-label={t.brand}>
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
  const fl = "inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md";
  return (
    <footer className="bg-noob-rosa">
      <div aria-hidden className="noob-stripes" />
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm md:px-10">
        <p>{t.footer}</p>
        <nav aria-label={lang === "de" ? "Rechtliches" : "Legal"} className="flex flex-wrap gap-x-5">
          <Link to="/impressum" className={fl}>Impressum</Link>
          <Link to="/datenschutz" className={fl}>Datenschutz</Link>
          {noobClub.showWiderruf && <Link to="/ai-noob-club/widerruf" className={fl}>{lang === "de" ? "Widerruf" : "Cancellation"}</Link>}
          <Link to="/ai-noob-club" hash="treffen" className={fl}>{t.navLive}</Link>
          {noobClub.links.meetup && (
            <a href={noobClub.links.meetup} target="_blank" rel="noopener noreferrer" className={fl}>Meetup</a>
          )}
          <Link to="/" className={fl}>{lang === "de" ? "Zur HUMINT Startseite" : "HUMINT homepage"}</Link>
          {noobClub.links.instagram && <a href={noobClub.links.instagram} target="_blank" rel="noreferrer" className={fl}>Instagram</a>}
        </nav>
      </div>
    </footer>
  );
}
