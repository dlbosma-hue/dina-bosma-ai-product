export type NoobLang = "en" | "de";

type NoobStrings = {
  badge: string; brand: string; tagline: string; welcome: string; heroShopCta: string;
  heroLabel: string; heroTitle: string; heroSubline: string; heroPrimary: string; heroSecondary: string; heroFounder: string;
  forTitle: string; forCards: string[]; notForTitle: string; notForItems: string[];
  shopTitle: string; shopIntro: string; shopAllCta: string;
  kitTitle: string; kitBody: string; kitTags: string[]; kitEtsyCta: string; kitGumroadCta: string;
  productTitle: string; productBody: string; productBullets: string[]; productTags: string[]; productCta: string; productAlt: string; productNote: string;
  waitlistTitle: string; waitlistLead: string; meetYourHostAlt: string; emailLabel: string; emailPlaceholder: string;
  nameLabel: string; namePlaceholder: string; submit: string; sending: string; success: string;
  error: string; privacy: string;
  valuesEyebrow: string; valuesTitle: string; values: { title: string; body: string }[];
  pathTitle: string; pathIntro: string; learnLabel: string;
  statusSoon: string; statusAvailable: string; statusFree: string; statusLater: string;
  pathCards: { title: string; body: string; learn: string[]; status: "free" | "available" | "starter"; cta: string; href: string }[];
  pathRows: { text: string }[];
  consultingTitle: string; consultingBody: string; consultingCta: string;
  footer: string; imprint: string; backHome: string; langLabel: string; langAria: string;
  headerSubtitle: string; navStarter: string; navChecklist: string; navWaitlist: string; menuOpen: string; menuClose: string;
  seoTitle: string; seoDesc: string;
};

