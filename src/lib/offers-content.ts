import type { NoobLang } from "@/lib/ainoob-content";

/** Starter pack and public meetup copy. */
export type NoobOffer = {
  title: string;
  freeTag: string;
  sheetName: string;
  sheetBody: string;
  sheetItems: string[];
  sheetCta: string;
  sheetNote: string;
  liveTitle: string;
  liveIntro: string;
  meetupTag: string;
  meetupName: string;
  meetupBody: string;
  meetupCta: string;
  workshopTag: string;
  workshopName: string;
  workshopBody: string;
  workshopCta: string;
};

export const offersContent: Record<NoobLang, NoobOffer> = {
  de: {
    title: "Womit du starten kannst",
    freeTag: "Gratis",
    sheetName: "Dein Gratis-Starterpaket",
    sheetBody: "Dein Starterpaket: zwei PDFs, die dir den Einstieg leichter machen:",
    sheetItems: [
      "KI-Basics: Was ein Prompt ist, was KI kann und was nicht, und was mit deinen Daten passiert. Eine Seite, ohne Fachchinesisch.",
      "Content-Wochenplan: Deine Content-Woche auf 2 Seiten. Du siehst, welche Schritte du brauchst, und hakst sie selbst ab. Ganz ohne KI-Tool.",
    ],
    sheetCta: "Starterpaket holen",
    sheetNote: "Du bekommst eine E-Mail zur Bestätigung. Abmelden geht jederzeit.",
    liveTitle: "Treffen und Workshops",
    liveIntro: "Lernen geht auch zusammen. In Berlin und online.",
    meetupTag: "Termine auf Meetup",
    meetupName: "AI for Women Meetup",
    meetupBody: "Eine Community für Frauen, die neu bei KI sind. Eine Stunde, ohne Vorwissen. Die Termine findest du auf Meetup, dort kannst du dich direkt anmelden.",
    meetupCta: "Zum Meetup und anmelden",
    workshopTag: "Auf Anfrage",
    workshopName: "Workshops",
    workshopBody: "KI verstehen und ausprobieren, in kleinen Schritten. In Berlin vor Ort und online. Du brauchst kein Business und kein Vorwissen.",
    workshopCta: "Schreib mir",
  },
  en: {
    title: "What you can start with",
    freeTag: "Free",
    sheetName: "Your free starter pack",
    sheetBody: "Your starter pack: two PDFs to get you off to a flying start:",
    sheetItems: [
      "AI basics: what a prompt is, what AI can and cannot do, and what happens to your data. One page, no jargon.",
      "Weekly Content Plan: your week of content on 2 pages. You see the steps you need and tick them off yourself. No AI tool needed.",
    ],
    sheetCta: "Get the starter pack",
    sheetNote: "You get an email to confirm. Unsubscribe any time.",
    liveTitle: "Meetups and workshops",
    liveIntro: "Learning is easier together. In Berlin and online.",
    meetupTag: "Dates on Meetup",
    meetupName: "AI for Women Meetup",
    meetupBody: "A community for women who are new to AI. One hour, no prior knowledge needed. You find the dates on Meetup, where you can sign up directly.",
    meetupCta: "Go to the meetup and sign up",
    workshopTag: "On request",
    workshopName: "Workshops",
    workshopBody: "Understand and try AI in small steps. In Berlin in person and online. You do not need a business or any prior knowledge.",
    workshopCta: "Write me",
  },
};
