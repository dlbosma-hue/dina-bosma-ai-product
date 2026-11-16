import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { links } from "@/config/links";
import { useLang } from "@/club-i18n/lang";
import { Ext } from "./Ext";
import { Wordmark } from "./Wordmark";

type Item = { label: string; href?: string; to?: "/ai-noob-club/content-assistentin" | "/ai-noob-club/kontakt" | "/ai-noob-club/gratis"; hash?: string };

function ItemLink({ item, onClick, className }: { item: Item; onClick?: () => void; className: string }) {
  if (item.to)
    return (
      <Link to={item.to} {...(item.hash ? { hash: item.hash } : {})} onClick={onClick} className={className}>
        {item.label}
      </Link>
    );
  return (
    <Ext href={item.href} onClick={onClick} className={className}>
      {item.label}
    </Ext>
  );
}

function Dropdown({ label, items }: { label: string; items: Item[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <Button variant="ghost"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 rounded-full px-3 py-2 text-[0.95rem] font-medium text-navy transition-colors duration-[120ms] hover:text-terra"
      >
        {label}
        <ChevronDown className="h-4 w-4 text-navy" strokeWidth={2} aria-hidden />
      </Button>
      {open && (
        <div className="club-overlay-in absolute left-0 top-full z-50 pt-2">
          <ul className="min-w-60 rounded-[24px] border-2 border-rosa bg-cream p-2">
            {items.map((it) => (
              <li key={it.label}>
                <ItemLink
                  item={it}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-[0.95rem] text-navy transition-colors duration-[120ms] hover:bg-rosa"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function LangToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.langLabel} className="flex items-center text-sm font-semibold text-navy">
      {(["de", "en"] as const).map((l, i) => (
        <span key={l} className="flex items-center">
          {i === 1 && <span className="px-1 text-navy" aria-hidden>|</span>}
          <Button variant="ghost"
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`rounded px-1.5 py-1 uppercase transition-colors duration-[120ms] ${lang === l ? "text-terra underline underline-offset-4" : "text-navy hover:text-terra"}`}
          >
            {l}
          </Button>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLang();
  const [mobile, setMobile] = useState(false);
  const groups: { label: string; items: Item[] }[] = [
    {
      label: t.nav.free,
      items: [
        { label: t.nav.startCheck, href: links.calendlyStartCheck },
        { label: t.nav.starterpaket, to: "/ai-noob-club/gratis", hash: "starterpaket" },
        { label: t.nav.editGuide, to: "/ai-noob-club/gratis", hash: "edit-guide" },
      ],
    },
    {
      label: t.nav.products,
      items: [
        { label: t.nav.promptPack, href: links.etsy },
        { label: t.nav.contentAssistentin, to: "/ai-noob-club/content-assistentin" },
      ],
    },
    {
      label: t.nav.work,
      items: [
        { label: t.nav.meetup, href: links.meetup },
        { label: t.nav.workshop, to: "/ai-noob-club/kontakt" },
      ],
    },
  ];
  const plain = "rounded-full px-3 py-2 text-[0.95rem] font-medium text-navy transition-colors duration-[120ms] hover:text-terra";
  const close = () => setMobile(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rosa bg-cream">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded-full focus:bg-terra focus:px-4 focus:py-2 focus:text-navy">
        {t.skip}
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Wordmark />
        <nav className="hidden items-center xl:flex" aria-label="Hauptnavigation">
          <Link to="/ai-noob-club" hash="dina" className={plain}>
            {t.nav.about}
          </Link>
          {groups.map((g) => (
            <Dropdown key={g.label} label={g.label} items={g.items} />
          ))}
          <Link to="/ai-noob-club/community" className={plain}>
            {t.nav.community}
          </Link>
          <Link to="/ai-noob-club/kontakt" className={plain}>
            {t.nav.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <Link to="/ai-noob-club/community" className="club-btn-primary hidden min-h-11 px-5 text-sm sm:inline-flex">
            {t.nav.cta}
          </Link>
          <Button variant="ghost"
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy text-navy xl:hidden"
            aria-label={mobile ? t.nav.close : t.nav.menu}
            aria-expanded={mobile}
            onClick={() => setMobile((m) => !m)}
          >
            {mobile ? <X className="h-5 w-5 text-navy" aria-hidden /> : <Menu className="h-5 w-5 text-navy" aria-hidden />}
          </Button>
        </div>
      </div>
      {mobile && (
        <div className="club-overlay-in max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-rosa bg-cream xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6 sm:px-8" aria-label="Mobile Navigation">
            <Link to="/ai-noob-club" hash="dina" onClick={close} className="py-2 font-display text-xl text-navy">
              {t.nav.about}
            </Link>
            {groups.map((g) => (
              <div key={g.label} className="py-2">
                <p className="club-eyebrow mb-2">{g.label}</p>
                <ul className="flex flex-col gap-1 border-l-2 border-rosa pl-4">
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <ItemLink item={it} onClick={close} className="block py-1.5 text-navy hover:text-terra" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link to="/ai-noob-club/community" onClick={close} className="py-2 font-display text-xl text-navy">
              {t.nav.community}
            </Link>
            <Link to="/ai-noob-club/kontakt" onClick={close} className="py-2 font-display text-xl text-navy">
              {t.nav.contact}
            </Link>
            <Link to="/ai-noob-club/community" onClick={close} className="club-btn-primary mt-4">
              {t.nav.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
