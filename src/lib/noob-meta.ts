import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

const BASE = "https://humint.site";
export const NOOB_LOGO_SHARE = `${BASE}/og-ainoob-club.jpg`;

export type NoobMeta = {
  path: string;
  de: { title: string; description: string };
  en: { title: string; description: string };
  image?: string;
  noindex?: boolean;
  type?: string;
};

/** Server-rendered head tags (German, the default language). */
export function noobHead(m: NoobMeta) {
  const image = m.image ?? NOOB_LOGO_SHARE;
  const url = `${BASE}${m.path}`;
  return {
    meta: [
      { title: m.de.title },
      { name: "description", content: m.de.description },
      { property: "og:title", content: m.de.title },
      { property: "og:description", content: m.de.description },
      { property: "og:type", content: m.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "de_DE" },
      { property: "og:locale:alternate", content: "en_GB" },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: m.de.title },
      { name: "twitter:description", content: m.de.description },
      { name: "twitter:image", content: image },
      ...(m.noindex ? [{ name: "robots", content: "noindex" }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** Swaps title and description to the active language in the browser. */
export function useNoobMeta(m: NoobMeta) {
  const { lang } = useLanguage();
  useEffect(() => {
    const v = m[lang];
    document.title = v.title;
    document.documentElement.lang = lang;
    const set = (sel: string, val: string) => document.querySelector(sel)?.setAttribute("content", val);
    set('meta[name="description"]', v.description);
    set('meta[property="og:title"]', v.title);
    set('meta[property="og:description"]', v.description);
    set('meta[name="twitter:title"]', v.title);
    set('meta[name="twitter:description"]', v.description);
  }, [lang, m]);
}

export const noobMeta = {
  home: {
    path: "/ai-noob-club",
    image: `${BASE}/__l5e/assets-v1/705bb551-e3d7-4189-88a2-1beda7e2b627/ai-noob-club-preview.jpg`,
    de: { title: "AI Noob Club: KI für Frauen mit eigenem Business", description: "KI-Basics für Frauen, die ihr eigenes Business führen. Starte Schritt für Schritt und behalte deine eigene Stimme. Meetups und Workshops in Berlin und online." },
    en: { title: "AI Noob Club: AI for women who run their own business", description: "AI basics for women who run their own business, even if you're starting from zero. Learn step by step and keep your own voice. Meetups and workshops in Berlin and online." },
  },
  checklist: {
    path: "/ai-noob-club/checkliste",
    de: { title: "Content-Wochenplan | AI Noob Club", description: "Der Content-Wochenplan: eine ganze Woche Social Media in einem Rutsch planen. Gratis." },
    en: { title: "Weekly Content Plan | AI Noob Club", description: "A Weekly Content Plan to plan a whole week of social media in one go. Free." },
  },
  thanks: {
    path: "/ai-noob-club/danke",
    noindex: true,
    de: { title: "Danke | AI Noob Club", description: "Danke, du bist dabei im AI Noob Club." },
    en: { title: "Thank you | AI Noob Club", description: "Thank you, you're in the AI Noob Club." },
  },
  widerruf: {
    path: "/ai-noob-club/widerruf",
    noindex: true,
    de: { title: "Widerruf und Stornierung | AI Noob Club", description: "Widerruf und Stornierung im AI Noob Club von HUMINT." },
    en: { title: "Withdrawal and cancellation | AI Noob Club", description: "Withdrawal and cancellation at the AI Noob Club by HUMINT." },
  },
  bio: {
    path: "/ai-noob-club/links",
    noindex: true,
    de: { title: "Link in Bio | AI Noob Club", description: "Die wichtigsten Links vom AI Noob Club: Gründerinnen-Community, Gratis-Starter-Kit, KI-Foto-Prompts, Treffen in Berlin und Workshops." },
    en: { title: "Link in bio | AI Noob Club", description: "The most important links from the AI Noob Club: Founders' Community, free starter kit, AI photo prompts, Berlin meetups and workshops." },
  },
  privacy: {
    path: "/datenschutz",
    de: { title: "Datenschutz | AI Noob Club", description: "Datenschutzerklärung des AI Noob Club von HUMINT." },
    en: { title: "Privacy | AI Noob Club", description: "Privacy policy of the AI Noob Club by HUMINT." },
  },
} satisfies Record<string, NoobMeta>;
