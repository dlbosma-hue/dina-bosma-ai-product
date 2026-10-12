import type { NoobLang } from "@/lib/ainoob-content";

/** Copy for the two offers on the Club landing page: the free sheet and the paid assistant. */
export type NoobOffer = {
  title: string;
  freeTag: string;
  soonTag: string;
  sheetName: string;
  sheetBody: string;
  sheetItems: string[];
  sheetCta: string;
  sheetNote: string;
  assistantName: string;
  assistantBody: string;
  line: string;
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
  liveHeroLink: string;
};

export const offersContent: Record<NoobLang, NoobOffer> = {
  de: {
    title: "Womit du starten kannst",
    freeTag: "Gratis",
    soonTag: "Kommt bald",
    sheetName: "Deine 2 Gratis-Spickzettel",
    sheetBody: "Du bekommst zwei Spickzettel per E-Mail:",
    sheetItems: [
      "KI-Basics: Was ein Prompt ist, was KI kann und was nicht, und was mit deinen Daten passiert. Eine Seite, ohne Fachchinesisch.",
      "Wochen-Spickzettel: Deine Content-Woche auf 2 Seiten. Du siehst, welche Schritte du brauchst, und hakst sie selbst ab. Ganz ohne KI-Tool.",
    ],
    sheetCta: "Spickzettel holen",
    sheetNote: "Du bekommst eine E-Mail zur Bestätigung. Abmelden geht jederzeit.",
    assistantName: "Content-Assistentin",
    assistantBody:
      "Deine fertig eingerichtete KI-Assistentin für die Content-Woche. Sie hilft dir, deine Woche zu planen und Entwürfe in deiner Stimme zu schreiben. Mit schriftlicher Einrichtungsanleitung. Einmal kaufen, kein Kurs.",
    line: "Der Spickzettel zeigt dir den Weg. Die Assistentin geht ihn mit dir.",
    liveTitle: "Community",
    liveIntro: "Lernen geht auch zusammen. In Berlin und online.",
    meetupTag: "Termine auf Meetup",
    meetupName: "AI for Women Meetup",
    meetupBody: "Eine Community für Frauen, die neu bei KI sind. Eine Stunde, ohne Vorwissen. Die Termine findest du auf Meetup, dort kannst du dich direkt anmelden.",
    meetupCta: "Zum Meetup und anmelden",
    workshopTag: "Auf Anfrage",
    workshopName: "Workshops",
    workshopBody: "KI verstehen und ausprobieren, in kleinen Schritten. In Berlin vor Ort und online. Du brauchst kein Business und kein Vorwissen.",
    workshopCta: "Schreib mir",
    liveHeroLink: "Auch live: Meetups und Workshops in Berlin und online.",
  },
  en: {
    title: "What you can start with",
    freeTag: "Free",
    soonTag: "Coming soon",
    sheetName: "Your 2 free cheat sheets",
    sheetBody: "You get two cheat sheets by email:",
    sheetItems: [
      "AI basics: what a prompt is, what AI can and cannot do, and what happens to your data. One page, no jargon.",
      "Weekly cheat sheet: your week of content on 2 pages. You see the steps you need and tick them off yourself. No AI tool needed.",
    ],
    sheetCta: "Get the cheat sheet",
    sheetNote: "You get an email to confirm. Unsubscribe any time.",
    assistantName: "Content Assistant",
    assistantBody:
      "Your AI assistant for the content week, set up and ready to use. It helps you plan your week and write drafts in your voice. With a written setup guide. Buy once, no course.",
    line: "The cheat sheet shows you the way. The assistant walks it with you.",
    liveTitle: "Community",
    liveIntro: "Learning is easier together. In Berlin and online.",
    meetupTag: "Dates on Meetup",
    meetupName: "AI for Women Meetup",
    meetupBody: "A community for women who are new to AI. One hour, no prior knowledge needed. You find the dates on Meetup, where you can sign up directly.",
    meetupCta: "Go to the meetup and sign up",
    workshopTag: "On request",
    workshopName: "Workshops",
    workshopBody: "Understand and try AI in small steps. In Berlin in person and online. You do not need a business or any prior knowledge.",
    workshopCta: "Write me",
    liveHeroLink: "Also live: meetups and workshops in Berlin and online.",
  },
};
