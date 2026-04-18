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
    title: "Spottr — AI Member Retention System",
    desc: "Full-stack AI consulting engagement: churn prediction model (92.5% accuracy), automated n8n coach briefings, Plotly dashboard, GDPR compliance pack, EU AI Act documentation, and a commercialisation roadmap. The complete arc from business problem to deployed MVP.",
    tags: ["Python", "scikit-learn", "LangChain", "n8n", "Plotly Dash", "GDPR"],
    github:
      "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/Final_Project_DinaBB",
  },
  {
    title: "Media Diversity Audit Agent",
    desc: "LangGraph ReAct agent that audits media content for representation across marginalised communities — analysing bylines, sourcing, framing, and portrayal. Deployed with FastAPI and monitored via LangSmith.",
    tags: ["LangGraph", "LangChain", "FastAPI", "LangSmith", "Python"],
    github:
      "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/project_3_media_agent",
    medium:
      "https://medium.com/@dinaleonidovnabosma/i-built-an-ai-agent-that-audits-media-diversity-heres-what-actually-went-wrong-4b38790a6e3f",
  },
  {
    title: "MCP + LangGraph Agent",
    desc: "Multi-server MCP integration connecting a LangGraph ReAct agent to live documentation, local file resources, and utility tools simultaneously. Demonstrates tool orchestration across heterogeneous sources.",
    tags: ["MCP", "LangGraph", "LangChain", "Python"],
    github: "https://github.com/dlbosma-hue/bootcamp_env",
  },
  {
    title: "AI Podcast Studio",
    desc: "End-to-end pipeline from text input to synthesised audio: GPT-4o script generation, ElevenLabs TTS, and a Gradio interface. Clean separation of UI and pipeline logic, deployable as a standalone app.",
    tags: ["Gradio", "ElevenLabs", "OpenAI API", "Python"],
    github:
      "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/Podcast%20Project",
  },
  {
    title: "n8n Automation Workflows",
    desc: "Production-grade n8n workflows built across multiple projects: scheduled media research pipelines, survey triggers, weekly email briefings, and Slack/Notion integrations. Designed for real operational use, not demos.",
    tags: ["n8n", "Automation", "APIs", "Webhooks"],
    github: "https://github.com/dlbosma-hue/bootcamp_env",
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

            <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1">
              {p.tags.map((t, idx) => (
                <span key={t} className="inline-flex items-center text-xs text-muted-foreground">
                  {idx > 0 && <span className="mr-2 text-border">·</span>}
                  {t}
                </span>
              ))}
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
