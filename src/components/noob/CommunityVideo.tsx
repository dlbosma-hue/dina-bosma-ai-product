import { useEffect, useState } from "react";
import type { NoobLang } from "@/lib/ainoob-content";
import { communityContent } from "@/lib/community-content";

export function CommunityVideo({ lang }: { lang: NoobLang }) {
  const [failed, setFailed] = useState(false);
  const poster = `/videos/edit-guide-reel-${lang}-poster.jpg`;
  const video = `/videos/edit-guide-reel-${lang}.mp4`;

  useEffect(() => {
    let active = true;
    const image = new Image();
    image.onerror = () => { if (active) setFailed(true); };
    image.src = poster;
    // preload="none" does not fetch the video until play, so check availability without downloading it.
    const abort = new AbortController();
    void fetch(video, { method: "HEAD", signal: abort.signal }).then((res) => {
      if (active && (!res.ok || !res.headers.get("content-type")?.startsWith("video/"))) setFailed(true);
    }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; image.onerror = null; abort.abort(); };
  }, [poster, video]);

  if (failed) return null;
  return (
    <figure className="mx-auto w-full max-w-[20rem]">
      <video controls playsInline preload="none" poster={poster} src={video}
        aria-label={communityContent[lang].videoLabel} onError={() => setFailed(true)}
        className="aspect-[9/16] w-full rounded-3xl bg-noob-navy" />
      <figcaption className="mt-3 text-sm leading-relaxed text-foreground">{communityContent[lang].caption}</figcaption>
    </figure>
  );
}