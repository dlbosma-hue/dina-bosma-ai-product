export type NoobLang = "en" | "de";

type NoobStrings = {
  badge: string; brand: string; tagline: string; welcome: string; heroShopCta: string; heroLead: string; heroFor: string;
  forItems: string[];
  shopTitle: string; shopParagraphs: string[]; shopCta: string;
  productEyebrow: string; productTitle: string; productBody: string; productBullets: string[]; productCta: string; productAlt: string;
  waitlistTitle: string; waitlistLead: string; meetYourHostAlt: string; emailLabel: string; emailPlaceholder: string;
  nameLabel: string; namePlaceholder: string; submit: string; sending: string; success: string;
  error: string; privacy: string;
  valuesEyebrow: string; valuesTitle: string; values: { title: string; body: string }[];
  offerEyebrow: string; offerTitle: string; offers: { title: string; body: string }[];
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
    heroLead:
      "AI basics for women entrepreneurs and leaders with a small business. You do almost everything yourself. Start small and use AI in your business, without losing your voice or the human touch.",
    heroFor: "Made for",
    forItems: [
      "Women entrepreneurs who are completely new to AI",
      "Women running a small business with little time and a lot on their plate",
      "Female leaders who want support with emails, content and weekly planning",
      "Women who worry about robotic writing or exposing customer data",
    ],
    shopTitle: "Shop.",
    shopParagraphs: [
      "You know your business. AI is just new to you. These resources help you start with the basics, one step at a time.",
      "Guides, templates and checklists for women entrepreneurs with a small business. No technical background needed.",
      "Work on customer emails, captions, offers, newsletters and weekly planning. Explore authentic AI photos for your business.",
      "Your voice stays yours. Learn to check what AI writes and keep customer data out of your requests.",
      "No pressure to learn everything at once. Start with one task that matters to your business.",
    ],
    shopCta: "Visit the shop",
    productEyebrow: "New in the shop",
    productTitle: "99 Prompts for Authentic AI Photos",
    productBody:
      "A PDF with 99 ready-to-use instructions for authentic AI photos. Describe yourself, choose a scene and adjust the light and style. Always label your AI twin as AI-generated.",
    productBullets: [
      "40-page PDF, instant download",
      "Works in most AI image tools",
      "Personal and commercial use of the images you create",
    ],
    productCta: "View on Etsy",
    productAlt: "99 Prompts for Authentic AI Photos, digital PDF prompt pack by AI Noob Club",
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
    valuesTitle: "What matters to us.",
    values: [
      {
        title: "Enhance, never replace.",
        body: "AI strengthens people instead of replacing them. You keep your voice, your judgment and the final say.",
      },
      {
        title: "Respect comes first.",
        body: "Non-discrimination is our standard. We check for unfair assumptions and treat people with respect.",
      },
      {
        title: "Green and mindful.",
        body: "Use AI consciously. Keep requests focused and avoid unnecessary generations. Sometimes you do not need AI at all.",
      },
      {
        title: "Honest about AI.",
        body: "No income promises. No made-up success stories. An AI twin is always labelled as AI-generated.",
      },
    ],
    offerEyebrow: "For your business",
    offerTitle: "Three ways to learn.",
    offers: [
      {
        title: "AI workshops.",
        body: "Small groups for women who are new to AI. Practise customer emails, captions and offers. Ask questions and work on your own business tasks.",
      },
      {
        title: "Self-paced online courses.",
        body: "Short lessons, starting with the basics. Learn at your pace. Try newsletters, weekly planning and content in your own voice.",
      },
      {
        title: "One-on-one coaching.",
        body: "Personal support for women entrepreneurs who are starting with AI. Bring your questions, your business tasks and your worries about customer data. We take it step by step.",
      },
    ],
    consultingTitle: "Need support with your business workflows?",
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
    heroLead:
      "KI-Basics für Unternehmerinnen und Frauen mit kleinem Business. Du machst fast alles allein. Starte klein und nutze KI in deinem Business, ohne deine Stimme und Menschlichkeit zu verlieren.",
    heroFor: "Für wen",
    forItems: [
      "Unternehmerinnen, die komplette KI-Einsteigerinnen sind",
      "Frauen mit kleinem Business, wenig Zeit und vielen Aufgaben",
      "Frauen in Führungsrollen, die Unterstützung bei Mails, Inhalten und Wochenplanung suchen",
      "Frauen, die Sorge vor roboterhaften Texten oder gefährdeten Kundendaten haben",
    ],
    shopTitle: "Shop.",
    shopParagraphs: [
      "Du kennst dein Business. KI ist nur neu für dich. Hier findest du Unterstützung für deinen Start mit den Basics. Schritt für Schritt.",
      "Leitfäden, Vorlagen und Checklisten für Unternehmerinnen mit kleinem Business. Du brauchst keine technischen Vorkenntnisse.",
      "Es geht um Kundinnenmails, Captions, Angebote, Newsletter und deine Wochenplanung. Auch authentische KI-Fotos für dein Business gehören dazu.",
      "Deine Stimme bleibt deine. Du lernst, KI-Texte zu prüfen und keine Kundendaten in deine Anfragen einzugeben.",
      "Kein Druck, alles auf einmal zu lernen. Starte mit einer Aufgabe, die für dein Business wichtig ist.",
    ],
    shopCta: "Zum Shop",
    productEyebrow: "Neu im Shop",
    productTitle: "99 Prompts für authentische KI-Fotos",
    productBody:
      "Ein PDF mit 99 fertigen Anweisungen für authentische KI-Fotos. Beschreibe dich, wähle eine Szene und passe Licht und Stil an. Kennzeichne deinen KI-Twin immer als KI-generiert.",
    productBullets: [
      "40-seitiges PDF, sofortiger Download",
      "Funktioniert in den meisten KI-Bild-Tools",
      "Private und kommerzielle Nutzung der erstellten Bilder",
    ],
    productCta: "Auf Etsy ansehen",
    productAlt: "99 Prompts für authentische KI-Fotos, digitales PDF-Prompt-Paket vom AI Noob Club",
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
    valuesTitle: "Was uns wichtig ist.",
    values: [
      {
        title: "Verstärken, nicht ersetzen.",
        body: "KI stärkt Menschen, statt sie zu ersetzen. Deine Stimme, dein Urteil und die letzte Entscheidung bleiben bei dir.",
      },
      {
        title: "Respekt gehört dazu.",
        body: "Nicht diskriminierend ist unser Standard. Wir prüfen auf Vorurteile und begegnen Menschen mit Respekt.",
      },
      {
        title: "Grün und bewusst.",
        body: "Nutze KI bewusst. Stelle gezielte Anfragen und vermeide unnötige Generierungen. Manchmal brauchst du gar keine KI.",
      },
      {
        title: "Ehrlich mit KI.",
        body: "Keine Einkommensversprechen. Keine erfundenen Erfolgsgeschichten. Ein KI-Twin wird immer als KI-generiert gekennzeichnet.",
      },
    ],
    offerEyebrow: "Für dein Business",
    offerTitle: "Drei Wege zu lernen.",
    offers: [
      {
        title: "KI-Workshops.",
        body: "Kleine Gruppen für Frauen, die neu bei KI sind. Wir üben Kundinnenmails, Captions und Angebote. Du stellst Fragen und arbeitest an Aufgaben aus deinem Business.",
      },
      {
        title: "Selbstlernkurse online.",
        body: "Kurze Lektionen, beginnend mit den Basics. Du lernst in deinem Tempo. Probiere Newsletter, Wochenplanung und Inhalte in deiner eigenen Stimme aus.",
      },
      {
        title: "Einzelcoaching.",
        body: "Persönliche Unterstützung für Unternehmerinnen beim KI-Einstieg. Bring deine Fragen, deine Aufgaben und deine Sorgen um Kundendaten mit. Wir gehen Schritt für Schritt vor.",
      },
    ],
    consultingTitle: "Du brauchst Unterstützung bei deinen Geschäftsabläufen?",
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
