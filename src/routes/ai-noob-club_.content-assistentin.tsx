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

const wrap = "mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16";
const pill = "inline-flex items-center rounded-full bg-noob-rosa px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-noob-navy";

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
    <main className="noob-theme min-h-screen bg-noob-cream">
      <NoobHeader />

      <section className="bg-noob-rosa">
        <div className={wrap}>
          <span className="inline-flex rounded-full bg-noob-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-noob-navy">{c.label}</span>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">{c.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed md:text-xl">{c.subline}</p>
          <a href="#warteliste" onClick={(e) => { e.preventDefault(); toWaitlist(); }} className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            {c.cta}
          </a>
        </div>
      </section>

      <section className="bg-noob-cream">
        <div className={wrap}>
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
            {c.idea.map((p) => <p key={p}>{p}</p>)}
          </div>
          <p className="mt-6 max-w-3xl border-l-4 border-noob-terracotta pl-4 font-serif text-2xl leading-snug md:text-3xl">{c.highlight}</p>
        </div>
      </section>

      <section className="bg-noob-sky">
        <div className={wrap}>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{c.buildTitle}</h2>
          <ol className="mt-8 space-y-4">
            {c.buildItems.map((item, i) => (
              <li key={item.title} className="flex gap-4 rounded-2xl bg-noob-cream p-5">
                <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-xl text-primary-foreground">{i + 1}</span>
                <p className="text-base leading-relaxed"><strong className="font-semibold">{item.title}</strong> {item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-base leading-relaxed md:text-lg">{c.buildNote}</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed">{c.buildSmall}</p>
        </div>
      </section>

      <section className="bg-noob-cream">
        <div className={wrap}>
          <div className="grid gap-5 md:grid-cols-2">
            {[[c.forWhoTitle, c.forWho], [c.effortTitle, c.effort]].map(([title, body]) => (
              <div key={title} className="rounded-3xl bg-noob-rosa p-6 md:p-8">
                <h2 className="font-serif text-3xl leading-tight">{title}</h2>
                <p className="mt-3 text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-noob-terracotta p-6 md:p-8">
            <h2 className="font-serif text-3xl leading-tight">{c.noPromiseTitle}</h2>
            <p className="mt-3 text-base leading-relaxed">{c.noPromise}</p>
          </div>
        </div>
      </section>

      <section className="bg-noob-rosa">
        <div className={wrap}>
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
            <img src={dinaPortraitAsset.url} alt={t.meetYourHostAlt} width={1882} height={1882} loading="lazy" className="mx-auto w-full max-w-[13rem] rounded-full" />
            <div>
              <span aria-hidden className="block h-[3px] w-10 bg-noob-terracotta" />
              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">{c.whyTitle}</h2>
              <p className="mt-4 text-base leading-relaxed md:text-lg">{c.why}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-noob-cream">
        <div className={wrap}>
          <span className={pill}>{c.label}</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{c.waitlistTitle}</h2>
          <CourseWaitlist />
          <Link to="/ai-noob-club" className="mt-10 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">← {c.back}</Link>
        </div>
      </section>

      <NoobFooter />
    </main>
  );
}
