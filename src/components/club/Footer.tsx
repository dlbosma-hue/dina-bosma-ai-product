import { Instagram } from "lucide-react";
import { links } from "@/config/links";
import { useLang } from "@/club-i18n/lang";
import { Ext } from "./Ext";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="bg-rosa text-navy">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4">
          <Wordmark />
        </div>
        <ul className="flex flex-col gap-3 text-navy">
          <li>
            <Ext href={links.instagram} className="club-link-brand inline-flex items-center gap-2">
              <Instagram className="h-4 w-4 text-navy" aria-hidden /> {f.instagram}
            </Ext>
          </li>
          <li><Ext href={links.meetup} className="club-link-brand">{f.meetup}</Ext></li>
          <li><Ext href={links.humint} className="club-link-brand club-humint-link">{f.humint}</Ext></li>
          <li><Ext href={links.impressum} className="club-link-brand">{f.impressum}</Ext></li>
          <li><Ext href={links.datenschutz} className="club-link-brand">{f.datenschutz}</Ext></li>
        </ul>
      </div>
    </footer>
  );
}
