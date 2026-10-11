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
    de: { title: "AI Noob Club: KI für Unternehmerinnen", description: "KI-Basics für Unternehmerinnen mit kleinem Business. Starte Schritt für Schritt und behalte deine eigene Stimme." },
    en: { title: "AI Noob Club: AI for women in business", description: "AI basics for women in business who are AI beginners. Start step by step and keep your own voice." },
  },
  starterSet: {
    path: "/ai-noob-club/starter-set",
    type: "product",
    de: { title: "Content-Woche-Assistentin | AI Noob Club", description: "Eine KI-Assistentin für deine Social-Media-Woche. Sie kennt deine Stimme, plant deine Beiträge und schreibt Entwürfe." },
    en: { title: "Content Week Assistant | AI Noob Club", description: "An AI assistant for your social media week. It knows your voice, plans your posts and writes drafts." },
  },
  checklist: {
    path: "/ai-noob-club/checkliste",
    de: { title: "Gratis Content-Woche-Checkliste | AI Noob Club", description: "Eine Seite, mit der du eine ganze Woche Social Media in einem Rutsch planst. Gratis Checkliste." },
    en: { title: "Free Content Week Checklist | AI Noob Club", description: "One page to plan a whole week of social media in one go. Free checklist." },
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
  privacy: {
    path: "/datenschutz",
    de: { title: "Datenschutz | AI Noob Club", description: "Datenschutzerklärung des AI Noob Club von HUMINT." },
    en: { title: "Privacy | AI Noob Club", description: "Privacy policy of the AI Noob Club by HUMINT." },
  },
} satisfies Record<string, NoobMeta>;
