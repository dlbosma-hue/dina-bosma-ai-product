import { Section } from "./Section";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  medium?: string;
};

const projects: Project[] = [
  {
    title: "Media Diversity Audit Agent",
    desc: "AI agent that audits media content for representation across marginalized communities — bylines, sourcing, framing, portrayal. Built with LangChain.",
    tags: ["LangChain", "Agents", "Python"],
    github: "#",
    medium:
      "https://medium.com/@dinaleonidovnabosma/i-built-an-ai-agent-that-audits-media-diversity-heres-what-actually-went-wrong-4b38790a6e3f",
  },
  {
    title: "MCP + LangChain Agent",
    desc: "Multi-server MCP integration connecting a LangGraph agent to live documentation, local resources, and utility tools simultaneously.",
    tags: ["MCP", "LangGraph", "LangChain"],
    github: "#",
  },
  {
    title: "Churn Prediction Model",
    desc: "End-to-end ML pipeline for customer churn classification — data prep, feature encoding, training, evaluation (precision, recall, AUC-ROC), and business interpretation.",
    tags: ["scikit-learn", "Python", "ML"],
    github: "#",
  },
  {
    title: "Gradio AI App",
    desc: "Deployed an AI-powered Gradio application with clean separation of UI and logic layers.",
    tags: ["Gradio", "Python", "OpenAI API"],
    github: "#",
  },
  {
    title: "n8n Automation Workflows",
    desc: "No-code/low-code automation pipelines connecting APIs, triggers, and data flows for real business use cases.",
    tags: ["n8n", "Automation", "APIs"],
    github: "#",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects & Labs" title="Built, not just studied.">
      <p className="-mt-6 mb-12 max-w-2xl text-lg text-muted-foreground md:mb-16">
        A selection of technical projects from bootcamp and independent work.
      </p>
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="flex flex-col bg-background p-8 transition-colors hover:bg-muted/40 md:p-10"
          >
            <div className="mb-4 font-mono text-xs text-muted-foreground">
              /{String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-serif text-2xl leading-tight">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs text-muted-foreground">
                  {t}
                </span>
              )).reduce<React.ReactNode[]>((acc, el, idx) => {
                if (idx > 0) acc.push(<span key={`d-${idx}`} className="text-xs text-border">·</span>);
                acc.push(el);
                return acc;
              }, [])}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 text-sm">
              {p.github && (
                <a
                  href={p.github}
                  className="inline-flex items-center gap-1.5 text-foreground underline-offset-4 hover:underline"
                >
                  GitHub <span aria-hidden>↗</span>
                </a>
              )}
              {p.medium && (
                <a
                  href={p.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent underline-offset-4 hover:underline"
                >
                  Read post <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
        <div className="hidden bg-background md:block" />
      </div>
    </Section>
  );
}
