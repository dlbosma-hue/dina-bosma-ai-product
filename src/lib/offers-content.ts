import type { NoobLang } from "@/lib/ainoob-content";

/** Copy for the two offers on the Club landing page: the free sheet and the paid assistant. */
export type NoobOffer = {
  title: string;
  freeTag: string;
  soonTag: string;
  sheetName: string;
  sheetBody: string;
  sheetCta: string;
  sheetNote: string;
  assistantName: string;
  assistantBody: string;
  line: string;
};

export const offersContent: Record<NoobLang, NoobOffer> = {
  de: {
    title: "Womit du starten kannst",
    freeTag: "Gratis",
    soonTag: "Kommt bald",
    sheetName: "Wochen-Spickzettel",
    sheetBody:
      "Dein Spickzettel für eine Content-Woche. Auf 2 Seiten siehst du, welche Schritte du brauchst, und hakst sie selbst ab. Ganz ohne KI-Tool.",
    sheetCta: "Spickzettel holen",
    sheetNote: "Du bekommst eine E-Mail zur Bestätigung. Abmelden geht jederzeit.",
    assistantName: "Content-Assistentin",
    assistantBody:
      "Deine fertig eingerichtete KI-Assistentin für die Content-Woche. Sie hilft dir, deine Woche zu planen und Entwürfe in deiner Stimme zu schreiben. Mit schriftlicher Einrichtungsanleitung. Einmal kaufen, kein Kurs.",
    line: "Der Spickzettel zeigt dir den Weg. Die Assistentin geht ihn mit dir.",
  },
  en: {
    title: "What you can start with",
    freeTag: "Free",
    soonTag: "Coming soon",
    sheetName: "Weekly Cheat Sheet",
    sheetBody:
      "Your cheat sheet for a week of content. On 2 pages you see the steps you need and tick them off yourself. No AI tool needed.",
    sheetCta: "Get the cheat sheet",
    sheetNote: "You get an email to confirm. Unsubscribe any time.",
    assistantName: "Content Assistant",
    assistantBody:
      "Your AI assistant for the content week, set up and ready to use. It helps you plan your week and write drafts in your voice. With a written setup guide. Buy once, no course.",
    line: "The cheat sheet shows you the way. The assistant walks it with you.",
  },
};
