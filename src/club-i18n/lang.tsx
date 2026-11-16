import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Dict, type Lang } from "./strings";

const KEY = "ainoob-lang";
type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "de", t: dict.de, setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      if (saved === "de" || saved === "en") setLangState(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(KEY, l);
    } catch {
      /* storage unavailable */
    }
  };

  return <LangContext.Provider value={{ lang, t: dict[lang], setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

type MetaKey = keyof Dict["meta"];

/** Keeps title and description in the active language after the toggle. */
export function usePageMeta(key: MetaKey) {
  const { t } = useLang();
  const m = t.meta[key];
  useEffect(() => {
    document.title = m.title;
    const set = (sel: string, val: string) => document.querySelector(sel)?.setAttribute("content", val);
    set('meta[name="description"]', m.description);
    set('meta[property="og:title"]', m.title);
    set('meta[property="og:description"]', m.description);
  }, [m.title, m.description]);
}

/** Static head() for SSR, German default. */
export function headFor(key: MetaKey, path: string) {
  const m = dict.de.meta[key];
  return {
    meta: [
      { title: m.title },
      { name: "description", content: m.description },
      { property: "og:title", content: m.title },
      { property: "og:description", content: m.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://humint.site${path}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `https://humint.site${path}` }],
  };
}
