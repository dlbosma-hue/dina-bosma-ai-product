import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";
import findIcon from "@/assets/work-find.png.asset.json";
import decideIcon from "@/assets/work-decide.png.asset.json";
import buildIcon from "@/assets/work-build.png.asset.json";
import handoverIcon from "@/assets/work-handover.png.asset.json";

const icons = [findIcon, decideIcon, buildIcon, handoverIcon];

export function HowIWork() {
  const { t } = useLanguage();
  return (
    <Section id="how" eyebrow={t.how.eyebrow} title={t.how.title}>
      <ol className="grid gap-5 md:grid-cols-2">
        {t.how.steps.map((s, i) => {
          const icon = icons[i];
          return (
            <li key={s.title} className={`retro-card p-6 md:p-8 ${i % 2 ? "bg-rose" : "bg-cream"}`}>
              {icon && <img src={icon.url} alt="" loading="lazy" className="mb-6 aspect-square w-28 border-2 border-navy object-cover" />}
              <h3 className="text-3xl md:text-4xl">{s.title}</h3>
              <p className="mt-4 text-base text-navy">{s.desc}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
