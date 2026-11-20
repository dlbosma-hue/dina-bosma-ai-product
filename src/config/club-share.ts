import shareAsset from "@/assets/ai-noob-club-share-2026.jpg.asset.json";

/** Language-neutral Club wordmark and the existing Dina portrait, sized for sharing. */
export const clubShareMeta = [
  { property: "og:image", content: `https://humint.site${shareAsset.url}` },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:alt", content: "AI Noob Club" },
  { name: "twitter:image", content: `https://humint.site${shareAsset.url}` },
  { name: "twitter:image:alt", content: "AI Noob Club" },
];