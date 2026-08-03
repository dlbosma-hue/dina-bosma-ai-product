import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function Credentials() {
  const { t } = useLanguage();
  const items = t.credentials.certifications;
  const experience = t.credentials.experience;
  return (
    <Section
      id="credentials"
      eyebrow={t.credentials.eyebrow}
      title={t.credentials.title}
    >
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.credentials.experienceHeading}
          </h3>
          <ul className="divide-y divide-border border-y border-border">
            {experience.map((i) => (
              <li key={i.title} className="py-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <span className="font-serif text-xl leading-tight md:text-2xl">{i.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {i.org}
                    {i.year && <span className="ml-3 font-mono text-xs">{i.year}</span>}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.credentials.certificationsHeading}
          </h3>
          <ul className="divide-y divide-border border-y border-border">
            {items.map((i) => (
              <li key={i.title} className="py-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <span className="font-serif text-xl leading-tight md:text-2xl">{i.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {i.org}
                    {i.year && <span className="ml-3 font-mono text-xs">{i.year}</span>}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
