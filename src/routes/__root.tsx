import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HUMINT, Human intelligence. AI powered." },
      { name: "description", content: "AI consulting by Dina Bosma-Buczynska. Strategy, implementation, and the bridge between them. Berlin-based." },
      { name: "author", content: "Dina Bosma-Buczynska" },
      { property: "og:title", content: "HUMINT, Human intelligence. AI powered." },
      { property: "og:description", content: "AI consulting by Dina Bosma-Buczynska. Strategy, implementation, and the bridge between them. Berlin-based." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "HUMINT, Human intelligence. AI powered." },
      { name: "twitter:description", content: "AI consulting by Dina Bosma-Buczynska. Strategy, implementation, and the bridge between them. Berlin-based." },
      { property: "og:image", content: "https://humint.site/og-image.jpg" },
      { name: "twitter:image", content: "https://humint.site/og-image.jpg" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dina Bosma-Buczynska",
          jobTitle: "AI Consultant & Product Leader",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Berlin",
            addressCountry: "DE",
          },
          url: "https://humint.site",
          sameAs: [
            "https://www.linkedin.com/in/dina-bosma-buczynska-b1a64544/",
            "https://github.com/dlbosma-hue",
            "https://medium.com/@dinaleonidovnabosma",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
