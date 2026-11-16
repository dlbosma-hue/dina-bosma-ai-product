import { Link } from "@tanstack/react-router";
import { Heart, Leaf, Users, BadgeCheck } from "lucide-react";
import { useLang } from "@/club-i18n/lang";
import type { PhotoSlot } from "@/config/photos";
import { PhotoFrame } from "./PhotoFrame";
import { Rich } from "./Rich";
import { Section } from "./Section";

const icons = [Heart, Users, Leaf, BadgeCheck];

export function ValueCards() {
  const { t } = useLang();
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {t.values.map((v, i) => {
        const Icon = icons[i] ?? Heart;
        return (
          <div key={v.title} className="club-card-brand text-left">
            <Icon className="mb-4 h-6 w-6 text-navy" strokeWidth={1.5} aria-hidden />
            <h3 className="mb-2 text-xl text-navy">{v.title}</h3>
            <p className="text-ink">{v.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export function FinalCta({ photoSlot }: { photoSlot?: PhotoSlot } = {}) {
  const { t } = useLang();
  return (
    <Section tone="rosa">
      <div className="flex flex-col items-center text-center">
        {photoSlot && (
          <div className="mb-10 w-full max-w-xs">
            <PhotoFrame slot={photoSlot} tilt={-2} />
          </div>
        )}
        <span className="club-rule-accent mb-6" aria-hidden />
        <h2 className="text-4xl text-navy sm:text-5xl md:text-6xl">
          <Rich text={t.finalCta.h2} />
        </h2>
        <p className="mt-5 max-w-xl text-lg text-ink">{t.finalCta.text}</p>
        <Link to="/ai-noob-club/community" className="club-btn-primary mt-8">
          {t.finalCta.cta}
        </Link>
      </div>
    </Section>
  );
}
