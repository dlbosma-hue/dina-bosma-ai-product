import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const linkClass = "inline-flex min-h-11 items-center text-link underline-offset-4 hover:underline";
  return (
    <footer className="bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5 py-10 text-sm text-navy md:flex-row md:items-center md:px-8">
        <div className="font-headline text-2xl leading-[1.05] text-navy">{t.footer.brand}</div>
        <div>{t.footer.meta}</div>
        <div className="flex flex-wrap items-center gap-x-4">
          <a href="https://www.linkedin.com/in/dina-bosma-buczynska-b1a64544/" target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a>
          <a href="https://github.com/dlbosma-hue" target="_blank" rel="noreferrer" className={linkClass}>GitHub</a>
          <a href="https://www.youtube.com/@humint-berlin" target="_blank" rel="noreferrer" className={linkClass}>YouTube</a>
          <Link to="/impressum" className={linkClass}>{t.footer.impressum}</Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
