import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import badgeAsset from "@/assets/ai-noob-club-badge-v2.webp.asset.json";

export function ClubCallout() {
  const { t } = useLanguage();
  return (
    <section className="border-b-2 border-navy bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="retro-card bg-rose p-6 md:p-10">
          <img src={badgeAsset.url} alt="AI Noob Club" className="noob-badge mb-6 block h-20 w-20" width={768} height={768} />
          <h2 className="max-w-4xl text-4xl md:text-6xl">{t.clubCallout.headline}</h2>
          <p className="mt-5 text-lg text-navy">{t.clubCallout.text}</p>
          <Link to="/ai-noob-club" className="retro-button mt-7">
            {t.clubCallout.link}<span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
