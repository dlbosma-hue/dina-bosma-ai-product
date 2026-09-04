import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function AnnouncementBar() {
  const { t } = useLanguage();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="border-b border-border bg-secondary text-secondary-foreground"
      role="banner"
      aria-label={t.announcement.ariaLabel}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-2.5 md:px-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm leading-snug">
          <span>{t.announcement.text}</span>
          <a
            href={t.announcement.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center border border-foreground/60 px-3 py-1 text-xs uppercase tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background"
          >
            {t.announcement.cta}
          </a>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label={t.announcement.closeAria}
          className="ml-2 shrink-0 p-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
