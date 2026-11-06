import type { NoobLang } from "@/lib/ainoob-content";

export const checklistContent: Record<
  NoobLang,
  { title: string; body: string; cta: string; preview: string; previewAlt: string; benefits: string[]; thanks: string; download: string; downloadLater: string }
> = {
  de: {
    title: "Content-Wochenplan",
    body: "Dein Content-Wochenplan zeigt dir, wie du eine ganze Woche Social Media in einem Rutsch planst. Du kannst ihn sofort nutzen, auch ohne KI.",
    cta: "Starterpaket holen",
    preview: "Vorschau folgt",
    previewAlt: "Platzhalter für die Vorschau des Content-Wochenplans",
    benefits: [
      "Du weißt Sonntagabend, was du diese Woche postest.",
      "Du prüfst jeden Beitrag mit einer festen Liste, statt jedes Mal neu zu überlegen.",
      "Du siehst, an welcher Stelle KI dir helfen kann und wo besser nicht.",
    ],
    thanks: "Danke, du bist dabei.",
    download: "Content-Wochenplan herunterladen",
    downloadLater: "Der Download folgt per E-Mail.",
  },
  en: {
    title: "Weekly Content Plan",
    body: "A Weekly Content Plan that shows you how to plan a whole week of social media in one go. You can use it right away, even without AI.",
    cta: "Get the starter pack",
    preview: "Preview coming soon",
    previewAlt: "Placeholder for the preview of the Weekly Content Plan",
    benefits: [
      "On Sunday evening you know what you'll post this week.",
      "You check every post with a fixed list instead of thinking it through from scratch each time.",
      "You see where AI can help you and where it's better not to use it.",
    ],
    thanks: "Thank you, you're in.",
    download: "Download the Weekly Content Plan",
    downloadLater: "The download will follow by email.",
  },
};
