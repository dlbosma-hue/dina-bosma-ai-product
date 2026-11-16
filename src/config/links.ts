import editGuideDe from "@/assets/club-import/edit-guide-de.pdf.asset.json";
import editGuideEn from "@/assets/club-import/edit-guide-en.pdf.asset.json";

export const links = {
  instagram: "https://www.instagram.com/ai.noobclub",
  etsy: "https://theainoobclub.etsy.com/listing/4588968808",
  meetup: "https://meetup.com/ai-for-women-berlin-beginner-meetup",
  calendlyStartCheck: "https://calendly.com/dlbosma/1-1-ai-start-check",
  humint: "https://humint.site/",
  impressum: "https://humint.site/impressum",
  datenschutz: "https://humint.site/datenschutz",
} as const;

export const downloads = {
  editGuidePdf: { de: editGuideDe.url, en: editGuideEn.url },
} as const;
