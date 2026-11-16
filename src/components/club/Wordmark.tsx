import { Link } from "@tanstack/react-router";
import { photos } from "@/config/photos";
import { useLang } from "@/club-i18n/lang";

export function Wordmark() {
  const { t } = useLang();
  return (
    <Link to="/ai-noob-club" className="flex items-center gap-3" aria-label={`AI Noob Club, ${t.nav.home}`}>
      {photos.badgeLogo && <img src={photos.badgeLogo} alt="" className="h-10 w-10 rounded-full" />}
      <span className="font-display text-xl leading-none text-navy sm:text-2xl">
        AI <em className="club-kw">Noob</em> Club
      </span>
      <span className="hidden text-xs font-medium leading-tight text-ink lg:inline-block lg:max-w-[9rem]">
        {t.brandLabel}
      </span>
    </Link>
  );
}
