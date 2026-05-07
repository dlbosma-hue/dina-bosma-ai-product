import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Projects } from "@/components/site/Projects";
import { Writing } from "@/components/site/Writing";
import { Stack } from "@/components/site/Stack";
import { Credentials } from "@/components/site/Credentials";
import { Recommendations } from "@/components/site/Recommendations";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "HUMINT — Human intelligence. AI powered." },
      {
        name: "description",
        content:
          "HUMINT — AI consulting by Dina Bosma-Buczynska. Human intelligence, AI powered. Strategy, implementation, and the bridge between them. Berlin-based, available in English, German, and Dutch.",
      },
      { property: "og:title", content: "HUMINT — Human intelligence. AI powered." },
      {
        property: "og:description",
        content:
          "AI consulting by Dina Bosma-Buczynska. Strategy, implementation, and the bridge between them.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <div aria-hidden className="mx-auto h-px max-w-5xl bg-border" />
      <About />
      <Services />
      <CaseStudies />
      <Projects />
      <Writing />
      <Stack />
      <Credentials />
      <Recommendations />
      <Contact />
      <Footer />
    </main>
  );
}
