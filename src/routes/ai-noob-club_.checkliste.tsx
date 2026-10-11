import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { noobContent } from "@/lib/ainoob-content";
import { checklistContent } from "@/lib/checklist-content";
import { NoobHeader, NoobFooter } from "@/components/noob/NoobChrome";
import { WaitlistForm } from "@/components/noob/WaitlistForm";
import { ChecklistPreview } from "@/components/noob/ChecklistPreview";

export const Route = createFileRoute("/ai-noob-club_/checkliste")({
  component: ChecklistPage,
  head: () => noobHead(noobMeta.checklist),
});

function ChecklistPage() {
  useNoobMeta(noobMeta.checklist);
  const { lang } = useLanguage();
  const t = noobContent[lang];
  const c = checklistContent[lang];
  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />
      <section className="bg-noob-rosa">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-12 md:grid-cols-[1fr_16rem] md:px-10 md:py-16">
          <div>
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">{c.title}</h1>
            <ul className="mt-6 space-y-3">
              {c.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-base leading-relaxed">
                  <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-noob-terracotta" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8"><WaitlistForm t={t} source="checkliste" submitLabel={c.cta} /></div>
          </div>
          <ChecklistPreview label={c.preview} alt={c.previewAlt} />
        </div>
      </section>
      <NoobFooter />
    </main>
  );
}
