import starterGerman from "@/assets/club-import/starter-kit-german-framed.png.asset.json";
import starterEnglish from "@/assets/club-import/starter-kit-english-framed.png.asset.json";
import editGuideVideo from "@/assets/club-import/edit-guide-preview.mp4.asset.json";
import editGuidePoster from "@/assets/club-import/edit-guide-poster.jpg.asset.json";
import workplace from "@/assets/club-import/dina-photo-6042.jpeg.asset.json";
import portrait from "@/assets/club-import/dina-photo-8246.jpeg.asset.json";
import aboutPortraitFramed from "@/assets/club-import/about-portrait-framed-v2.png.asset.json";
import aboutCatFramed from "@/assets/club-import/about-cat-framed-v3.png.asset.json";
import communityHands from "@/assets/club-import/community-hands-framed.png.asset.json";
import kiStartCheck from "@/assets/club-import/ki-start-check-framed.png.asset.json";
import meetupHands from "@/assets/club-import/meetup-hands-framed.png.asset.json";
import workshopSpace from "@/assets/club-import/workshop-space-framed.png.asset.json";
import promptPackGerman from "@/assets/club-import/prompt-pack-german-framed.png.asset.json";
import promptPackEnglish from "@/assets/club-import/prompt-pack-english-framed.png.asset.json";
import contentGerman from "@/assets/club-import/content-assistant-german-v2.png.asset.json";
import contentEnglish from "@/assets/club-import/content-assistant-english-v2.png.asset.json";

// Drop image files into public/photos with these names to replace the remaining placeholders.
export const photos = {
  heroPortrait: portrait.url,
  heroSecondary: workplace.url,
  aboutPortrait: aboutPortraitFramed.url,
  aboutDetail: aboutCatFramed.url,
  communityHero: communityHands.url,
  promptPackCover: { de: promptPackGerman.url, en: promptPackEnglish.url },
  contentAssistentinCover: { de: contentGerman.url, en: contentEnglish.url },
  startpaketCover: { de: starterGerman.url, en: starterEnglish.url },
  startCheckCover: kiStartCheck.url,
  editGuideCover: editGuideVideo.url,
  meetupPhoto: meetupHands.url,
  workshopPhoto: workshopSpace.url,
  // Optional round badge logo shown next to the wordmark. Leave null to hide it.
  badgeLogo: null as string | null,
} as const;

export type PhotoSlot = Exclude<keyof typeof photos, "badgeLogo">;

export const videoPosters = { editGuideCover: editGuidePoster.url } as const;
