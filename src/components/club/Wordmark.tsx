import { Link } from "@tanstack/react-router";
import { photos } from "@/config/photos";
import { useLang } from "@/club-i18n/lang";
import { ClubLettering } from "./ClubLettering";

export function Wordmark() {
  const { t } = useLang();
  return (
    <Link to="/ai-noob-club" className="flex shrink-0 items-center gap-3" aria-label={`AI Noob Club, ${t.nav.home}`}>
      {photos.badgeLogo && <img src={photos.badgeLogo} alt="" className="h-10 w-10 rounded-full" />}
      <ClubLettering className="text-xl leading-none sm:text-2xl" />
      <span className="hidden text-xs font-medium leading-tight text-ink lg:inline-block lg:max-w-[9rem]">
        {t.brandLabel}
      </span>
    </Link>
  );
}
