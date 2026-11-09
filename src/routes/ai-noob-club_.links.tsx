import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Lang } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { noobClub } from "@/config/noobClub";
import { bioLinksContent } from "@/lib/bio-links-content";
import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { NoobHeader, NoobFooter } from "@/components/noob/NoobChrome";
import logoDeAsset from "@/assets/ai-noob-club-logo-de-v8.png.asset.json";
import logoEnAsset from "@/assets/ai-noob-club-logo-en-v8.png.asset.json";
import bioPromptsDeAsset from "@/assets/prompts99-bio-de.png.asset.json";
import bioPromptsEnAsset from "@/assets/prompts99-bio-en.jpg.asset.json";

export const Route = createFileRoute("/ai-noob-club_/links")({
  component: BioLinksPage,
  head: () => noobHead(noobMeta.bio),
});

const card = "group flex min-h-16 items-center gap-3 border border-navy px-4 py-3 text-navy no-underline transition-colors duration-200 hover:bg-rose";
const soft = "bg-cream";
const featured = "bg-grapefruit";

function BioLinksPage() {
  useNoobMeta(noobMeta.bio);
  const { lang } = useLanguage();
  const t = noobContent[lang];
  const c = bioLinksContent[lang];
  const hrefs: Record<BioLinkId, string> = {
    startcheck: noobClub.links.calendlyStartCheck,
    community: noobClub.links.bioCommunity,
    editguide: noobClub.links.bioEditGuide,
    starterpaket: noobClub.links.bioStarterpaket,
    prompts: noobClub.links.bioPrompts,
    meetup: noobClub.links.meetup,
    workshop: noobClub.links.bioWorkshop,
  };
  const linkImages: Record<Lang, Partial<Record<BioLinkId, string>>> = {
    de: { prompts: bioPromptsDeAsset.url },
    en: { prompts: bioPromptsEnAsset.url },
  };

  return (
    <main className="noob-theme min-h-screen bg-cream">
      <NoobHeader />
      <section className="border-b border-navy bg-rose">
        <div className="mx-auto max-w-md px-5 pb-6 pt-5 text-center md:max-w-xl">
          <img src={lang === "en" ? logoEnAsset.url : logoDeAsset.url} alt={`${t.brand}: ${t.headerSubtitle}`} className="mx-auto block h-auto w-full max-w-56 md:max-w-64" width={1920} height={640} fetchPriority="high" />
          <span className="retro-tape mt-4 bg-cream">{c.label}</span>
          <h1 className="mt-4 text-3xl md:text-4xl">{c.title}</h1>
          <p className="mx-auto mt-3 text-base">{c.intro}</p>
        </div>
      </section>
      <section>
        <ol className="mx-auto flex max-w-md flex-col gap-3 px-4 py-6 md:max-w-xl md:px-6 md:py-8">
          {c.links.map((l, i) => {
            const href = hrefs[l.id];
            const img = linkImages[lang][l.id];
            if (!href) return null;
            return (
              <li key={l.id}>
                <a href={href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${card} ${l.featured ? featured : soft}`}>
                  <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center border border-navy bg-cream font-headline text-lg leading-none text-navy">{i + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold leading-snug text-navy">{l.title}</span>
                    <span className="mt-0.5 block text-base leading-snug text-navy">{l.hint}</span>
                  </span>
                  {l.external ? <><ArrowUpRight aria-hidden className="h-5 w-5 shrink-0 text-navy" /><span className="sr-only">{c.externalHint}</span></> : <ArrowRight aria-hidden className="h-5 w-5 shrink-0 text-navy transition-transform duration-200 group-hover:translate-x-1" />}
                </a>
                {img ? (
                  <a href={href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="mt-3 block overflow-hidden border border-navy">
                    <img src={img} alt={l.imageAlt ?? ""} width={1080} height={1350} loading="lazy" className="block h-auto w-full" />
                    {l.external ? <span className="sr-only">{c.externalHint}</span> : null}
                  </a>
                ) : null}
              </li>
            );
          })}
        </ol>
      </section>
      <NoobFooter />
    </main>
  );
}

type BioLinkId = "startcheck" | "community" | "editguide" | "starterpaket" | "prompts" | "meetup" | "workshop";
