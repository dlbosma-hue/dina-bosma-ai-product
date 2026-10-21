import type { Lang } from "./content";

export type BioLink = {
  /** Key used to resolve the URL in src/config/noobClub.ts. */
  id: "community" | "starterpaket" | "prompts" | "meetup" | "workshop";
  title: string;
  hint: string;
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
        id: "community",
        title: "Gründerinnen-Community: kostenlos testen",
        hint: "Lernen geht auch zusammen. Du testest neue Produkte kostenlos.",
        featured: true,
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
        id: "community",
        title: "Founders' Community: test for free",
        hint: "Learning works better together. You test new products for free.",
        featured: true,
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
