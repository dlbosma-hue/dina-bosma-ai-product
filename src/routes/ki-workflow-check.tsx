import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/ki-workflow-check")({
  head: () => ({
    meta: [
      { title: "KI-Workflow-Check — HUMINT" },
      {
        name: "description",
        content:
          "In 2 Minuten wissen Sie, welcher erste KI-Schritt sich in Ihrem Alltag wirklich lohnt. Fünf kurze Fragen, eine konkrete Empfehlung.",
      },
      { property: "og:title", content: "KI-Workflow-Check — HUMINT" },
      {
        property: "og:description",
        content:
          "Fünf kurze Fragen, am Ende eine konkrete Empfehlung. Kein Tool-Verkauf, keine Blackbox.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://humint.site/ki-workflow-check" },
    ],
    links: [
      { rel: "canonical", href: "https://humint.site/ki-workflow-check" },
    ],
  }),
  component: KiWorkflowCheck,
});

function KiWorkflowCheck() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const homeSections = new Set([
      "about",
      "services",
      "how-i-work",
      "case-studies",
      "projects",
      "credentials",
      "contact",
    ]);

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
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <section
        id="ki-workflow-check"
        className="bg-[oklch(0.958_0.017_95)] py-12"
      >
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h1 className="font-serif text-[38px] leading-[1.02] md:text-[62px]">
            {t.kiCheckPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
            {t.kiCheckPage.lead}
          </p>
          <div className="mt-8">
            <iframe
              id="humint-quiz-frame"
              src="https://humint.juno.page/ki-workflow-check-quiz/?embed=1"
              title="KI-Workflow-Check"
              loading="lazy"
              className="block min-h-[560px] w-full border-0 md:min-h-[640px]"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
