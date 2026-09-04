import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { useEffect } from "react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum, Dina Bosma Buczynska" },
      {
        name: "description",
        content:
          "Impressum und Anbieterkennzeichnung für die Website von Dina Bosma Buczynska, freiberufliche KI-Beraterin und Product Managerin in Berlin.",
      },
      { property: "og:title", content: "Impressum, Dina Bosma Buczynska" },
      {
        property: "og:description",
        content:
          "Impressum und Anbieterkennzeichnung für die Website von Dina Bosma Buczynska.",
      },
    ],
    links: [{ rel: "canonical", href: "https://humint.site/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  const { t } = useLanguage();
  const i = t.impressum;

  useEffect(() => {
    document.title = i.title.replace(".", "");
  }, [i.title]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5 md:px-10">
          <Link to="/" className="font-serif text-xl tracking-tight">
            Dina Bosma Buczynska
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {i.backHome}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {i.legalLabel}
        </div>
        <h1 className="font-serif text-4xl leading-[1.05] md:text-5xl">{i.title}</h1>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
          <div>
            <p className="text-foreground">{i.name}</p>
            <p>{i.role}</p>
            <p>{i.location}</p>
          </div>

          <div>
            <p>{i.contactText}</p>
            <p>
              {i.linkedInLabel}{" "}
              <a
                href="https://www.linkedin.com/in/dina-bosma-buczynska-b1a64544/"
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline-offset-4 hover:underline"
              >
                linkedin.com/in/dina-bosma-buczynska-b1a64544
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-foreground">
              {i.responsibleHeading}
            </h2>
            <p>{i.responsibleText}</p>
          </div>

          <div>
            <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-foreground">
              {i.liabilityHeading}
            </h2>
            <p>{i.liabilityText}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:px-10">
          <div className="font-serif text-base text-foreground">
            {i.footerBrand}
          </div>
          <div>{i.footerMeta}</div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </footer>
    </main>
  );
}