export const noobContent: Record<NoobLang, NoobStrings> = {
  en: {
    badge: "A HUMINT initiative",
    brand: "AI Noob Club",
    tagline: "AI basics for women with a business.",
    welcome: "Welcome to the AI Noob Club",
    heroShopCta: "Shop",
    heroLabel: "AI Noob Club",
    heroTitle: "AI for female entrepreneurs. Even when you start from zero.",
    heroSubline:
      "You do almost everything alone and have little time. Here you learn step by step how AI can help your business. Without sounding like a robot.",
    heroPrimary: "Free content-week checklist",
    heroSecondary: "To the Starter Set",
    heroFounder: "From Dina in Berlin. Product manager, now AI consultant, self-employed with a small child.",
    forTitle: "This is for you if you ...",
    forCards: [
      "... you run a small business or create content. And you do almost everything alone.",
      "... you have tried AI before, but you do not use it regularly yet.",
      "... you have little time and do not want to learn yet another tool you forget after a week.",
      "... you worry that texts sound robotic or that customer data is not safe.",
    ],
    notForTitle: "Probably not for you if ...",
    notForItems: [
      "... you already build your own AI assistants.",
      "... you expect finished results without thinking along yourself.",
    ],
    shopTitle: "To get started: small helpers for everyday life",
    shopIntro:
      "Guides and templates that need no technical knowledge. Your voice stays yours. You check every text yourself and enter no customer data.",
    shopAllCta: "To the full shop",
    kitTitle: "Content-Week-Kit",
    kitBody: "Captions and visuals for Instagram, step by step.",
    kitTags: ["German and English", "Instant download"],
    kitEtsyCta: "View on Etsy",
    kitGumroadCta: "View on Gumroad",
    productTitle: "99 Prompts for Authentic AI Photos",
    productBody:
      "A PDF with 99 ready-to-use instructions for authentic AI photos. Describe yourself, choose a scene and adjust the light and style. Always label your AI twin as AI-generated.",
    productBullets: [
      "40-page PDF, instant download",
      "Works in most AI image tools",
      "Personal and commercial use of the images you create",
    ],
    productTags: ["PDF in English"],
    productCta: "View on Etsy",
    productAlt: "99 Prompts for Authentic AI Photos, digital PDF prompt pack by AI Noob Club",
    productNote: "I always label images with AI avatars or AI photos as AI. You should do the same.",
    waitlistTitle: "Join the waitlist.",
    waitlistLead:
      "The first course for women entrepreneurs who are new to AI is taking shape. Leave your email for workshop and course updates, plus a few starter tips.",
    meetYourHostAlt: "Meet your host: Dina, founder of the AI Noob Club, with a cup of coffee at her laptop",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    nameLabel: "First name",
    namePlaceholder: "Your first name",
    submit: "Join the waitlist",
    sending: "Sending...",
    success: "You are on the list. Thank you, talk soon.",
    error: "Something went wrong. Please try again in a moment.",
    privacy: "No spam. Unsubscribe any time.",
    valuesEyebrow: "What we stand for",
    valuesTitle: "What matters to us",
    values: [
      { title: "AI makes you stronger. It does not replace you.", body: "You always have the final say." },
      { title: "Respect for everyone.", body: "No one here is left out or looked down on." },
      { title: "Mindful and sustainable.", body: "We use AI when it helps, and leave it out when it is not needed." },
      { title: "Honest.", body: "No income promises and no made up success stories. Anything made with an AI avatar or AI image is labelled as AI." },
    ],
    pathTitle: "Your path in three steps",
    pathIntro:
      "You do not have to be able to do everything at once. Start with the step that feels right right now.",
    learnLabel: "You learn",
    statusSoon: "Soon",
    statusAvailable: "Available",
    statusFree: "Free",
    statusLater: "Later",
    pathCards: [
      {
        title: "Understand",
        body: "You know what AI can and cannot do. And what happens with your data.",
        learn: ["What a prompt is", "What AI is good at and what it is not", "Data-privacy basics for your business"],
        status: "free",
        cta: "Get the checklist",
        href: "#checkliste",
      },
      {
        title: "Apply",
        body: "You use AI for the tasks that eat your time.",
        learn: ["Customer emails", "Captions and newsletters", "Offers", "Weekly planning"],
        status: "available",
        cta: "Go to the Content Week Kit",
        href: "#shop",
      },
      {
        title: "Build",
        body: "You build your own assistant that knows your voice.",
        learn: ["Set up your own assistant", "Write down your voice", "Plan a week of content in one go"],
        status: "starter",
        cta: "To the Starter Set",
        href: "#starterset",
      },
    ],
    pathRows: [
      { text: "Workshops for all women, in Berlin and online. Coming later." },
      { text: "Support: personal guidance in a small group or 1:1. Coming later, when there is demand." },
    ],
    consultingTitle: "Do you need support with the workflows in your business?",
    consultingBody:
      "HUMINT can help you review your processes, plan how to use AI and put that plan into practice.",
    consultingCta: "See HUMINT consulting",
    footer: "AI Noob Club is part of HUMINT. Human intelligence. AI powered.",
    imprint: "Imprint",
    backHome: "HUMINT home",
    langLabel: "DE",
    langAria: "Switch to German",
    headerSubtitle: "AI for women. Step by step.",
    navStarter: "Starter Set",
    navChecklist: "Free checklist",
    navWaitlist: "Join the waitlist",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    seoTitle: "AI Noob Club | AI basics for women entrepreneurs",
    seoDesc:
      "AI basics for female leaders and women with a small business. Learn emails, captions and planning step by step, without losing your voice.",
  },
  de: {
    badge: "Eine HUMINT Initiative",
    brand: "AI Noob Club",
    tagline: "KI-Basics für Frauen mit eigenem Business.",
    welcome: "Willkommen im AI Noob Club",
    heroShopCta: "Shop",
    heroLabel: "AI Noob Club",
    heroTitle: "KI für Unternehmerinnen. Auch wenn du bei null startest.",
    heroSubline:
      "Du machst fast alles allein und hast wenig Zeit. Hier lernst du Schritt für Schritt, wie KI dir im Business hilft. Ohne dass du wie ein Roboter klingst.",
    heroPrimary: "Gratis Content-Woche-Checkliste",
    heroSecondary: "Zum Starter-Set",
    heroFounder: "Von Dina aus Berlin. Produktmanagerin, jetzt KI-Beraterin, selbstständig mit kleinem Kind.",
    forTitle: "Das hier ist für dich, wenn du ...",
    forCards: [
      "... ein kleines Business führst oder Content machst. Und fast alles allein.",
      "... KI schon mal probiert hast, aber noch nicht regelmäßig nutzt.",
      "... wenig Zeit hast und nicht noch ein Tool lernen willst, das du nach einer Woche vergisst.",
      "... dir Sorgen machst, dass Texte nach Roboter klingen oder Kundendaten nicht sicher sind.",
    ],
    notForTitle: "Eher nichts für dich, wenn ...",
    notForItems: [
      "... du schon eigene KI-Assistentinnen baust.",
      "... du fertige Ergebnisse erwartest, ohne selbst mitzudenken.",
    ],
    shopTitle: "Zum Starten: kleine Hilfen für den Alltag",
    shopIntro:
      "Anleitungen und Vorlagen, für die du kein Technikwissen brauchst. Deine Stimme bleibt deine. Du prüfst jeden Text selbst und gibst keine Kundendaten ein.",
    shopAllCta: "Zum ganzen Shop",
    kitTitle: "Content-Week-Kit",
    kitBody: "Captions und Visuals für Instagram, Schritt für Schritt.",
    kitTags: ["Deutsch und Englisch", "Sofort als Download"],
    kitEtsyCta: "Bei Etsy ansehen",
    kitGumroadCta: "Bei Gumroad ansehen",
    productTitle: "99 Prompts für authentische KI-Fotos",
    productBody:
      "Ein PDF mit 99 fertigen Anweisungen für authentische KI-Fotos. Beschreibe dich, wähle eine Szene und passe Licht und Stil an. Kennzeichne deinen KI-Twin immer als KI-generiert.",
    productBullets: [
      "40-seitiges PDF, sofortiger Download",
      "Funktioniert in den meisten KI-Bild-Tools",
      "Private und kommerzielle Nutzung der erstellten Bilder",
    ],
    productTags: ["PDF auf Englisch"],
    productCta: "Auf Etsy ansehen",
    productAlt: "99 Prompts für authentische KI-Fotos, digitales PDF-Prompt-Paket vom AI Noob Club",
    productNote: "Bilder mit KI-Avataren oder KI-Fotos kennzeichne ich immer als KI. Du solltest das auch tun.",
    waitlistTitle: "Auf die Warteliste.",
    waitlistLead:
      "Der erste Kurs für Unternehmerinnen, die neu bei KI sind, entsteht gerade. Mit deiner E-Mail bekommst du Infos zu Workshops und Kursen. Dazu ein paar Tipps für deinen Start.",
    meetYourHostAlt: "Meet your host: Dina, Gründerin des AI Noob Club, mit einer Tasse Kaffee am Laptop",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "name@beispiel.de",
    nameLabel: "Vorname",
    namePlaceholder: "Dein Vorname",
    submit: "Auf die Warteliste",
    sending: "Wird gesendet...",
    success: "Du bist auf der Liste. Danke, bis bald.",
    error: "Da ist etwas schiefgelaufen. Bitte versuch es gleich noch einmal.",
    privacy: "Kein Spam. Jederzeit abmeldbar.",
    valuesEyebrow: "Wofür wir stehen",
    valuesTitle: "Was uns wichtig ist",
    values: [
      { title: "KI stärkt dich. Sie ersetzt dich nicht.", body: "Du behältst immer das letzte Wort." },
      { title: "Respekt für alle.", body: "Hier wird niemand ausgeschlossen oder abgewertet." },
      { title: "Bewusst und nachhaltig.", body: "Wir nutzen KI, wenn sie hilft, und lassen sie weg, wenn sie nicht nötig ist." },
      { title: "Ehrlich.", body: "Keine Einkommensversprechen und keine erfundenen Erfolgsgeschichten. Alles, was mit einem KI-Avatar oder KI-Bild gemacht ist, ist als KI gekennzeichnet." },
    ],
    pathTitle: "Dein Weg in drei Schritten",
    pathIntro:
      "Du musst nicht alles auf einmal können. Fang bei dem Schritt an, der sich gerade richtig anfühlt.",
    learnLabel: "Du lernst",
    statusSoon: "Bald",
    statusAvailable: "Verfügbar",
    statusFree: "Gratis",
    statusLater: "Später",
    pathCards: [
      {
        title: "Verstehen",
        body: "Du weißt, was KI kann und was nicht. Und was mit deinen Daten passiert.",
        learn: ["Was ein Prompt ist", "Was KI gut kann und was nicht", "Datenschutz-Basics für dein Business"],
        status: "free",
        cta: "Checkliste holen",
        href: "#checkliste",
      },
      {
        title: "Anwenden",
        body: "Du nutzt KI bei den Aufgaben, die dir Zeit fressen.",
        learn: ["Kundinnenmails", "Captions und Newsletter", "Angebote", "Wochenplanung"],
        status: "available",
        cta: "Zum Content-Week-Kit",
        href: "#shop",
      },
      {
        title: "Bauen",
        body: "Du baust dir eine Assistentin, die deine Stimme kennt.",
        learn: ["Eine eigene Assistentin einrichten", "Deine Stimme festhalten", "Eine Woche Content in einem Rutsch planen"],
        status: "starter",
        cta: "Zum Starter-Set",
        href: "#starterset",
      },
    ],
    pathRows: [
      { text: "Workshops für alle Frauen, in Berlin und online. Kommen später." },
      { text: "Begleitung: persönliche Unterstützung in einer kleinen Gruppe oder 1:1. Kommt später, wenn der Bedarf da ist." },
    ],
    consultingTitle: "Du brauchst Unterstützung bei den Abläufen in deinem Unternehmen?",
    consultingBody:
      "HUMINT hilft dir, deine Abläufe zu prüfen, den KI-Einsatz zu planen und deinen Plan umzusetzen.",
    consultingCta: "Zur HUMINT Beratung",
    footer: "AI Noob Club ist Teil von HUMINT. Human intelligence. AI powered.",
    imprint: "Impressum",
    backHome: "Zur HUMINT Startseite",
    langLabel: "EN",
    langAria: "Auf Englisch wechseln",
    headerSubtitle: "KI für Frauen. Schritt für Schritt.",
    navStarter: "Starter-Set",
    navChecklist: "Gratis Checkliste",
    navWaitlist: "Auf die Warteliste",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    seoTitle: "AI Noob Club | KI-Basics für Unternehmerinnen",
    seoDesc:
      "KI-Basics für Unternehmerinnen und Frauen mit kleinem Business. Mails, Captions und Planung Schritt für Schritt lernen, ohne die eigene Stimme zu verlieren.",
  },
};

export type NoobContent = NoobStrings;
