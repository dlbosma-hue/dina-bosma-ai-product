import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { noobClub } from "@/config/noobClub";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { startersetContent } from "@/lib/starterset-content";
import { NoobHeader, NoobFooter, btnPrimary } from "@/components/noob/NoobChrome";
import { WaitlistForm } from "@/components/noob/WaitlistForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import dinaPortraitAsset from "@/assets/dina-portrait-circle.webp.asset.json";

export const Route = createFileRoute("/ai-noob-club_/starter-set")({
  component: StarterSetPage,
  head: () => noobHead(noobMeta.starterSet),
});

const h2 = "font-serif text-3xl leading-tight md:text-4xl";
const section = "mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16";

function StarterSetPage() {
  useNoobMeta(noobMeta.starterSet);
  const { lang } = useLanguage();
  const t = noobContent[lang];
  const s = startersetContent[lang];
  const cfg = noobClub.starterSet;
  const tool = cfg.tool || s.toolPending;
  const toolCost = cfg.toolCostNote || s.toolCostPending;
  const available = cfg.status === "available";

  const buyButtons = (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      {cfg.buyUrlGumroad && (
        <a href={cfg.buyUrlGumroad} target="_blank" rel="noreferrer" className={btnPrimary}>{s.buy}</a>
      )}
      {cfg.buyUrlEtsy && (
        <a href={cfg.buyUrlEtsy} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold text-foreground underline underline-offset-4">
          {s.etsy}
        </a>
      )}
    </div>
  );

  const privacyLink = (
    <Link to="/datenschutz" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
      {s.privacyLink}
    </Link>
  );

  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />

      {/* 1 Hero */}
      <section className="bg-noob-cream">
        <div className={section}>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">{s.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground">{s.subline}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {[s.infoDownload, s.infoOnce, cfg.priceEur ? `${cfg.priceEur} €` : s.pricePending].map((i) => (
              <li key={i} className="rounded-full bg-noob-rosa px-4 py-1.5 text-sm font-semibold text-noob-navy">{i}</li>
            ))}
          </ul>
          {available ? buyButtons : (
            <a href="#signup" className={`${btnPrimary} mt-8`}>{s.signupTitle}</a>
          )}
        </div>
      </section>

      {/* 2 Für wen */}
      <section className="bg-noob-rosa">
        <div className={section}>
          <h2 className={h2}>{t.forTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {t.forCards.map((c) => (
              <article key={c} className="rounded-3xl bg-noob-cream p-6 shadow-sm">
                <p className="text-base leading-relaxed text-foreground">{c}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-noob-cream/70 p-6">
            <h3 className="font-serif text-2xl leading-snug">{t.notForTitle}</h3>
            <ul className="mt-3 space-y-2">
              {t.notForItems.map((i) => <li key={i} className="text-base text-foreground">{i}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* 3 Drin */}
      <section className="bg-noob-cream">
        <div className={section}>
          <h2 className={h2}>{s.includedTitle}</h2>
          <ul className="mt-6 space-y-3">
            {[...s.included(tool), ...(cfg.includesRecording ? [s.recording] : [])].map((i) => (
              <li key={i} className="flex gap-3 text-base leading-relaxed">
                <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-noob-terracotta" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 So funktioniert es */}
      <section className="bg-noob-cream">
        <div className={section}>
          <h2 className={h2}>{s.howTitle}</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {s.steps.map((step, i) => (
              <li key={step} className="rounded-3xl border border-foreground/10 bg-noob-paper p-6">
                <span aria-hidden className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-noob-terracotta font-serif text-3xl leading-none text-noob-navy">{i + 1}</span>
                <p className="mt-3 text-base leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 Das brauchst du */}
      <section className="bg-noob-cream">
        <div className={section}>
          <h2 className={h2}>{s.needTitle}</h2>
          <ul className="mt-6 space-y-3">
            {s.need(tool).map((i) => (
              <li key={i} className="flex gap-3 text-base">
                <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-noob-terracotta" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl border-l-4 border-noob-terracotta bg-noob-rosa px-5 py-4 text-base">{toolCost}</p>
        </div>
      </section>

      {/* 6 Ehrlich gesagt */}
      <section className="bg-noob-cream">
        <div className="mx-auto max-w-5xl px-6 pb-12 md:px-10">
          <div className="rounded-3xl bg-noob-rosa p-6 md:p-8">
            <h2 className="font-serif text-2xl">{s.honestTitle}</h2>
            <p className="mt-3 text-base leading-relaxed">{s.honest}</p>
          </div>
        </div>
      </section>

      {/* 7 Datenschutz */}
      <section className="bg-noob-cream">
        <div className={section}>
          <h2 className={h2}>{s.privacyTitle}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground">{s.privacy}</p>
          <div className="mt-2">{privacyLink}</div>
        </div>
      </section>

      {/* 8 Hilfe */}
      {(cfg.guaranteeText || cfg.supportNote) && (
        <section className="bg-noob-cream">
          <div className="mx-auto max-w-5xl px-6 pb-12 md:px-10">
            <h2 className={h2}>{s.helpTitle}</h2>
            {cfg.guaranteeText && (
              <p className="mt-4 rounded-2xl border-l-4 border-noob-terracotta bg-noob-rosa px-5 py-4 text-base">{cfg.guaranteeText}</p>
            )}
            {cfg.supportNote && <p className="mt-4 text-base text-foreground">{cfg.supportNote}</p>}
          </div>
        </section>
      )}

      {/* 9 Über mich */}
      <section className="bg-noob-rosa">
        <div className={`${section} grid items-center gap-8 md:grid-cols-[minmax(0,16rem)_1fr]`}>
          <img
            src={dinaPortraitAsset.url}
            alt={t.meetYourHostAlt}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[16rem] rounded-full"
            width={1882}
            height={1882}
          />
          <div>
            <h2 className={h2}>{s.aboutTitle}</h2>
            <p className="mt-4 text-base leading-relaxed">{t.heroFounder}</p>
            <p className="mt-2 text-base leading-relaxed">{s.aboutLine}</p>
          </div>
        </div>
      </section>

      {/* 10 FAQ */}
      <section className="bg-noob-cream">
        <div className={section}>
          <h2 className={h2}>{s.faqTitle}</h2>
          <Accordion type="single" collapsible className="mt-6">
            {s.faq(cfg.tool, toolCost).map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`} className="border-foreground/15">
                <AccordionTrigger className="min-h-11 text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-foreground">
                  {f.a}
                  {"privacy" in f && f.privacy && <div>{privacyLink}</div>}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 11 Signup */}
      <section id="signup" className="scroll-mt-44 md:scroll-mt-48 bg-noob-rosa">
        <div className={section}>
          {available ? (
            <>
              <h2 className={h2}>{s.h1}</h2>
              {buyButtons}
            </>
          ) : (
            <>
              <h2 className={h2}>{s.signupTitle}</h2>
              <p className="mt-3 text-base">{s.statusSoon}</p>
              <div className="mt-6 max-w-2xl"><WaitlistForm t={t} source="starterset" /></div>
            </>
          )}
        </div>
      </section>

      <NoobFooter />
    </main>
  );
}
