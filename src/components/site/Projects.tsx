import { useState } from "react";
import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  medium?: string;
  details: {
    what: string;
    how: string;
    outcomes: string;
    learned: string;
  };
};

export function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items as unknown as Project[];
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <ul className="divide-y divide-border border-y border-border">
        {projects.map((p) => (
          <li key={p.title}>
            <button
              type="button"
              onClick={() => setSelected(p)}
              className="group grid w-full gap-2 py-6 text-left transition-colors hover:bg-muted/30 md:grid-cols-12 md:items-baseline md:gap-8 md:py-7"
            >
              <h3 className="font-serif text-[22px] leading-tight md:col-span-5 md:text-[26px]">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6">
                {p.desc}
              </p>
              <span
                aria-hidden
                className="text-sm text-muted-foreground transition-colors group-hover:text-foreground md:col-span-1 md:text-right"
              >
                ↗
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <div className="mb-2 font-mono text-xs text-muted-foreground">
                  /{String(projects.indexOf(selected) + 1).padStart(2, "0")}
                </div>
                <DialogTitle className="font-serif text-[26px] leading-tight">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-[0.18em] text-accent">{t.projects.labels.what}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {selected.details.what}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.18em] text-accent">
                    {t.projects.labels.how}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {selected.details.how}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.18em] text-accent">{t.projects.labels.outcomes}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {selected.details.outcomes}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.18em] text-accent">
                    {t.projects.labels.learned}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {selected.details.learned}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-5">
                {selected.tags.map((tag, idx) => (
                  <span key={tag} className="inline-flex items-center text-xs text-muted-foreground">
                    {idx > 0 && <span className="mr-2 text-border">·</span>}
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground underline-offset-4 hover:underline"
                  >
                    {t.projects.labels.github}
                  </a>
                )}
                {selected.medium && (
                  <a
                    href={selected.medium}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent underline-offset-4 hover:underline"
                  >
                    {t.projects.labels.medium}
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
