import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n";

export function Credentials() {
  const { t } = useLanguage();
  const groups = [
    { heading: t.credentials.experienceHeading, items: t.credentials.experience },
    { heading: t.credentials.certificationsHeading, items: t.credentials.certifications },
  ];
  return (
    <Section id="credentials" eyebrow={t.credentials.eyebrow} title={t.credentials.title}>
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <section key={group.heading} className="retro-card bg-cream p-6 md:p-8">
            <h3 className="text-3xl">{group.heading}</h3>
            <ul className="mt-6 divide-y-2 divide-navy">
              {group.items.map((i) => (
                <li key={i.title} className="py-5 first:pt-0 last:pb-0">
                  <div className="flex flex-col gap-2">
                    <span className="font-headline text-2xl leading-[1.05]">{i.title}</span>
                    <span className="text-sm text-navy">{i.org}{i.year && <span className="ml-3 font-semibold">{i.year}</span>}</span>
                  </div>
                  <p className="mt-2 text-base text-navy">{i.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
