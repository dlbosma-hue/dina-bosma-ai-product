import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";
import findIcon from "@/assets/work-find.png.asset.json";
import decideIcon from "@/assets/work-decide.png.asset.json";
import buildIcon from "@/assets/work-build.png.asset.json";
import handoverIcon from "@/assets/work-handover.png.asset.json";

const icons = [findIcon, decideIcon, buildIcon, handoverIcon];

export function HowIWork() {
  const { t } = useLanguage();
  const steps = t.how.steps;
  return (
    <Section id="how" eyebrow={t.how.eyebrow} title={t.how.title}>
      <ol className="divide-y divide-border border-y border-border">
        {steps.map((s, i) => {
          const icon = icons[i];
          return (
            <li
              key={s.title}
              className="grid gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <div className="md:col-span-5">
                <img
                  src={icon.url}
                  alt=""
                  loading="lazy"
                  className="mb-5 aspect-[3/4] w-full max-w-[160px] object-cover"
                />
                <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                  {s.title}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:col-span-7 md:self-end">
                {s.desc}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
