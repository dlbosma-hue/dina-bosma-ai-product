import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { NoobHeader, NoobFooter } from "@/components/noob/NoobChrome";

export const Route = createFileRoute("/ai-noob-club_/datenschutz")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Datenschutz | AI Noob Club" },
      { name: "description", content: "Datenschutzerklärung des AI Noob Club." },
      { property: "og:title", content: "Datenschutz | AI Noob Club" },
      { property: "og:description", content: "Privacy policy of the AI Noob Club." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Privacy() {
  const { lang } = useLanguage();
  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />
      <section className="bg-noob-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10">
          <h1 className="font-serif text-4xl">{lang === "de" ? "Datenschutz" : "Privacy"}</h1>
          <p className="mt-6 text-base">[Text von Rechtsberatung einfügen]</p>
        </div>
      </section>
      <NoobFooter />
    </main>
  );
}
