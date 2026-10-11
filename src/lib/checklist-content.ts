import type { NoobLang } from "@/lib/ainoob-content";

export const checklistContent: Record<
  NoobLang,
  { title: string; body: string; cta: string; preview: string; previewAlt: string; benefits: string[]; thanks: string; download: string; downloadLater: string }
> = {
  de: {
    title: "Deine Content-Woche auf einer Seite",
    body: "Eine Seite, die dir zeigt, wie du eine ganze Woche Social Media in einem Rutsch planst. Du kannst sie sofort nutzen, auch ohne KI.",
    cta: "Checkliste schicken",
    preview: "Vorschau folgt",
    previewAlt: "Platzhalter für die Vorschau der einseitigen Checkliste",
    benefits: [
      "Du weißt Sonntagabend, was du diese Woche postest.",
      "Du prüfst jeden Beitrag mit einer festen Liste, statt jedes Mal neu zu überlegen.",
      "Du siehst, an welcher Stelle KI dir helfen kann und wo besser nicht.",
    ],
    thanks: "Danke, du bist dabei.",
    download: "Checkliste herunterladen",
    downloadLater: "Der Download folgt per E-Mail.",
  },
  en: {
    title: "Your content week on one page",
    body: "One page that shows you how to plan a whole week of social media in one go. You can use it right away, even without AI.",
    cta: "Send me the checklist",
    preview: "Preview coming soon",
    previewAlt: "Placeholder for the preview of the one page checklist",
    benefits: [
      "On Sunday evening you know what you'll post this week.",
      "You check every post with a fixed list instead of thinking it through from scratch each time.",
      "You see where AI can help you and where it's better not to use it.",
    ],
    thanks: "Thank you, you're in.",
    download: "Download the checklist",
    downloadLater: "The download will follow by email.",
  },
};
