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
    title: "n8n Automation Workflows",
    desc: "Production workflows built across multiple projects: scheduled research pipelines, survey triggers, weekly email briefings, and Slack and Notion integrations. Built for real operational use, not demos.",
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
  {
    title: "LangGraph Agent",
    desc: "A ReAct agent connected to multiple live data sources simultaneously, handling tool selection and sequencing in real time. Built to show what orchestration looks like when it has to work in practice, not just in a notebook.",
    tags: ["LangGraph", "LangChain", "FastAPI", "LangSmith", "Python"],
    github:
      "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/project_3_media_agent",
    medium:
      "https://medium.com/@dinaleonidovnabosma/i-built-an-ai-agent-that-audits-media-diversity-heres-what-actually-went-wrong-4b38790a6e3f",
    details: {
      what: "An AI agent that audits news articles for representation gaps across gender, race, disability, and other marginalised groups. It analyses bylines, source diversity, framing language, and subject portrayal, then generates a structured report.",
      how: "Built with LangGraph ReAct loop, giving the agent access to RSS feeds, NewsAPI, Wikipedia, and a Pinecone RAG store. Deployed as a FastAPI service on Railway. Four n8n workflows run Monday mornings, pulling from NPR, NYT, The Guardian, and Al Jazeera and posting results to Notion and Slack.",
      outcomes:
        "Live production deployment on Railway. Monitored end-to-end via LangSmith. Written up in a Medium post covering what went wrong during the build.",
      learned:
        "Agents fail in interesting ways when tools return unexpected formats. LangSmith traces made debugging tractable in a way that print statements never could.",
    },
  },
  {
    title: "AI Content Creator",
    desc: "A structured content generation tool built around deliberate prompt design. Give it a topic and an audience, and it produces formatted content across multiple formats. Useful for small teams without a dedicated content function.",
    tags: ["Gradio", "OpenAI API", "Prompt Engineering", "Python"],
    github: "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/ai-content-creator",
    details: {
      what: "A content generation tool with a Gradio interface. Give it a topic, a target audience, and a tone, and it produces structured content, social posts, summaries, outlines, tailored to the brief. The focus is on how prompt architecture drives output quality.",
      how: "Built with a layered prompting approach: a system prompt sets voice and constraints, a structured user prompt encodes the brief, and chain-of-thought formatting guides the model toward consistent, usable output. Gradio provides the interface, making it usable without touching code. OpenAI API powers generation.",
      outcomes:
        "Demonstrates that prompt engineering is a design discipline, not a workaround. Small structural changes to the prompt produce measurable differences in output consistency and format compliance.",
      learned:
        "The interface shapes how people prompt. A well-designed Gradio UI with clear input fields leads to better prompts and better outputs, the UX and the prompt design are inseparable.",
    },
  },
];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" eyebrow="Also" title="Selected builds.">
      <ul className="divide-y divide-border border-y border-border">
        {projects.map((p) => (
          <li key={p.title}>
            <button
              type="button"
              onClick={() => setSelected(p)}
              className="group grid w-full gap-2 py-6 text-left transition-colors hover:bg-muted/30 md:grid-cols-12 md:items-baseline md:gap-8 md:py-7"
            >
              <h3 className="font-serif text-xl leading-tight md:col-span-5 md:text-2xl">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6">
                {p.desc}
              </p>
              <span
                aria-hidden
                className="text-sm text-muted-foreground transition-colors group-hover:text-foreground md:col-span-1 md:text-right"
              >
                ↗
              </span>
            </button>
          </li>
        ))}
      </ul>

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
