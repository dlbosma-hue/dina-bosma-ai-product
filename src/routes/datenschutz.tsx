import { noobHead, noobMeta, useNoobMeta } from "@/lib/noob-meta";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { NoobHeader, NoobFooter } from "@/components/noob/NoobChrome";

export const Route = createFileRoute("/datenschutz")({
  component: Page,
  head: () => noobHead(noobMeta.privacy),
});

function Page() {
  useNoobMeta(noobMeta.privacy);
  const { lang } = useLanguage();
  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />
      <section className="bg-noob-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <h1 className="font-serif text-4xl leading-[1.05] md:text-5xl">{lang === "de" ? "Datenschutz" : "Privacy"}</h1>
          <p className="mt-10 text-base leading-relaxed">{lang === "de" ? "[Text von Rechtsberatung einfügen]" : "[Insert text from legal advisor]"}</p>
        </div>
      </section>
      <NoobFooter />
    </main>
  );
}
