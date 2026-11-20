import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CalendarCheck } from "lucide-react";
import { downloads, links } from "@/config/links";
import { headFor, useLang, usePageMeta } from "@/club-i18n/lang";
import { Ext } from "@/components/club/Ext";
import { SignupForm } from "@/components/club/Forms";
import { PhotoFrame } from "@/components/club/PhotoFrame";
import { Section, SectionHead } from "@/components/club/Section";
import { FinalCta } from "@/components/club/Blocks";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/ai-noob-club/gratis")({
  head: () => headFor("gratis", "/ai-noob-club/gratis"),
  component: Gratis,
});

function Gratis() {
  const { t, lang } = useLang();
  usePageMeta("gratis");
  const g = t.gratis;
  const pdf = downloads.editGuidePdf[lang];
  const [resource, setResource] = useState<"starterpaket" | "edit-guide">("starterpaket");
  useEffect(() => {
    const selectFromHash = () => {
      if (window.location.hash === "#edit-guide") setResource("edit-guide");
      else if (window.location.hash === "#starterpaket") setResource("starterpaket");
    };
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);
  return (
    <>
      <Section>
        <SectionHead as="h1" eyebrow={g.eyebrow} title={g.h1} />
        <p className="mt-6 max-w-xl text-lg text-ink">{g.text}</p>
        <div id="ki-start-check" className="club-card-brand mt-12 flex scroll-mt-28 flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <PhotoFrame slot="startCheckCover" tilt={-2} className="w-32 shrink-0 sm:w-40" />
          <div className="flex items-start gap-4">
            <CalendarCheck className="mt-1 h-7 w-7 shrink-0 text-navy" strokeWidth={1.5} aria-hidden />
            <div>
              <h2 className="text-2xl text-navy">{g.checkTitle}</h2>
              <p className="mt-2 max-w-xl text-ink">{g.checkText}</p>
            </div>
          </div>
          <Ext href={links.calendlyStartCheck} className="club-btn-primary self-start md:self-auto">{g.checkCta}</Ext>
        </div>
      </Section>

      <Section tone="rosa" id="starterpaket">
        <div className="grid grid-cols-2 items-start gap-5 sm:gap-12">
          <div className="min-w-0">
            <div className="mx-auto mb-8 w-full max-w-xs">
              <PhotoFrame slot="startpaketCover" tilt={-2} aspect="aspect-[4/3]" />
            </div>
            <h2 className="text-3xl text-navy sm:text-4xl">{g.starterTitle}</h2>
            <p className="mt-4 text-lg text-ink">{g.starterText}</p>
          </div>
          <div id="edit-guide" className="min-w-0 scroll-mt-28">
            <div className="mx-auto mb-8 w-full max-w-xs">
              <PhotoFrame slot="editGuideCover" tilt={2} aspect="aspect-[4/3]" />
            </div>
            <h2 className="text-3xl text-navy sm:text-4xl">{g.guideTitle}</h2>
            <p className="mt-4 text-lg text-ink">{g.guideText}</p>
            <Button asChild className="club-btn-primary club-btn-guide-signup mt-6">
              <a href="#guide-signup" onClick={() => setResource("edit-guide")}>{t.form.guideSubmit}</a>
            </Button>
          </div>
        </div>
          <div id="guide-signup" className="mx-auto mt-12 max-w-xl scroll-mt-28 rounded-[24px] border-2 border-navy bg-cream p-6 sm:p-8">
            <SignupForm list={resource} onGuideChange={setResource}
              note={resource === "starterpaket" ? g.starterNote : g.guideNote}
              successText={resource === "starterpaket" ? g.starterSuccess : pdf ? g.guideReady : g.guideSuccess}
              successAction={resource === "edit-guide" && pdf ? <a href={pdf} download className="club-btn-primary self-start">{g.guideDownload}</a> : undefined}
            />
          </div>
      </Section>
      <FinalCta />
    </>
  );
}
