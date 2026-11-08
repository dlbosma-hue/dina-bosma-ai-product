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
          <article key={card.id} className="retro-card flex flex-col bg-rose p-6 md:p-8">
            <span className="retro-pill">{card.tag}</span>
            <h3 className="mt-4 text-3xl">{card.title}</h3>
            <p className="mt-3 text-base">{card.body}</p>
            <ul className="mt-5 space-y-2">
              {card.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-base">
                  <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 bg-grapefruit" /><span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex-1" />
            <button type="button" onClick={() => chooseCourseRound(card.id)} className="retro-button mt-6 w-fit whitespace-normal">
              {card.button}
            </button>
            {"note" in card && <p className="mt-3 text-base">{card.note}</p>}
          </article>
        ))}
      </div>
      <div id="warteliste" className="retro-card mt-6 scroll-mt-44 bg-sky p-6 md:scroll-mt-48 md:p-8">
        <WaitlistForm t={t} source="community" runde={courseRound} onRundeChange={setCourseRound} showRounds submitLabel={courseRound === "beta" ? community.cards[0].button : community.cards[1].button} note="" />
      </div>
    </>
  );
}
