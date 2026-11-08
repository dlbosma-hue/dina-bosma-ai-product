import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { createFileRoute } from "@tanstack/react-router";
import { noobClub } from "@/config/noobClub";
import { useLanguage } from "@/lib/i18n";
import { checklistContent } from "@/lib/checklist-content";
import { NoobHeader, NoobFooter, btnPrimary } from "@/components/noob/NoobChrome";

export const Route = createFileRoute("/ai-noob-club_/danke")({ component: ThanksPage, head: () => noobHead(noobMeta.thanks) });

function ThanksPage() {
  useNoobMeta(noobMeta.thanks);
  const { lang } = useLanguage();
  const c = checklistContent[lang];
  const pdf = noobClub.links.checklistPdf;
  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />
      <section className="border-b-2 border-navy bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
          <h1 className="text-4xl md:text-6xl">{c.thanks}</h1>
          {pdf ? <a href={pdf} download className={`${btnPrimary} mt-8`}>{c.download}</a> : <p className="mt-6 text-base">{c.downloadLater}</p>}
        </div>
      </section>
      <NoobFooter />
    </main>
  );
}
