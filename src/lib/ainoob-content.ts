export type NoobLang = "en" | "de";

type NoobStrings = {
  badge: string; brand: string; tagline: string; welcome: string; heroShopCta: string;
  heroLabel: string; heroTitle: string; heroContinuation: string; heroSubline: string; heroPrimary: string; heroSecondary: string; heroFounder: string;
  forTitle: string; forCards: string[]; notForTitle: string; notForItems: string[];
  shopTitle: string; shopIntro: string; shopAllCta: string;
  saleLabel: string; productPrice: string;
  productTitle: string; productBody: string; productBullets: string[]; productTags: string[]; productCta: string; productAlt: string; productNote: string;
  meetYourHostAlt: string; emailLabel: string; emailPlaceholder: string;
  aboutEyebrow: string; aboutParas: string[];
  nameLabel: string; namePlaceholder: string; submit: string; sending: string; success: string;
  error: string; privacy: string;
  valuesEyebrow: string; valuesTitle: string; values: { title: string; body: string }[];
  pathTitle: string; pathIntro: string; learnLabel: string;
  pathNote: { before: string; link: string; after: string };
  statusSoon: string; statusAvailable: string; statusFree: string;
  pathCards: { title: string; body: string; learn: string[]; status?: "free"; cta: string; href: string; cta2?: string; href2?: string; info?: string }[];
  consultingTitle: string; consultingBody: string; consultingCta: string;
  footer: string; imprint: string; backHome: string; langLabel: string; langAria: string; igAria: string;
  headerSubtitle: string; navChecklist: string; navChecklistCta: string; navLive: string; navCommunity: string; navStartCheck: string; menuOpen: string; menuClose: string;
  startCheckLabel: string; startCheckTitle: string; startCheckBody: string; startCheckCta: string; startCheckPrivacy: string; startCheckPrivacyLink: string;
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
    heroTitle: "AI for women with their own business.",
    heroContinuation: "Whether you're starting from zero or already a bit further along.",
    heroSubline:
      "You do almost everything yourself, and the day only has so many hours. Here you learn, step by step, how AI can give you some of that time back. And your business still sounds like you, not like a robot.",
    heroPrimary: "Free starter pack",
    heroSecondary: "To the course waitlist",
    heroFounder: "Hi, I'm Dina.",
    aboutEyebrow: "About me",
    aboutParas: [
      "Hi, I'm Dina. I grew up in The Hague and live in Berlin. I'm an AI consultant, originally a stylist and later a product manager. Both jobs taught me to listen closely to what someone needs. That makes the difference with AI too: the clearer your instruction, the better the result.",
      "AI Noob Club grew out of conversations with other women. Many only use AI for single requests in a chat and are not happy with the results: the texts sound interchangeable, the images look like everyone else's.",
      "I run my business on my own and have a four-year-old child. My time is tight. I let AI handle routine work, while decisions, voice and judgment stay with me.",
      "I show you step by step how to use AI and still sound like yourself.",
    ],
    forTitle: "This is for you if ...",
    forCards: [
      "... you run a small business or create content. And you do almost everything alone.",
      "... you have tried AI before, but you do not use it regularly yet.",
      "... you have little time and do not want to learn yet another tool you forget after a week.",
      "... you worry that texts sound robotic or that customer data is not safe.",
      "... you do not want your images to look like standard AI. They should look like you.",
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
    saleLabel: "Sale",
    productPrice: "Now €9.99",
    productTitle: "99 Prompts for Authentic AI Photos",
    productBody:
      "A PDF with 99 ready-to-use instructions for authentic AI photos. Describe yourself, choose a scene and adjust the light and style. Always label your AI twin as AI-generated.",
    productBullets: [
      "40-page PDF, instant download",
      "Works in most AI image tools",
      "Personal and commercial use of the images you create",
    ],
    productTags: ["PDF in English"],
    productCta: "€9.99 on Etsy",
    productAlt: "99 Prompts for Authentic AI Photos, digital PDF prompt pack by AI Noob Club",
    productNote: "I always label images with AI avatars or AI photos as AI. You should do the same.",
    meetYourHostAlt: "Portrait of Dina, founder of the AI Noob Club",
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
    pathCards: [
      {
        title: "Understand",
        body: "You know what AI can and cannot do. And what happens with your data.",
        learn: ["What a prompt is", "What AI is good at and what it is not", "Data-privacy basics for your business"],
        status: "free",
        cta: "Get the starter pack",
        href: "#checkliste",
        cta2: "Or go to the meetup",
        href2: "#treffen",
      },
      {
        title: "Apply",
        body: "You use AI for the tasks that eat your time.",
        learn: ["Customer emails", "Captions and newsletters", "Offers", "Weekly planning"],
        cta: "To the small helpers",
        href: "#shop",
      },
      {
        title: "Build",
        body: "You build your own assistant that knows your voice.",
        learn: ["Set up your own assistant", "Write down your voice", "Plan a week of content in one go"],
        cta: "To the course waitlist",
        href: "#community",
      },
    ],
    pathNote: { before: "Workshops are available on", link: "request", after: "." },
    consultingTitle: "Do you need support with the workflows in your business?",
    consultingBody:
      "HUMINT can help you review your processes, plan how to use AI and put that plan into practice.",
    consultingCta: "See HUMINT consulting",
    footer: "AI Noob Club is part of HUMINT. Human intelligence. AI powered.",
    imprint: "Imprint",
    backHome: "HUMINT home",
    langLabel: "DE",
    langAria: "Switch to German",
    igAria: "AI Noob Club on Instagram (opens a new page)",
    headerSubtitle: "You’re the boss. AI is new to the team.",
    navChecklist: "Starter pack",
    navChecklistCta: "Get the starter pack",
    navLive: "Meetups",
    navCommunity: "Course: My Content Assistant",
    navStartCheck: "AI Start Check",
    startCheckLabel: "Free 1:1",
    startCheckTitle: "AI Start Check",
    startCheckBody:
      "In 20 minutes we find three simple ways AI can make your working day easier. For example with content, planning or customer contact. You get concrete ideas you can try right away. Free and without obligation.",
    startCheckCta: "Book your free AI Start Check",
    startCheckPrivacy: "Booking runs via Calendly. Details in the",
    startCheckPrivacyLink: "privacy policy",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    seoTitle: "AI Noob Club | AI for women who run their own business",
    seoDesc:
      "AI basics for women who run their own business. Learn emails, captions and planning step by step, without losing your voice.",
  },
  de: {
    badge: "Eine HUMINT Initiative",
    brand: "AI Noob Club",
    tagline: "KI-Basics für Frauen mit eigenem Business.",
    welcome: "Willkommen im AI Noob Club",
    heroShopCta: "Shop",
    heroLabel: "AI Noob Club",
    heroTitle: "KI für Frauen mit eigenem Business.",
    heroContinuation: "Ob du bei null startest oder schon ein bisschen weiter bist.",
    heroSubline:
      "Du machst fast alles allein, und der Tag hat nur so viele Stunden. Hier lernst du Schritt für Schritt, wie KI dir Zeit zurückgibt. Und dein Business klingt weiter nach dir. Nicht nach einem Roboter.",
    heroPrimary: "Gratis Starterpaket",
    heroSecondary: "Zur Kurs-Warteliste",
    heroFounder: "Hallo, ich bin Dina.",
    aboutEyebrow: "Über mich",
    aboutParas: [
      "Hallo, ich bin Dina. Ich bin in Den Haag aufgewachsen und lebe in Berlin. Ich bin KI-Beraterin, ursprünglich Stylistin und später Produktmanagerin. Beide Berufe haben mir beigebracht, genau zuzuhören, was jemand braucht. Das macht auch bei KI den Unterschied: Je klarer die Anweisung, desto besser das Ergebnis.",
      "Der AI Noob Club ist aus Gesprächen mit anderen Frauen entstanden. Viele nutzen KI bisher nur für einzelne Anfragen im Chat und sind mit dem Ergebnis nicht zufrieden: Die Texte klingen austauschbar, die Bilder sehen aus wie bei allen anderen.",
      "Ich führe mein Business allein und habe ein vierjähriges Kind. Meine Zeit ist knapp. Routinearbeit übernimmt bei mir die KI, Entscheidungen, Stimme und Haltung bleiben bei mir.",
      "Ich zeige dir Schritt für Schritt, wie du KI nutzt und dabei nach dir klingst.",
    ],
    forTitle: "Das hier ist für dich, wenn ...",
    forCards: [
      "... du ein kleines Business führst oder Content machst. Und fast alles allein.",
      "... du KI schon mal probiert hast, aber noch nicht regelmäßig nutzt.",
      "... du wenig Zeit hast und nicht noch ein Tool lernen willst, das du nach einer Woche vergisst.",
      "... du dir Sorgen machst, dass Texte nach Roboter klingen oder Kundendaten nicht sicher sind.",
      "... du nicht möchtest, dass deine Bilder nach Standard-KI aussehen. Sie sollen nach dir aussehen.",
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
    saleLabel: "Angebot",
    productPrice: "Jetzt 9,99 €",
    productTitle: "99 Prompts für authentische KI-Fotos",
    productBody:
      "Ein PDF mit 99 fertigen Anweisungen für authentische KI-Fotos. Beschreibe dich, wähle eine Szene und passe Licht und Stil an. Kennzeichne deinen KI-Twin immer als KI-generiert.",
    productBullets: [
      "40-seitiges PDF, sofortiger Download",
      "Funktioniert in den meisten KI-Bild-Tools",
      "Private und kommerzielle Nutzung der erstellten Bilder",
    ],
    productTags: ["PDF auf Englisch"],
    productCta: "Für 9,99 € auf Etsy",
    productAlt: "99 Prompts für authentische KI-Fotos, digitales PDF-Prompt-Paket vom AI Noob Club",
    productNote: "Bilder mit KI-Avataren oder KI-Fotos kennzeichne ich immer als KI. Du solltest das auch tun.",
    meetYourHostAlt: "Porträt von Dina, Gründerin des AI Noob Club",
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
    pathCards: [
      {
        title: "Verstehen",
        body: "Du weißt, was KI kann und was nicht. Und was mit deinen Daten passiert.",
        learn: ["Was ein Prompt ist", "Was KI gut kann und was nicht", "Datenschutz-Basics für dein Business"],
        status: "free",
        cta: "Starterpaket holen",
        href: "#checkliste",
        cta2: "Oder zum Meetup",
        href2: "#treffen",
      },
      {
        title: "Anwenden",
        body: "Du nutzt KI bei den Aufgaben, die dir Zeit fressen.",
        learn: ["Kundinnenmails", "Captions und Newsletter", "Angebote", "Wochenplanung"],
        cta: "Zu den kleinen Hilfen",
        href: "#shop",
      },
      {
        title: "Bauen",
        body: "Du baust dir eine Assistentin, die deine Stimme kennt.",
        learn: ["Eine eigene Assistentin einrichten", "Deine Stimme festhalten", "Eine Woche Content in einem Rutsch planen"],
        cta: "Zur Kurs-Warteliste",
        href: "#community",
      },
    ],
    pathNote: { before: "Workshops gibt es auf", link: "Anfrage", after: "." },
    consultingTitle: "Du brauchst Unterstützung bei den Abläufen in deinem Unternehmen?",
    consultingBody:
      "HUMINT hilft dir, deine Abläufe zu prüfen, den KI-Einsatz zu planen und deinen Plan umzusetzen.",
    consultingCta: "Zur HUMINT Beratung",
    footer: "AI Noob Club ist Teil von HUMINT. Human intelligence. AI powered.",
    imprint: "Impressum",
    backHome: "Zur HUMINT Startseite",
    langLabel: "EN",
    langAria: "Auf Englisch wechseln",
    igAria: "AI Noob Club auf Instagram (öffnet eine neue Seite)",
    headerSubtitle: "Du bist die Chefin. KI ist neu im Team.",
    navChecklist: "Starterpaket",
    navChecklistCta: "Starterpaket holen",
    navLive: "Treffen",
    navCommunity: "Kurs: Meine Content-Assistentin",
    navStartCheck: "KI-Start-Check",
    startCheckLabel: "Gratis 1:1",
    startCheckTitle: "KI-Start-Check",
    startCheckBody:
      "In 20 Minuten finden wir gemeinsam drei einfache Möglichkeiten, wie KI deinen Arbeitsalltag erleichtern kann. Zum Beispiel bei Content, Planung oder Kundenkontakt. Du bekommst konkrete Ideen, die du sofort ausprobieren kannst. Kostenlos und unverbindlich.",
    startCheckCta: "Gratis KI-Start-Check buchen",
    startCheckPrivacy: "Die Buchung läuft über Calendly. Details im",
    startCheckPrivacyLink: "Datenschutz",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    seoTitle: "AI Noob Club | KI für Frauen mit eigenem Business",
    seoDesc:
      "KI-Basics für Frauen, die ihr eigenes Business führen. Mails, Captions und Planung Schritt für Schritt lernen, ohne die eigene Stimme zu verlieren.",
  },
};

export type NoobContent = NoobStrings;
