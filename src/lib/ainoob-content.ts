export type NoobLang = "en" | "de";

type NoobStrings = {
  badge: string; brand: string; tagline: string; heroLead: string; heroFor: string;
  forItems: string[];
  waitlistTitle: string; waitlistLead: string; emailLabel: string; emailPlaceholder: string;
  nameLabel: string; namePlaceholder: string; submit: string; sending: string; success: string;
  error: string; privacy: string;
  valuesEyebrow: string; valuesTitle: string; values: { title: string; body: string }[];
  offerEyebrow: string; offerTitle: string; offers: { title: string; body: string }[];
  consultingTitle: string; consultingBody: string; consultingCta: string;
  footer: string; imprint: string; backHome: string; langLabel: string; langAria: string;
  seoTitle: string; seoDesc: string;
};

export const noobContent: Record<NoobLang, NoobStrings> = {
  en: {
    badge: "A HUMINT initiative",
    brand: "AI Noob Club",
    tagline: "AI for people who feel behind.",
    heroLead:
      "Practical AI for women who run or grow their own business, women creators, and curious beginners of any age. Small steps, plain language, no jargon.",
    heroFor: "Made for",
    forItems: [
      "Women creators and solopreneurs who want AI to support their business without losing their voice",
      "Women running small businesses who want practical time savers, not buzzwords",
      "Total beginners who feel behind and want permission to start small",
      "Adults 45 and up who are curious about AI but cautious",
    ],
    waitlistTitle: "Join the waitlist.",
    waitlistLead:
      "The first course is still being built. Leave your email and you will hear first when workshops and courses open, plus a few useful starter tips in the meantime.",
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
    valuesTitle: "Three rules we do not bend.",
    values: [
      {
        title: "Enhance, never replace.",
        body: "AI supports your business and your work. It never takes your place. If a tool only works by removing the person, it is the wrong tool.",
      },
      {
        title: "Open to everyone.",
        body: "Non-discriminatory by standard, not as a footnote. Age, background, language, or tech confidence are never a reason to be left out.",
      },
      {
        title: "Green and mindful.",
        body: "AI is a tool for the right job, not a habit for its own sake. We teach when to use it and, just as important, when not to.",
      },
    ],
    offerEyebrow: "What is offered",
    offerTitle: "Three ways to learn.",
    offers: [
      {
        title: "AI workshops.",
        body: "Small groups, hands-on, built around the real tasks in your week. You leave with something that works, not with notes.",
      },
      {
        title: "Self-paced online courses.",
        body: "Short lessons on using AI to support and grow a woman-led business. Watch at your pace, apply the same day.",
      },
      {
        title: "One-on-one coaching.",
        body: "For older adults especially. Slower pace, patient, no assumed technical background. We start exactly where you are.",
      },
    ],
    consultingTitle: "Running a company and need a deeper AI strategy?",
    consultingBody:
      "HUMINT works with founders, small teams, and SMEs on AI strategy, workflow audits, and builds.",
    consultingCta: "See HUMINT consulting",
    footer: "AI Noob Club is part of HUMINT. Human intelligence. AI powered.",
    imprint: "Imprint",
    backHome: "HUMINT home",
    langLabel: "DE",
    langAria: "Switch to German",
    seoTitle: "AI Noob Club, friendly AI learning for women in business",
    seoDesc:
      "Workshops, online courses, and patient one-on-one coaching that teach practical AI to women in business, creators, and curious beginners. Join the waitlist.",
  },
  de: {
    badge: "Eine HUMINT Initiative",
    brand: "AI Noob Club",
    tagline: "KI für alle, die sich abgehängt fühlen.",
    heroLead:
      "Praktische KI für Frauen mit eigenem Business, für Creatorinnen und für neugierige Einsteiger jeden Alters. Kleine Schritte, klare Sprache, kein Fachjargon.",
    heroFor: "Für wen",
    forItems: [
      "Creatorinnen und Solo-Unternehmerinnen, die KI nutzen wollen, ohne ihre eigene Stimme zu verlieren",
      "Frauen mit kleinem Unternehmen, die echte Zeitersparnis wollen, keine Buzzwords",
      "Absolute Anfängerinnen und Anfänger, die klein starten möchten",
      "Menschen ab 45, die neugierig auf KI sind, aber vorsichtig",
    ],
    waitlistTitle: "Auf die Warteliste.",
    waitlistLead:
      "Der erste Kurs entsteht gerade. Mit Ihrer E-Mail erfahren Sie zuerst, wann Workshops und Kurse starten, und bekommen bis dahin ein paar hilfreiche Tipps.",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "name@beispiel.de",
    nameLabel: "Vorname",
    namePlaceholder: "Ihr Vorname",
    submit: "Auf die Warteliste",
    sending: "Wird gesendet...",
    success: "Sie sind auf der Liste. Danke, bis bald.",
    error: "Da ist etwas schiefgelaufen. Bitte versuchen Sie es gleich erneut.",
    privacy: "Kein Spam. Jederzeit abmeldbar.",
    valuesEyebrow: "Wofür wir stehen",
    valuesTitle: "Drei Regeln, von denen wir nicht abweichen.",
    values: [
      {
        title: "Verstärken, nicht ersetzen.",
        body: "KI unterstützt Ihr Business und Ihre Arbeit. Sie nimmt niemals Ihren Platz ein. Wenn ein Tool nur funktioniert, indem der Mensch verschwindet, ist es das falsche Tool.",
      },
      {
        title: "Offen für alle.",
        body: "Nicht diskriminierend als Standard, nicht als Fußnote. Alter, Herkunft, Sprache oder technisches Selbstvertrauen sind nie ein Grund, ausgeschlossen zu werden.",
      },
      {
        title: "Grün und bewusst.",
        body: "KI ist ein Werkzeug für die passende Aufgabe, keine Gewohnheit um ihrer selbst willen. Wir zeigen, wann sie sinnvoll ist und wann nicht.",
      },
    ],
    offerEyebrow: "Das Angebot",
    offerTitle: "Drei Wege zu lernen.",
    offers: [
      {
        title: "KI-Workshops.",
        body: "Kleine Gruppen, praktisch, rund um die echten Aufgaben Ihrer Woche. Sie gehen mit etwas Fertigem, nicht mit Notizen.",
      },
      {
        title: "Selbstlernkurse online.",
        body: "Kurze Lektionen dazu, wie KI ein von Frauen geführtes Business unterstützt und wachsen lässt. Im eigenen Tempo, direkt anwendbar.",
      },
      {
        title: "Einzelcoaching.",
        body: "Besonders für ältere Erwachsene. Ruhiges Tempo, geduldig, ohne technische Vorkenntnisse. Wir starten genau dort, wo Sie stehen.",
      },
    ],
    consultingTitle: "Sie führen ein Unternehmen und brauchen eine tiefere KI-Strategie?",
    consultingBody:
      "HUMINT arbeitet mit Gründerinnen, kleinen Teams und KMU an KI-Strategie, Workflow-Audits und Umsetzung.",
    consultingCta: "Zur HUMINT Beratung",
    footer: "AI Noob Club ist Teil von HUMINT. Human intelligence. AI powered.",
    imprint: "Impressum",
    backHome: "Zur HUMINT Startseite",
    langLabel: "EN",
    langAria: "Auf Englisch wechseln",
    seoTitle: "AI Noob Club, KI lernen ohne Angst für Frauen im Business",
    seoDesc:
      "Workshops, Onlinekurse und geduldiges Einzelcoaching für praktische KI: für Frauen im Business, Creatorinnen und neugierige Einsteiger. Jetzt auf die Warteliste.",
  },
};

export type NoobContent = NoobStrings;
