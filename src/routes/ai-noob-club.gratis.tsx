import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";
import { downloads, links } from "@/config/links";
import { headFor, useLang, usePageMeta } from "@/club-i18n/lang";
import { Ext } from "@/components/club/Ext";
import { SignupForm } from "@/components/club/Forms";
import { PhotoFrame } from "@/components/club/PhotoFrame";
import { Section, SectionHead } from "@/components/club/Section";
import { FinalCta } from "@/components/club/Blocks";

export const Route = createFileRoute("/ai-noob-club/gratis")({
  head: () => headFor("gratis", "/ai-noob-club/gratis"),
  component: Gratis,
});

function Gratis() {
  const { t, lang } = useLang();
  usePageMeta("gratis");
  const g = t.gratis;
  const pdf = downloads.editGuidePdf[lang];
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
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl text-navy sm:text-4xl">{g.starterTitle}</h2>
            <p className="mt-4 text-lg text-ink">{g.starterText}</p>
            <div className="mt-8 w-full max-w-xs">
              <PhotoFrame slot="startpaketCover" tilt={-2} aspect="aspect-[4/3]" />
            </div>
          </div>
          <div className="rounded-[24px] border-2 border-navy bg-cream p-6 sm:p-8">
            <SignupForm list="starterpaket" note={g.starterNote} successText={g.starterSuccess} />
          </div>
        </div>
      </Section>

      <Section id="edit-guide">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl text-navy sm:text-4xl">{g.guideTitle}</h2>
            <p className="mt-4 text-lg text-ink">{g.guideText}</p>
            <div className="mt-8 w-full max-w-xs">
              <PhotoFrame slot="editGuideCover" tilt={2} aspect="aspect-[4/3]" />
            </div>
          </div>
          <div className="rounded-[24px] border-2 border-navy bg-cream p-6 sm:p-8">
            <SignupForm
              list="edit-guide"
              note={g.guideNote}
              successText={pdf ? g.guideReady : g.guideSuccess}
              successAction={
                pdf ? (
                  <a href={pdf} download className="club-btn-primary self-start">
                    {g.guideDownload}
                  </a>
                ) : undefined
              }
            />
          </div>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
