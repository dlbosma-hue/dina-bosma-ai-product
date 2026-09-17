import { useState } from "react";
import type { NoobContent } from "@/lib/ainoob-content";

type Status = "idle" | "sending" | "done" | "error";

export function WaitlistForm({ t }: { t: NoobContent }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "AI Noob Club waitlist");
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/maqkylpb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("bad response");
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-[var(--noob-card)] p-6 text-base text-foreground/85">
        {t.success}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-foreground/70">{t.nameLabel}</span>
          <input
            type="text"
            name="name"
            required
            placeholder={t.namePlaceholder}
            className="w-full rounded-full border border-border/70 bg-background/70 px-5 py-3 text-base outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground/50"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-foreground/70">{t.emailLabel}</span>
          <input
            type="email"
            name="email"
            required
            placeholder={t.emailPlaceholder}
            className="w-full rounded-full border border-border/70 bg-background/70 px-5 py-3 text-base outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground/50"
          />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-[var(--noob-accent)] px-7 py-3 text-base font-semibold text-[var(--noob-accent-fg)] transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? t.sending : t.submit}
        </button>
        <span className="text-sm text-foreground/60">{t.privacy}</span>
      </div>
      {status === "error" && (
        <p className="text-sm text-destructive">{t.error}</p>
      )}
    </form>
  );
}
