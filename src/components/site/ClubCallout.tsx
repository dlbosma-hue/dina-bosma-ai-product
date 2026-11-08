import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import logoDeAsset from "@/assets/ai-noob-club-logo-de-v8.png.asset.json";
import logoEnAsset from "@/assets/ai-noob-club-logo-en-v8.png.asset.json";
import { Button } from "@/components/ui/button";

export function ClubCallout() {
  const { lang, t } = useLanguage();
  return (
    <section id="club-callout" className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <div className="rounded-[24px] border-2 border-link !bg-rose !p-7 shadow-none md:!p-12">
        <img
          src={lang === "en" ? logoEnAsset.url : logoDeAsset.url}
          alt={lang === "en" ? "AI Noob Club: You're the boss. AI is new to the team." : "AI Noob Club: Du bist die Chefin. KI ist neu im Team."}
          loading="lazy"
          className="mb-6 block h-auto w-full max-w-xs md:max-w-sm"
          width={1920}
          height={640}
        />
        <h2 className="max-w-3xl !font-serif text-[32px] leading-[1.06] !text-navy md:text-[52px]">
          {t.clubCallout.headline}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-navy md:text-lg">
          {t.clubCallout.text}
        </p>
        <Button asChild variant="outline" className="group mt-7 h-auto min-h-11 rounded-full border-2 border-link bg-cream px-6 py-3 text-base font-semibold text-navy whitespace-normal focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <Link to="/ai-noob-club">
            <span>{t.clubCallout.link}</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-1 group-active:translate-x-1"
            >
              &#8594;
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
