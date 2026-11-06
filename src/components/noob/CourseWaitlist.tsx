import { useState } from "react";
import { WaitlistForm } from "@/components/noob/WaitlistForm";
import { communityContent } from "@/lib/community-content";
import { noobContent } from "@/lib/ainoob-content";
import type { CourseRunde } from "@/lib/club-signup";
import { useLanguage } from "@/lib/i18n";

/** Two-round course waitlist (cards + shared form). Used on the Club page and the course page. */
export function CourseWaitlist() {
  const { lang } = useLanguage();
  const t = noobContent[lang];
  const community = communityContent[lang];
  const [courseRound, setCourseRound] = useState<CourseRunde>("beta");
  const chooseCourseRound = (round: CourseRunde) => {
    setCourseRound(round);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("warteliste")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {community.cards.map((card) => (
          <article key={card.id} className="flex flex-col rounded-3xl bg-noob-rosa p-6 md:p-8">
            <span className="inline-flex w-fit rounded-full bg-noob-cream px-3 py-1 text-xs font-semibold text-noob-navy">{card.tag}</span>
            <h3 className="mt-4 font-serif text-3xl leading-snug">{card.title}</h3>
            <p className="mt-3 text-base leading-relaxed">{card.body}</p>
            <ul className="mt-5 space-y-2">
              {card.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-noob-terracotta" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex-1" />
            <button
              type="button"
              onClick={() => chooseCourseRound(card.id)}
              className="mt-6 inline-flex min-h-12 w-fit max-w-full items-center justify-center whitespace-normal rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {card.button}
            </button>
            {"note" in card && <p className="mt-3 text-sm leading-relaxed">{card.note}</p>}
          </article>
        ))}
      </div>

      <div id="warteliste" className="mt-6 scroll-mt-44 rounded-3xl bg-noob-rosa p-6 md:scroll-mt-48 md:p-8">
        <WaitlistForm
          t={t}
          source="community"
          runde={courseRound}
          onRundeChange={setCourseRound}
          showRounds
          submitLabel={courseRound === "beta" ? community.cards[0].button : community.cards[1].button}
          note=""
        />
      </div>
    </>
  );
}
