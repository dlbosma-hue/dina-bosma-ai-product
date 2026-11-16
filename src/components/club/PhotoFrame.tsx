import { useEffect, useRef, useState } from "react";
import { ImageIcon, Play } from "lucide-react";
import { photos, videoPosters, type PhotoSlot } from "@/config/photos";
import { Button } from "@/components/ui/button";
import { useLang } from "@/club-i18n/lang";
import { frameFor } from "@/config/frames";

type Props = { slot: PhotoSlot; tilt?: number; className?: string; aspect?: string };

function usePhoto(slot: PhotoSlot) {
  const { lang } = useLang();
  const photo = photos[slot];
  const src = typeof photo === "string" ? photo : photo[lang];
  const ref = useRef<HTMLImageElement>(null);
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) setOk(true);
  }, [src]);
  return { src, ref, ok, setOk };
}

/** Tilted photo with cream border. Shows a calm placeholder until the image file exists. */
export function PhotoFrame({ slot, tilt = 2, className = "" }: Props) {
  const { t, lang } = useLang();
  const { src, ref, ok, setOk } = usePhoto(slot);
  const caption = t.photo[slot];
  const frame = frameFor(slot, lang);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  return (
    <figure
      className={`relative w-full ${className}`}
      style={{ transform: `rotate(${tilt}deg)`, aspectRatio: frame.ratio }}
    >
      {frame.src != null && (
        <img src={frame.src} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-contain" />
      )}
      <div className={`absolute overflow-hidden ${frame.src ? "bg-cream" : ""}`} style={frame.opening}>
        {slot === "editGuideCover" ? (
          <video
            ref={videoRef}
            src={src}
            poster={videoPosters.editGuideCover}
            controls
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            aria-label={caption}
            className="h-full w-full object-contain"
          />
        ) : (
        <img
          ref={ref}
          src={src}
          alt={caption}
          onLoad={() => setOk(true)}
          onError={() => setOk(false)}
          className={`h-full w-full object-contain ${ok ? "" : "invisible absolute inset-0"}`}
        />
        )}
        {slot === "editGuideCover" && !playing && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label={t.photo.playVideo}
              title={t.photo.playVideo}
              className="pointer-events-auto h-14 w-14 rounded-full border-2 border-navy bg-terra text-navy hover:bg-rosa focus-visible:ring-2 focus-visible:ring-terra [&_svg]:size-7"
              onClick={() => { void videoRef.current?.play().catch(() => setPlaying(false)); }}
            >
              <Play aria-hidden />
            </Button>
          </div>
        )}
        {slot !== "editGuideCover" && !ok && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center text-navy">
            <ImageIcon className="h-7 w-7 text-terra" strokeWidth={1.5} aria-hidden />
            <p className="max-w-[24ch] text-sm leading-snug text-navy">{caption}</p>
            <p className="club-eyebrow text-[0.65rem]">{t.photo.placeholderNote}</p>
          </div>
        )}
      </div>
    </figure>
  );
}

/** Small round portrait with a Leicht Rosa halo ring. */
export function RoundPortrait({ slot = "heroPortrait", size = 120 }: { slot?: PhotoSlot; size?: number }) {
  const { t } = useLang();
  const { src, ref, ok, setOk } = usePhoto(slot);
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full bg-rosa ring-8 ring-rosa"
      style={{ width: size, height: size }}
    >
      <img
        ref={ref}
        src={src}
        alt={t.photo[slot]}
        onLoad={() => setOk(true)}
        onError={() => setOk(false)}
        className={`h-full w-full object-cover ${ok ? "" : "invisible"}`}
      />
      {!ok && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="h-6 w-6 text-terra" strokeWidth={1.5} aria-hidden />
        </div>
      )}
    </div>
  );
}
