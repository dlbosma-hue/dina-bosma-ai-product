import { createFileRoute } from "@tanstack/react-router";
import { noobClub } from "@/config/noobClub";
import { useLanguage } from "@/lib/i18n";
import { checklistContent } from "@/lib/checklist-content";
import { NoobHeader, NoobFooter, btnPrimary } from "@/components/noob/NoobChrome";

export const Route = createFileRoute("/ai-noob-club_/danke")({
  component: ThanksPage,
  head: () => ({
    meta: [
      { title: "Danke | AI Noob Club" },
      { name: "description", content: "Danke, du bist dabei im AI Noob Club." },
      { property: "og:title", content: "Danke | AI Noob Club" },
      { property: "og:description", content: "Thank you, you're in the AI Noob Club." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function ThanksPage() {
  const { lang } = useLanguage();
  const c = checklistContent[lang];
  const pdf = noobClub.links.checklistPdf;
  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />
      <section className="bg-noob-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10">
          <h1 className="font-serif text-4xl">{c.thanks}</h1>
          {pdf ? (
            <a href={pdf} download className={`${btnPrimary} mt-8`}>{c.download}</a>
          ) : (
            <p className="mt-6 text-base">{c.downloadLater}</p>
          )}
        </div>
      </section>
      <NoobFooter />
    </main>
  );
}
