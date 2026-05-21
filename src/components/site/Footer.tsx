import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:px-10">
        <div className="font-serif text-base text-foreground">
          HUMINT, Human intelligence. AI powered.
        </div>
        <div>Dina Bosma-Buczynska · Berlin · EN / DE / NL</div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/dina-bosma-buczynska-b1a64544/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dlbosma-hue"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@dinaleonidovnabosma"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Blog
          </a>
          <Link to="/impressum" className="transition-colors hover:text-foreground">
            Impressum
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
