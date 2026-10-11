import type { NoobLang } from "@/lib/ainoob-content";

export const checklistContent: Record<
  NoobLang,
  { title: string; body: string; cta: string; preview: string; previewAlt: string; benefits: string[]; thanks: string; download: string; downloadLater: string }
> = {
  de: {
    title: "Wochen-Spickzettel",
    body: "Dein Spickzettel zeigt dir, wie du eine ganze Woche Social Media in einem Rutsch planst. Du kannst ihn sofort nutzen, auch ohne KI.",
    cta: "Spickzettel holen",
    preview: "Vorschau folgt",
    previewAlt: "Platzhalter für die Vorschau des Wochen-Spickzettels",
    benefits: [
      "Du weißt Sonntagabend, was du diese Woche postest.",
      "Du prüfst jeden Beitrag mit einer festen Liste, statt jedes Mal neu zu überlegen.",
      "Du siehst, an welcher Stelle KI dir helfen kann und wo besser nicht.",
    ],
    thanks: "Danke, du bist dabei.",
    download: "Spickzettel herunterladen",
    downloadLater: "Der Download folgt per E-Mail.",
  },
  en: {
    title: "Weekly Cheat Sheet",
    body: "A cheat sheet that shows you how to plan a whole week of social media in one go. You can use it right away, even without AI.",
    cta: "Get the cheat sheet",
    preview: "Preview coming soon",
    previewAlt: "Placeholder for the preview of the weekly cheat sheet",
    benefits: [
      "On Sunday evening you know what you'll post this week.",
      "You check every post with a fixed list instead of thinking it through from scratch each time.",
      "You see where AI can help you and where it's better not to use it.",
    ],
    thanks: "Thank you, you're in.",
    download: "Download the cheat sheet",
    downloadLater: "The download will follow by email.",
  },
};
