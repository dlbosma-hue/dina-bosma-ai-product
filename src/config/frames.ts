import oval from "@/assets/club-import/oval-frame-fitted.png.asset.json";
import portrait from "@/assets/club-import/portrait-frame-fitted.png.asset.json";
import tall from "@/assets/club-import/tall-frame-fitted.png.asset.json";
import type { Lang } from "@/club-i18n/strings";
import type { PhotoSlot } from "./photos";

const full = { left: "0%", top: "0%", width: "100%", height: "100%" };

const frames = {
  oval: { src: oval.url, ratio: "689 / 955", opening: { left: "18.72%", top: "19.44%", width: "62.41%", height: "62.16%", borderRadius: "50%" } },
  portrait: { src: portrait.url, ratio: "644 / 882", opening: { left: "19.10%", top: "15.87%", width: "62.11%", height: "63.95%" } },
  tall: { src: tall.url, ratio: "923 / 1217", opening: { left: "19.18%", top: "15.62%", width: "62.19%", height: "68.11%" } },
  // Artwork that already contains its own frame is shown as-is, without an overlay frame.
  none: { src: null, ratio: "994 / 1278", opening: full },
  noneEn: { src: null, ratio: "1025 / 1480", opening: full },
  nonePortrait: { src: null, ratio: "1075 / 1431", opening: full },
  noneCat: { src: null, ratio: "1157 / 1344", opening: full },
  noneHands: { src: null, ratio: "1121 / 1376", opening: full },
  noneStartCheck: { src: null, ratio: "1058 / 1409", opening: full },
  noneMeetup: { src: null, ratio: "1121 / 1376", opening: full },
  noneWorkshop: { src: null, ratio: "1044 / 1448", opening: full },
  nonePromptPack: { src: null, ratio: "1122 / 1402", opening: full },
  noneContentDe: { src: null, ratio: "1116 / 1378", opening: full },
  noneContentEn: { src: null, ratio: "1079 / 1364", opening: full },
};

export function frameFor(slot: PhotoSlot, lang: Lang = "de") {
  if (slot === "startpaketCover") return lang === "en" ? frames.noneEn : frames.none;
  if (slot === "aboutPortrait") return frames.nonePortrait;
  if (slot === "aboutDetail") return frames.noneCat;
  if (slot === "communityHero") return frames.noneHands;
  if (slot === "startCheckCover") return frames.noneStartCheck;
  if (slot === "meetupPhoto") return frames.noneMeetup;
  if (slot === "workshopPhoto") return frames.noneWorkshop;
  if (slot === "promptPackCover") return frames.nonePromptPack;
  if (slot === "contentAssistentinCover") return lang === "en" ? frames.noneContentEn : frames.noneContentDe;
  if (slot === "editGuideCover" || slot === "heroSecondary") return frames.portrait;
  return frames.oval;
}
