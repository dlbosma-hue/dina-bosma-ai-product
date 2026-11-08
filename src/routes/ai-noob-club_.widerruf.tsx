import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { NoobHeader, NoobFooter } from "@/components/noob/NoobChrome";

export const Route = createFileRoute("/ai-noob-club_/widerruf")({ component: Page, head: () => noobHead(noobMeta.widerruf) });

function Page() {
  useNoobMeta(noobMeta.widerruf);
  const { lang } = useLanguage();
  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />
      <section className="border-b-2 border-navy bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <h1 className="text-4xl md:text-6xl">{lang === "de" ? "Widerruf und Stornierung" : "Withdrawal and cancellation"}</h1>
          <p className="retro-card mt-10 bg-rose p-6 text-base">{lang === "de" ? "[Text von Rechtsberatung einfügen]" : "[Insert text from legal advisor]"}</p>
        </div>
      </section>
      <NoobFooter />
    </main>
  );
}
