import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { useEffect } from "react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: "Impressum, Dina Bosma Buczynska" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung für die Website von Dina Bosma Buczynska, freiberufliche KI-Beraterin und Product Managerin in Berlin." },
      { property: "og:title", content: "Impressum, Dina Bosma Buczynska" },
      { property: "og:description", content: "Impressum und Anbieterkennzeichnung für die Website von Dina Bosma Buczynska." },
    ],
    links: [{ rel: "canonical", href: "https://humint.site/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  const { t } = useLanguage();
  const i = t.impressum;
  useEffect(() => { document.title = i.title.replace(".", ""); }, [i.title]);

  return (
    <main className="min-h-screen bg-cream text-navy">
      <header className="sticky top-0 z-40 border-b-2 border-navy bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link to="/" className="retro-chip retro-chip-accent px-3 pb-1 pt-0.5 text-lg text-navy no-underline">Dina Bosma Buczynska</Link>
          <Link to="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-link underline">{i.backHome}</Link>
        </div>
      </header>

      <section className="border-b-2 border-navy bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <span className="retro-tape">{i.legalLabel}</span>
          <h1 className="mt-6 text-4xl md:text-6xl">{i.title}</h1>
          <div className="mt-10 space-y-8 text-base text-navy">
            <div className="retro-card bg-rose p-6"><p className="font-semibold">{i.name}</p><p>{i.role}</p><p>{i.location}</p></div>
            <div>
              <p>{i.contactText}</p>
              <p>{i.linkedInLabel}{" "}<a href="https://www.linkedin.com/in/dina-bosma-buczynska-b1a64544/" target="_blank" rel="noreferrer" className="text-link underline">linkedin.com/in/dina-bosma-buczynska-b1a64544</a></p>
            </div>
            <div><h2 className="mb-2 text-2xl">{i.responsibleHeading}</h2><p>{i.responsibleText}</p></div>
            <div><h2 className="mb-2 text-2xl">{i.liabilityHeading}</h2><p>{i.liabilityText}</p></div>
          </div>
        </div>
      </section>

      <footer className="bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 text-sm text-navy md:flex-row md:items-center md:px-8">
          <div className="font-headline text-2xl leading-[1.05]">{i.footerBrand}</div>
          <div>{i.footerMeta}</div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </footer>
    </main>
  );
}
