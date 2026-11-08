import { useState } from "react";
import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  medium?: string;
  details: { what: string; how: string; outcomes: string; learned: string };
};

export function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items as unknown as Project[];
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <ul className="grid gap-4">
        {projects.map((p, i) => (
          <li key={p.title}>
            <button type="button" onClick={() => setSelected(p)} className={`retro-card group grid w-full gap-3 p-6 text-left transition-colors duration-200 hover:bg-rose md:grid-cols-12 md:items-center md:p-8 ${i % 2 ? "bg-rose" : "bg-cream"}`}>
              <h3 className="text-3xl md:col-span-5">{p.title}</h3>
              <p className="text-base text-navy md:col-span-6">{p.desc}</p>
              <span aria-hidden className="text-xl text-navy md:col-span-1 md:text-right">↗</span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <div className="retro-pill mb-3">/{String(projects.indexOf(selected) + 1).padStart(2, "0")}</div>
                <DialogTitle className="pr-10 text-3xl">{selected.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-6">
                {([
                  [t.projects.labels.what, selected.details.what],
                  [t.projects.labels.how, selected.details.how],
                  [t.projects.labels.outcomes, selected.details.outcomes],
                  [t.projects.labels.learned, selected.details.learned],
                ] as const).map(([label, body]) => (
                  <div key={label}>
                    <h4 className="text-xl">{label}</h4>
                    <p className="mt-2 text-base text-navy">{body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t-2 border-navy pt-5">
                {selected.tags.map((tag) => <span key={tag} className="retro-pill">{tag}</span>)}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-5 text-base font-semibold">
                {selected.github && <a href={selected.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-link underline">{t.projects.labels.github}</a>}
                {selected.medium && <a href={selected.medium} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-link underline">{t.projects.labels.medium}</a>}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
