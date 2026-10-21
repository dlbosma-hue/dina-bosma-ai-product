import { useEffect, useState } from "react";
import type { NoobLang } from "@/lib/ainoob-content";
import { communityContent } from "@/lib/community-content";
import videoDeAsset from "@/assets/edit-guide-reel-de.mp4.asset.json";
import posterDeAsset from "@/assets/edit-guide-reel-de-poster.jpg.asset.json";
import videoEnAsset from "@/assets/edit-guide-reel-en.mp4.asset.json";
import posterEnAsset from "@/assets/edit-guide-reel-en-poster.jpg.asset.json";

// Each language has its own reel. A language with no entry here, or a file that stops
// resolving, never leaves a broken player on the page.
const clubVideo: Partial<Record<NoobLang, { poster: string; video: string }>> = {
  de: { poster: posterDeAsset.url, video: videoDeAsset.url },
  en: { poster: posterEnAsset.url, video: videoEnAsset.url },
};

export function CommunityVideo({ lang }: { lang: NoobLang }) {
  const [failed, setFailed] = useState(false);
  const src = clubVideo[lang];

  useEffect(() => {
    if (!src) return;
    let active = true;
    const image = new Image();
    image.onerror = () => { if (active) setFailed(true); };
    image.src = src.poster;
    // preload="none" does not fetch the video until play, so check availability without downloading it.
    const abort = new AbortController();
    void fetch(src.video, { method: "HEAD", signal: abort.signal }).then((res) => {
      if (active && (!res.ok || !res.headers.get("content-type")?.startsWith("video/"))) setFailed(true);
    }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; image.onerror = null; abort.abort(); };
  }, [src]);

  if (!src || failed) return null;
  return (
    <figure className="mx-auto w-full max-w-[20rem]">
      <video controls playsInline preload="none" poster={src.poster} src={src.video}
        aria-label={communityContent[lang].videoLabel} onError={() => setFailed(true)}
        className="aspect-[9/16] w-full rounded-3xl bg-noob-rosa" />
      <figcaption className="mt-3 text-sm leading-relaxed text-foreground">{communityContent[lang].caption}</figcaption>
    </figure>
  );
}
