import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Lang } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { noobClub } from "@/config/noobClub";
import { bioLinksContent } from "@/lib/bio-links-content";
import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { NoobHeader, NoobFooter } from "@/components/noob/NoobChrome";
import logoDeAsset from "@/assets/ai-noob-club-logo-de-v7.png.asset.json";
import logoEnAsset from "@/assets/ai-noob-club-logo-en-v7.png.asset.json";
import bioPromptsDeAsset from "@/assets/prompts99-bio-de.png.asset.json";
import bioPromptsEnAsset from "@/assets/prompts99-bio-en.jpg.asset.json";

export const Route = createFileRoute("/ai-noob-club_/links")({
  component: BioLinksPage,
  head: () => noobHead(noobMeta.bio),
});

const card =
  "group flex min-h-19 items-center gap-4 rounded-3xl border px-5 py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const soft = "border-noob-callout-border bg-noob-callout hover:border-noob-terracotta";
const featured = "border-noob-terracotta bg-primary hover:opacity-90";

function BioLinksPage() {
  useNoobMeta(noobMeta.bio);
  const { lang } = useLanguage();
  const t = noobContent[lang];
  const c = bioLinksContent[lang];

  const hrefs: Record<BioLinkId, string> = {
    community: noobClub.links.bioCommunity,
    starterpaket: noobClub.links.bioStarterpaket,
    prompts: noobClub.links.bioPrompts,
    meetup: noobClub.links.meetup,
    workshop: noobClub.links.bioWorkshop,
  };

  /** Optional promotional graphic shown under a card, per language. */
  const linkImages: Record<Lang, Partial<Record<BioLinkId, string>>> = {
    de: { prompts: bioPromptsDeAsset.url },
    en: { prompts: bioPromptsEnAsset.url },
  };

  return (
    <main className="noob-theme min-h-screen bg-noob-cream">
      <NoobHeader />
      <section className="bg-noob-rosa">
        <div className="mx-auto max-w-md px-6 pb-10 pt-8 text-center md:max-w-xl">
          <img
            src={lang === "en" ? logoEnAsset.url : logoDeAsset.url}
            alt={`${t.brand}: ${t.headerSubtitle}`}
            className="mx-auto block h-auto w-full max-w-sm"
            width={1920}
            height={640}
            fetchPriority="high"
          />
          <span className="mt-7 inline-flex rounded-full border border-noob-callout-border bg-noob-callout px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
            {c.label}
          </span>
          <h1 className="mt-4 text-3xl leading-tight md:text-4xl">{c.title}</h1>
          <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed md:max-w-md">{c.intro}</p>
        </div>
      </section>
      <div aria-hidden className="noob-stripes" />
      <section>
        <ol className="mx-auto flex max-w-md flex-col gap-3 px-5 py-8 md:max-w-xl md:py-12">
          {c.links.map((l, i) => {
            const href = hrefs[l.id];
            const img = linkImages[lang][l.id];
            if (!href) return null;
            return (
              <li key={l.id}>
                <a
                  href={href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`${card} ${l.featured ? featured : soft}`}
                >
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-noob-cream font-serif text-lg text-noob-navy"
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold leading-snug text-foreground">
                      {l.title}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-foreground">{l.hint}</span>
                  </span>
                  {l.external ? (
                    <>
                      <ArrowUpRight aria-hidden className="h-5 w-5 shrink-0 text-foreground" />
                      <span className="sr-only">{c.externalHint}</span>
                    </>
                  ) : (
                    <ArrowRight
                      aria-hidden
                      className="h-5 w-5 shrink-0 text-foreground transition-transform group-hover:translate-x-1"
                    />
                  )}
                </a>
                {img ? (
                  <a
                    href={href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="mt-3 block overflow-hidden rounded-3xl border border-noob-callout-border transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <img
                      src={img}
                      alt={l.imageAlt ?? ""}
                      width={1080}
                      height={1350}
                      loading="lazy"
                      className="block h-auto w-full"
                    />
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

type BioLinkId = "community" | "starterpaket" | "prompts" | "meetup" | "workshop";
