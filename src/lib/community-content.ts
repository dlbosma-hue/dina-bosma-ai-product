import videoDeAsset from "@/assets/edit-guide-reel-de.mp4.asset.json";
import videoDePosterAsset from "@/assets/edit-guide-reel-de-poster.jpg.asset.json";
import videoEnAsset from "@/assets/edit-guide-reel-en.mp4.asset.json";
import videoEnPosterAsset from "@/assets/edit-guide-reel-en-poster.jpg.asset.json";

export const communityContent = {
  de: {
    label: "Gründerinnen-Community",
    title: "Komm früh rein.",
    intro: "„Meine Content-Assistentin“ ist ein Selbstlernkurs für Frauen mit kleinem Business. Du baust dir eine KI-Assistentin, die deine Stimme und deinen Look kennt. Wer früh dabei ist, zahlt weniger.",
    courseLink: "Mehr zum Kurs",
    cards: [
      {
        id: "beta",
        tag: "Runde 1, nur 10 Plätze",
        title: "Beta-Community",
        body: "Du testest den Kurs, bevor er startet. Du sagst mir ehrlich, was klappt und was nicht. Dafür bekommst du den günstigsten Preis. Ich nenne ihn dir, bevor du entscheidest.",
        bullets: ["Zugang vor allen anderen", "Direkter Draht zu mir", "Du prägst den Kurs mit"],
        button: "Beta-Platz anfragen",
        note: "Ich vergebe die Plätze persönlich und melde mich bei dir.",
      },
      {
        id: "frueh",
        tag: "Runde 2, Frühzugang",
        title: "Frühe Warteliste",
        body: "Du bist vor dem öffentlichen Start dabei und zahlst den halben Preis. Ich nenne ihn dir, bevor du entscheidest.",
        bullets: ["Halber Preis beim Start", "Du erfährst als Erste, wann es losgeht", "Kein Kaufzwang"],
        button: "Auf die Warteliste",
      },
    ],
    buildTitle: "Was du in „Meine Content-Assistentin“ baust",
    buildItems: [
      { title: "Deine Stimm-Bibliothek:", body: "echte Sätze, Lieblingswörter, Geschichten." },
      { title: "Dein Stimmprofil und Regelbuch:", body: "wie du klingst und was nie in deinen Text kommt." },
      { title: "Deine Look-Karte:", body: "drei Farben, eine Schrift, eine Bildregel." },
      { title: "Deine Assistentin:", body: "ein Projekt in ChatGPT oder Claude. Du brauchst keinen Code." },
      { title: "Dein Wochen-Ritual:", body: "30 Minuten pro Woche mit Prüfliste." },
    ],
    buildNote: "Kein Prompt-Wissen nötig. Nach dem Setup kennt deine Assistentin deine Regeln. Etwa 5 Stunden zum Einrichten, danach 30 Minuten pro Woche.",
    buildClosing: "Klingt nach dir. Sieht aus wie du.",
    freeLabel: "Gratis",
    guideTitle: "Edit-Guide: Reels schneiden mit Claude",
    guideBody: "Der Guide zeigt dir, wie du deine Reels mit Claude schneidest. Kostenlos, als PDF.",
    guideCta: "PDF öffnen",
    caption: "Ein kurzer Einblick in den Edit-Guide.",
    videoLabel: "Edit-Guide: Reels schneiden mit Claude",
    smallPrint: "Ich verspreche keine Einnahmen und keine Reichweite. Du bekommst einen klaren Ablauf und entscheidest am Ende selbst. Du kannst dich jederzeit austragen.",
    privacy: "Datenschutz",
  },
  en: {
    label: "Founders' Community",
    title: "Come in early.",
    intro: "My Content Assistant is a self-paced course for women with small businesses. You'll build an AI assistant that knows your voice and your look. If you join early, you pay less.",
    courseLink: "More about the course",
    cards: [
      {
        id: "beta",
        tag: "Round 1, only 10 spots",
        title: "Beta Community",
        body: "You test the course before it launches. You tell me honestly what works and what doesn't. In return, you get the lowest price. I'll tell you what it is before you decide.",
        bullets: ["Access before everyone else", "A direct line to me", "You help shape the course"],
        button: "Request a beta spot",
        note: "I allocate the spots personally and get back to you.",
      },
      {
        id: "frueh",
        tag: "Round 2, early access",
        title: "Early waitlist",
        body: "You join before the public launch and pay half the price. I'll tell you what it is before you decide.",
        bullets: ["Half price at launch", "You're the first to know when it starts", "No obligation to buy"],
        button: "Join the waitlist",
      },
    ],
    buildTitle: "What you build in My Content Assistant",
    buildItems: [
      { title: "Your voice library:", body: "real sentences, favourite words and stories." },
      { title: "Your voice profile and rulebook:", body: "how you sound and what never goes into your copy." },
      { title: "Your look card:", body: "three colours, one font and one image rule." },
      { title: "Your assistant:", body: "a project in ChatGPT or Claude. You don't need any code." },
      { title: "Your weekly ritual:", body: "30 minutes a week with a checklist." },
    ],
    buildNote: "No prompt knowledge needed. After setup, your assistant knows your rules. Allow about 5 hours to set it up, then 30 minutes a week.",
    buildClosing: "Sounds like you. Looks like you.",
    freeLabel: "Free",
    guideTitle: "Edit Guide: cutting Reels with Claude",
    guideBody: "The guide shows you how to cut your Reels with Claude. Free, as a PDF.",
    guideCta: "Open the PDF",
    caption: "A short preview of the Edit Guide.",
    videoLabel: "Edit Guide: cutting Reels with Claude",
    smallPrint: "I don't promise income or reach. You get a clear process and make your own decision at the end. You can opt out at any time.",
    privacy: "Privacy policy",
  },
} as const;

const siteUrl = "https://humint.site";

const videoSchema = (
  name: string,
  description: string,
  poster: string,
  video: string,
) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name,
  description,
  thumbnailUrl: `${siteUrl}${poster}`,
  contentUrl: `${siteUrl}${video}`,
  uploadDate: "2026-10-21",
  duration: "PT44S",
});

export const communityVideoSchema = [
  videoSchema(
    "Edit-Guide: Reels schneiden mit Claude",
    communityContent.de.caption,
    videoDePosterAsset.url,
    videoDeAsset.url,
  ),
  videoSchema(
    "Edit Guide: Cutting Reels with Claude",
    communityContent.en.caption,
    videoEnPosterAsset.url,
    videoEnAsset.url,
  ),
];
