import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { links } from "@/config/links";
import { useLang } from "@/club-i18n/lang";
import { Section } from "@/components/club/Section";
import { Ext } from "@/components/club/Ext";

const utm = (c: string) => `?utm_source=ig&utm_medium=social&utm_content=${c}`;

const copy = {
  de: {
    title: "Alle Links auf einen Blick",
    intro: "Der AI Noob Club ist für Frauen mit eigenem Business, die neu bei KI sind. Hier sind die wichtigsten Links.",
    ext: "Öffnet eine neue Seite",
    items: {
      startcheck: ["Kostenloses 1:1: KI-Start-Check", "In 20 Minuten finden wir drei einfache KI-Ideen für deinen Arbeitsalltag."],
      course: ["Kurs: Meine Content-Assistentin", "Alles zum Kurs und Platz sichern."],
      starter: ["Gratis Starterpaket", "KI-Basics und Wochenplan, gratis per E-Mail."],
      guide: ["Gratis: Edit-Guide Reels schneiden mit Claude", "Kostenloser PDF-Guide."],
      prompts: ["99 Prompts für authentische KI-Fotos", "PDF zum Sofort-Download auf Etsy."],
      meetup: ["Treffen in Berlin und online", "Eine Stunde, ohne Vorwissen. Anmeldung auf Meetup."],
      workshop: ["Workshop anfragen", "Für Gruppen und kleine Teams. Schreib mir."],
      instagram: ["Instagram", "@ai.noobclub"],
    },
  },
  en: {
    title: "All the links in one place",
    intro: "AI Noob Club is for women in business who are new to AI. Here are the most important links.",
    ext: "Opens a new page",
    items: {
      startcheck: ["Free 1:1: AI Start Check", "In 20 minutes, we find three simple AI ideas for your working day."],
      course: ["Course: My Content Assistant", "Everything about the course and how to join."],
      starter: ["Free starter pack", "AI basics and a weekly plan, free by email."],
      guide: ["Free: Edit Guide for cutting Reels with Claude", "Free PDF guide."],
      prompts: ["99 prompts for authentic AI photos", "Instant PDF download on Etsy."],
      meetup: ["Meetups in Berlin and online", "One hour, no prior knowledge. Sign up on Meetup."],
      workshop: ["Ask about a workshop", "For groups and small teams. Write to me."],
      instagram: ["Instagram", "@ai.noobclub"],
    },
  },
} as const;

export const Route = createFileRoute("/ai-noob-club/links")({
  head: () => ({
    meta: [
      { title: "AI Noob Club: Alle Links" },
      { name: "description", content: copy.de.intro },
      { property: "og:title", content: "AI Noob Club: Alle Links" },
      { property: "og:description", content: copy.de.intro },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LinksPage,
});

function LinksPage() {
  const { lang } = useLang();
  const c = copy[lang];
  useEffect(() => { document.title = lang === "de" ? "AI Noob Club: Alle Links" : "AI Noob Club: All links"; }, [lang]);
  const card = "club-card-brand block w-full text-left transition-transform hover:-translate-y-0.5";
  const Body = ({ k, ext }: { k: keyof typeof c.items; ext?: boolean }) => (
    <>
      <span className="block text-xl text-navy">{c.items[k][0]}</span>
      <span className="mt-1 block text-ink">{c.items[k][1]}</span>
      {ext && <span className="sr-only"> ({c.ext})</span>}
    </>
  );
  return (
    <Section>
      <div className="mx-auto max-w-xl">
        <h1 className="text-center text-3xl text-navy sm:text-4xl">{c.title}</h1>
        <p className="mt-4 text-center text-ink">{c.intro}</p>
        <ul className="mt-8 flex flex-col gap-4">
          <li><Ext href={links.calendlyStartCheck} className={card}><Body k="startcheck" ext /></Ext></li>
          <li><a href={`/ai-noob-club/content-assistentin${utm("bio_kurs")}`} className={card}><Body k="course" /></a></li>
          <li><a href={`/ai-noob-club/gratis${utm("bio_starterpaket")}#starterpaket`} className={card}><Body k="starter" /></a></li>
          <li><a href={`/ai-noob-club/gratis${utm("bio_editguide")}#edit-guide`} className={card}><Body k="guide" /></a></li>
          <li><Ext href={links.etsy} className={card}><Body k="prompts" ext /></Ext></li>
          <li><Ext href={links.meetup} className={card}><Body k="meetup" ext /></Ext></li>
          <li><Link to="/ai-noob-club/kontakt" className={card}><Body k="workshop" /></Link></li>
          <li><Ext href={links.instagram} className={card}><Body k="instagram" ext /></Ext></li>
        </ul>
      </div>
    </Section>
  );
}
