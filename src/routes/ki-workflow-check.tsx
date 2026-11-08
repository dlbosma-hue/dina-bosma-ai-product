import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/ki-workflow-check")({
  head: () => ({
    meta: [
      { title: "KI-Workflow-Check | HUMINT" },
      { name: "description", content: "In 2 Minuten wissen Sie, welcher erste KI-Schritt sich in Ihrem Alltag wirklich lohnt. Fünf kurze Fragen, eine konkrete Empfehlung." },
      { property: "og:title", content: "KI-Workflow-Check | HUMINT" },
      { property: "og:description", content: "Fünf kurze Fragen, am Ende eine konkrete Empfehlung. Kein Tool-Verkauf, keine Blackbox." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://humint.site/ki-workflow-check" },
    ],
    links: [{ rel: "canonical", href: "https://humint.site/ki-workflow-check" }],
  }),
  component: KiWorkflowCheck,
});

function KiWorkflowCheck() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  useEffect(() => {
    const homeSections = new Set(["about", "services", "how-i-work", "case-studies", "projects", "credentials", "contact"]);
    const redirectToHomeSection = () => {
      const hash = window.location.hash.slice(1);
      if (!homeSections.has(hash)) return;
      void navigate({ to: "/", hash, replace: true });
    };
    redirectToHomeSection();
    window.addEventListener("hashchange", redirectToHomeSection);
    return () => window.removeEventListener("hashchange", redirectToHomeSection);
  }, [navigate]);

  return (
    <main className="min-h-screen bg-cream text-navy">
      <Nav />
      <section id="ki-workflow-check" className="border-b-2 border-navy bg-sky">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <span className="retro-tape bg-rose">{t.nav.kiCheck}</span>
          <h1 className="mt-6 text-4xl md:text-6xl">{t.kiCheckPage.title}</h1>
          <p className="mt-4 text-lg text-navy">{t.kiCheckPage.lead}</p>
          <div className="mt-8 border-2 border-navy bg-cream">
            <iframe id="humint-quiz-frame" src="https://humint.juno.page/ki-workflow-check-quiz/?embed=1" title="KI-Workflow-Check" loading="lazy" className="block min-h-[560px] w-full border-0 md:min-h-[640px]" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
