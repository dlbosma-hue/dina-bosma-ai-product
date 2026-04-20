import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Dina Bosma-Buczynska" },
      {
        name: "description",
        content:
          "Impressum und Anbieterkennzeichnung für die Website von Dina Bosma-Buczynska, freiberufliche KI-Beraterin und Product Managerin in Berlin.",
      },
      { property: "og:title", content: "Impressum — Dina Bosma-Buczynska" },
      {
        property: "og:description",
        content:
          "Impressum und Anbieterkennzeichnung für die Website von Dina Bosma-Buczynska.",
      },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5 md:px-10">
          <Link to="/" className="font-serif text-xl tracking-tight">
            Dina Bosma-Buczynska
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </div>
        <h1 className="font-serif text-4xl leading-[1.05] md:text-5xl">Impressum</h1>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
          <div>
            <p className="text-foreground">Dina Bosma-Buczynska</p>
            <p>Freiberufliche KI-Beraterin &amp; Product Managerin</p>
            <p>Berlin, Deutschland</p>
          </div>

          <div>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:dlbosma@gmail.com"
                className="text-foreground underline-offset-4 hover:underline"
              >
                dlbosma@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
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
              Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV
            </h2>
            <p>Dina Bosma-Buczynska, Berlin</p>
          </div>

          <div>
            <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-foreground">
              Haftungshinweis
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
              für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
              sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:px-10">
          <div className="font-serif text-base text-foreground">
            Dina Bosma-Buczynska
          </div>
          <div>Berlin · EN / DE / NL</div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </footer>
    </main>
  );
}
