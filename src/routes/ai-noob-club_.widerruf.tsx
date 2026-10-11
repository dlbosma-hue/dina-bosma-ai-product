import { createFileRoute } from "@tanstack/react-router";
import { NoobHeader, NoobFooter } from "@/components/noob/NoobChrome";

export const Route = createFileRoute("/ai-noob-club_/widerruf")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Widerruf und Stornierung | AI Noob Club" },
      { name: "description", content: "Widerruf und Stornierung, AI Noob Club von HUMINT." },
      { property: "og:title", content: "Widerruf und Stornierung | AI Noob Club" },
      { property: "og:description", content: "Widerruf und Stornierung, AI Noob Club von HUMINT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Page() {
  return (
    <main className="noob-theme min-h-screen">
      <NoobHeader />
      <section className="bg-noob-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <h1 className="font-serif text-4xl leading-[1.05] md:text-5xl">Widerruf und Stornierung</h1>
          <p className="mt-10 text-base leading-relaxed">[Text von Rechtsberatung einfügen]</p>
        </div>
      </section>
      <NoobFooter />
    </main>
  );
}
