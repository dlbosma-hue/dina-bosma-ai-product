import { useState } from "react";
import { Section } from "./Section";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  medium?: string;
  details: {
    what: string;
    how: string;
    outcomes: string;
    learned: string;
  };
};

const projects: Project[] = [
  {
    title: "Spottr: AI Member Retention System",
    desc: "Full-stack AI consulting engagement: churn prediction model (92.5% accuracy), automated n8n coach briefings, Plotly dashboard, GDPR compliance pack, EU AI Act documentation, and a commercialisation roadmap. The complete arc from business problem to deployed MVP.",
    tags: ["Python", "scikit-learn", "LangChain", "n8n", "Plotly Dash", "GDPR"],
    github:
      "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/Final_Project_DinaBB",
    details: {
      what: "A full AI consulting engagement for a fictional boutique fitness studio. Delivered every artefact a real client would receive: business case, working MVP, compliance documentation, and a go-to-market roadmap.",
      how: "Built a logistic regression churn model in scikit-learn (92.5% accuracy, 0.977 AUC-ROC) on synthetic wearable and attendance data. Automated weekly coach briefings via n8n workflows. Built a Plotly Dash dashboard for studio managers. Wrote a full GDPR Article 9 compliance pack for health/wearable data and an EU AI Act risk assessment.",
      outcomes:
        "Projected 33-day break-even and 1,099% 12-month ROI based on retention uplift modelling. Full EU AI Act and GDPR documentation ready for a real deployment.",
      learned:
        "Running an end-to-end engagement solo sharpens every skill: you can't hand off the parts you find hard. Scoping the business problem before touching any code was the single biggest driver of quality.",
    },
  },
  {
    title: "Media Diversity Audit Agent",
    desc: "LangGraph ReAct agent that audits media content for representation across marginalised communities, analysing bylines, sourcing, framing, and portrayal. Deployed with FastAPI and monitored via LangSmith.",
    tags: ["LangGraph", "LangChain", "FastAPI", "LangSmith", "Python"],
    github:
      "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/project_3_media_agent",
    medium:
      "https://medium.com/@dinaleonidovnabosma/i-built-an-ai-agent-that-audits-media-diversity-heres-what-actually-went-wrong-4b38790a6e3f",
    details: {
      what: "An AI agent that audits news articles for representation gaps across gender, race, disability, and other marginalised groups. It analyses bylines, source diversity, framing language, and subject portrayal, then generates a structured report.",
      how: "Built with LangGraph ReAct loop, giving the agent access to RSS feeds, NewsAPI, Wikipedia, and a Pinecone RAG store. Deployed as a FastAPI service on Railway. Four n8n workflows run Monday mornings, pulling from NPR, NYT, The Guardian, and Al Jazeera and posting results to Notion and Slack.",
      outcomes:
        "Live production deployment on Railway. Monitored end-to-end via LangSmith. Written up in a Medium post covering what actually went wrong during the build.",
      learned:
        "Agents fail in interesting ways when tools return unexpected formats. LangSmith traces made debugging tractable in a way that print statements never could.",
    },
  },
  {
    title: "MCP + LangGraph Agent",
    desc: "Multi-server MCP integration connecting a LangGraph ReAct agent to live documentation, local file resources, and utility tools simultaneously. Demonstrates tool orchestration across heterogeneous sources.",
    tags: ["MCP", "LangGraph", "LangChain", "Python"],
    github: "https://github.com/dlbosma-hue/bootcamp_env",
    details: {
      what: "A LangGraph ReAct agent connected to multiple MCP servers simultaneously: one serving live documentation, one serving local file resources, and one providing utility tools. The agent routes queries to the right source without manual routing logic.",
      how: "Implemented multi-server MCP using the Model Context Protocol spec. Each server exposes a different resource type. LangGraph manages the ReAct loop and tool selection. The agent can answer questions that require combining context from several sources in a single response.",
      outcomes:
        "Working demonstration of heterogeneous tool orchestration. Shows how to connect agents to real, dynamic data sources rather than static tool definitions.",
      learned:
        "MCP shifts the complexity from tool implementation to schema design. Getting the server descriptions right matters more than the implementation details.",
    },
  },
  {
    title: "AI Podcast Studio",
    desc: "End-to-end pipeline from text input to synthesised audio: GPT-4o script generation, ElevenLabs TTS, and a Gradio interface. Clean separation of UI and pipeline logic, deployable as a standalone app.",
    tags: ["Gradio", "ElevenLabs", "OpenAI API", "Python"],
    github:
      "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/Podcast%20Project",
    details: {
      what: "A text-to-podcast pipeline with a Gradio UI. Give it a topic or transcript, and it generates a structured script with GPT-4o, then synthesises natural-sounding audio via the ElevenLabs API.",
      how: "Pipeline logic and UI are kept separate so either can be swapped out. GPT-4o handles scripting with a prompt that formats output for spoken delivery. ElevenLabs handles voice synthesis. Gradio wraps the whole pipeline in a deployable web interface.",
      outcomes:
        "Deployable standalone app. Clean architecture that makes it straightforward to swap voice providers or add multi-speaker support.",
      learned:
        "Prompting for audio output is different from prompting for text: you have to think in rhythm, pause, and spoken register, not just content.",
    },
  },
  {
    title: "n8n Automation Workflows",
    desc: "Production-grade n8n workflows built across multiple projects: scheduled media research pipelines, survey triggers, weekly email briefings, and Slack/Notion integrations. Designed for real operational use, not demos.",
    tags: ["n8n", "Automation", "APIs", "Webhooks"],
    github: "https://github.com/dlbosma-hue/bootcamp_env",
    details: {
      what: "A collection of production n8n workflows built across the bootcamp. Not demo workflows: these run on schedules, handle errors, and integrate with real tools.",
      how: "Workflows include: four Monday-morning media audit triggers (NPR, NYT, Guardian, Al Jazeera) posting to Notion and Slack; weekly Spottr coach briefing emails with churn risk summaries; survey response triggers; and webhook-based integrations for cross-system data flow.",
      outcomes:
        "Operational workflows running in real deployments. The Spottr briefings and media audit pipelines are live.",
      learned:
        "Automation breaks at boundaries: API rate limits, malformed responses, empty result sets. Good workflow design handles the unhappy path, not just the happy one.",
    },
  },
];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" eyebrow="Projects & Labs" title="Built, not just studied.">
      <p className="-mt-6 mb-12 max-w-2xl text-lg text-muted-foreground md:mb-16">
        A selection of technical projects from bootcamp and independent work.
      </p>
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            onClick={() => setSelected(p)}
            className="flex cursor-pointer flex-col bg-background p-8 transition-colors hover:bg-muted/40 md:p-10"
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

            <div className="mt-6 pt-4 text-sm text-accent">Click to read more ↗</div>
          </article>
        ))}
        <div className="hidden bg-background md:block" />
      </div>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <div className="mb-2 font-mono text-xs text-muted-foreground">
                  /{String(projects.indexOf(selected) + 1).padStart(2, "0")}
                </div>
                <DialogTitle className="font-serif text-2xl leading-tight">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">What</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {selected.details.what}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">
                    How it was built
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {selected.details.how}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">Outcomes</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {selected.details.outcomes}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">
                    What I learned
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {selected.details.learned}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-5">
                {selected.tags.map((t, idx) => (
                  <span key={t} className="inline-flex items-center text-xs text-muted-foreground">
                    {idx > 0 && <span className="mr-2 text-border">·</span>}
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground underline-offset-4 hover:underline"
                  >
                    GitHub ↗
                  </a>
                )}
                {selected.medium && (
                  <a
                    href={selected.medium}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent underline-offset-4 hover:underline"
                  >
                    Read post ↗
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
