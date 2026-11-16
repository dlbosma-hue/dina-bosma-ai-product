import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { courseContent } from "@/lib/course-content";
import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { NoobHeader, NoobFooter } from "@/components/noob/NoobChrome";
import { CourseWaitlist } from "@/components/noob/CourseWaitlist";
import dinaPortraitAsset from "@/assets/dina-portrait-circle.webp.asset.json";

export const Route = createFileRoute("/ai-noob-club_/content-assistentin")({
  component: CoursePage,
  head: () => noobHead(noobMeta.course),
});

const wrap = "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16";
const section = "border-b border-navy";

function CoursePage() {
  useNoobMeta(noobMeta.course);
  const { lang } = useLanguage();
  const c = courseContent[lang];
  const t = noobContent[lang];
  const toWaitlist = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("warteliste")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <main className="noob-theme min-h-screen bg-cream">
      <NoobHeader />
      <section className={`${section} bg-rose`}>
        <div className={wrap}>
          <span className="retro-tape bg-cream">{c.label}</span>
          <h1 className="mt-6 text-5xl md:text-7xl">{c.title}</h1>
          <p className="mt-5 text-lg md:text-xl">{c.subline}</p>
          <a href="#warteliste" onClick={(e) => { e.preventDefault(); toWaitlist(); }} className="retro-button mt-7">{c.cta}</a>
        </div>
      </section>

      <section className={`${section} bg-cream`}>
        <div className={wrap}>
          <div className="space-y-4 text-lg">{c.idea.map((p) => <p key={p}>{p}</p>)}</div>
          <p className="mt-7 border-l border-navy pl-4 font-headline text-3xl leading-[1.05] md:text-4xl">{c.highlight}</p>
        </div>
      </section>

      <section className={`${section} bg-sky`}>
        <div className={wrap}>
          <h2 className="text-4xl md:text-5xl">{c.buildTitle}</h2>
          <ol className="mt-8 space-y-4">
            {c.buildItems.map((item, i) => (
              <li key={item.title} className="retro-card flex gap-4 bg-cream p-5">
                <span aria-hidden className="flex h-11 w-11 shrink-0 items-center justify-center border border-navy bg-grapefruit font-headline text-2xl leading-none text-navy">{i + 1}</span>
                <p className="text-base"><strong className="font-semibold">{item.title}</strong> {item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-lg">{c.buildNote}</p>
          <p className="mt-2 text-base">{c.buildSmall}</p>
        </div>
      </section>

      <section className={`${section} bg-cream`}>
        <div className={wrap}>
          <div className="grid gap-5 md:grid-cols-2">
            {[[c.forWhoTitle, c.forWho], [c.effortTitle, c.effort]].map(([title, body]) => (
              <div key={title} className="retro-card bg-rose p-6 md:p-8"><h2 className="text-3xl">{title}</h2><p className="mt-3 text-base">{body}</p></div>
            ))}
          </div>
          <div className="retro-card mt-5 bg-cream p-6 md:p-8"><h2 className="text-3xl">{c.noPromiseTitle}</h2><p className="mt-3 text-base">{c.noPromise}</p></div>
        </div>
      </section>

      <section className={`${section} bg-rose`}>
        <div className={wrap}>
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
            <div className="retro-card mx-auto w-full max-w-[13rem] bg-cream p-3"><img src={dinaPortraitAsset.url} alt={t.meetYourHostAlt} width={1882} height={1882} loading="lazy" className="w-full rounded-full border border-navy" /></div>
            <div><span aria-hidden className="block h-1 w-10 bg-grapefruit" /><h2 className="mt-4 text-4xl md:text-5xl">{c.whyTitle}</h2><p className="mt-4 text-lg">{c.why}</p></div>
          </div>
        </div>
      </section>

      <section className={`${section} bg-cream`}>
        <div className={wrap}>
          <span className="retro-tape">{c.label}</span>
          <h2 className="mt-6 text-4xl md:text-5xl">{c.waitlistTitle}</h2>
          <CourseWaitlist />
          <Link to="/ai-noob-club" className="mt-10 inline-flex min-h-11 items-center font-semibold text-link underline">← {c.back}</Link>
        </div>
      </section>
      <NoobFooter />
    </main>
  );
}
