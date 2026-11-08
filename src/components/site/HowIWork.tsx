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
  const lastDescription = steps[3]?.desc ?? "";
  const sentenceEnd = lastDescription.indexOf(".");
  const quote = sentenceEnd >= 0 ? lastDescription.slice(0, sentenceEnd + 1) : "";
  const remainingDescription = quote ? lastDescription.slice(sentenceEnd + 1).trim() : lastDescription;
  return (
    <Section id="how" eyebrow={t.how.eyebrow} title={t.how.title}>
      <ol className="humint-timeline">
        {steps.map((s, i) => {
          const icon = icons[i];
          return (
            <li
              key={s.title}
              className="humint-timeline-step"
            >
              <span className="humint-step-number" aria-hidden="true">{i + 1}</span>
              <div className="humint-step-content">
                <div className="humint-step-icon">
                  <img
                    src={icon?.url}
                    alt=""
                    loading="lazy"
                    className="block h-full w-full scale-[1.08] object-cover object-center"
                  />
                </div>
                <h3 className="font-serif text-[26px] leading-tight md:text-[32px]">
                  {s.title}
                </h3>
              <p className="text-base leading-relaxed text-muted-foreground md:col-span-7 md:self-end">
                {i === 3 ? remainingDescription : s.desc}
              </p>
              </div>
            </li>
          );
        })}
      </ol>
      {quote && <blockquote className="humint-workflow-quote">{quote}</blockquote>}
    </Section>
  );
}
