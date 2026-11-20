import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { ClubLettering } from "@/components/club/ClubLettering";
import { Button } from "@/components/ui/button";

export function ClubCallout() {
  const { t } = useLanguage();
  return (
    <section id="club-callout" className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <div className="rounded-[24px] border-2 border-link !bg-club-callout-pink !p-7 shadow-none md:!p-12">
        <Link to="/ai-noob-club" aria-label="AI Noob Club" className="mb-6 block w-fit max-w-full text-2xl no-underline md:text-4xl">
          <ClubLettering />
        </Link>
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
