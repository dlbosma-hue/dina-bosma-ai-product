import type { Lang } from "./content";

export type BioLink = {
  /** Key used to resolve the URL in src/config/noobClub.ts. */
  id: "startcheck" | "community" | "editguide" | "starterpaket" | "prompts" | "meetup" | "workshop";
  title: string;
  hint: string;
  /** Alt text for the promotional graphic shown under this card. */
  imageAlt?: string;
  /** Featured card (terracotta) instead of the soft rosa card. */
  featured?: boolean;
  /** Opens a site outside humint.site in a new tab. */
  external?: boolean;
};

export type BioLinksContent = {
  label: string;
  title: string;
  intro: string;
  links: BioLink[];
  externalHint: string;
};

/** Copy for the Instagram link-in-bio page. German default, English mirror. */
export const bioLinksContent = {
  de: {
    label: "Link in Bio",
    title: "Alle Links auf einen Blick",
    intro:
      "Der AI Noob Club ist die HUMINT Community für Frauen, die neu bei KI sind. Hier sind die wichtigsten Links.",
    links: [
      {
        id: "startcheck",
        title: "Kostenloses 1:1: KI-Start-Check",
        hint: "In 20 Minuten finden wir drei einfache KI-Ideen für deinen Arbeitsalltag.",
        external: true,
      },
      {
        id: "community",
        title: "Auf die Warteliste: Meine Content-Assistentin",
        hint: "Früh dabei sein und weniger zahlen. 10 Beta-Plätze, danach Frühzugang.",
        featured: true,
      },
      {
        id: "editguide",
        title: "Gratis: Edit-Guide Reels schneiden mit Claude",
        hint: "Kostenloser PDF-Guide, direkt zum Download.",
      },
      {
        id: "starterpaket",
        title: "Gratis Starterpaket",
        hint: "KI-Basics und Wochenplan, gratis per E-Mail.",
      },
      {
        id: "prompts",
        title: "99 Prompts für authentische KI-Fotos",
        hint: "40 Seiten PDF, Sofort-Download, auf Englisch.",
        imageAlt:
          "Anzeige: Digital PDF, Prompt-Paket. 99 Prompts für KI-Fotos, Fotos, die echt wirken, ohne Fotoshooting. Sofort-Download PDF.",
        external: true,
      },
      {
        id: "meetup",
        title: "Treffen in Berlin und online",
        hint: "Eine Stunde, ohne Vorwissen. Anmeldung auf Meetup.",
        external: true,
      },
      {
        id: "workshop",
        title: "Workshop anfragen",
        hint: "Für Gruppen und kleine Teams. Schreib mir, wir planen zusammen.",
      },
    ],
    externalHint: "Öffnet eine neue Seite",
  },
  en: {
    label: "Link in bio",
    title: "All the links in one place",
    intro:
      "The AI Noob Club is the HUMINT community for women who are new to AI. Here are the most important links.",
    links: [
      {
        id: "startcheck",
        title: "Free 1:1: AI Start Check",
        hint: "In 20 minutes, we'll find three simple AI ideas for your working day.",
        external: true,
      },
      {
        id: "community",
        title: "Join the waitlist: My Content Assistant",
        hint: "Join early and pay less. 10 beta spots, then early access.",
        featured: true,
      },
      {
        id: "editguide",
        title: "Free: Edit Guide for cutting Reels with Claude",
        hint: "Free PDF guide, direct download.",
      },
      {
        id: "starterpaket",
        title: "Free starter pack",
        hint: "AI basics and a weekly plan, free by email.",
      },
      {
        id: "prompts",
        title: "99 prompts for authentic AI photos",
        hint: "40-page PDF, instant download, in English.",
        imageAlt:
          "Ad: Digital PDF prompt pack. 99 AI photo prompts, real-looking brand photos, no photoshoot needed. Instant download PDF.",
        external: true,
      },
      {
        id: "meetup",
        title: "Meetups in Berlin and online",
        hint: "One hour, no prior knowledge. Sign up on Meetup.",
        external: true,
      },
      {
        id: "workshop",
        title: "Ask about a workshop",
        hint: "For groups and small teams. Write to me and we plan together.",
      },
    ],
    externalHint: "Opens a new page",
  },
} satisfies Record<Lang, BioLinksContent>;
