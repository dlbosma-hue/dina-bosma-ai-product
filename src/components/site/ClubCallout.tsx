import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import badgeAsset from "@/assets/ai-noob-club-badge-v2.webp.asset.json";

export function ClubCallout() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <div className="rounded-[24px] border border-noob-callout-border bg-noob-callout p-7 md:p-12">
        <img
          src={badgeAsset.url}
          alt=""
          aria-hidden="true"
          className="noob-badge mb-5 block h-16 w-16 md:h-20 md:w-20"
          width={768}
          height={768}
        />
        <h2 className="max-w-3xl font-serif text-[32px] leading-[1.06] text-foreground md:text-[52px]">
          {t.clubCallout.headline}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground md:text-lg">
          {t.clubCallout.text}
        </p>
        <Link
          to="/ai-noob-club"
          className="group mt-7 inline-flex items-center gap-2 text-base font-semibold text-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {t.clubCallout.link}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-1 group-active:translate-x-1"
          >
            &#8594;
          </span>
        </Link>
      </div>
    </section>
  );
}
