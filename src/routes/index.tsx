import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { CredibilityStrip } from "@/components/site/CredibilityStrip";
import { About } from "@/components/site/About";
import { Belief } from "@/components/site/Belief";
import { Services } from "@/components/site/Services";
import { WhoIWorkWith } from "@/components/site/WhoIWorkWith";
import { Testimonials } from "@/components/site/Testimonials";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Projects } from "@/components/site/Projects";
import { HowIWork } from "@/components/site/HowIWork";
import { Credentials } from "@/components/site/Credentials";
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
      <CredibilityStrip />
      <About />
      <Belief />
      <Services />
      <WhoIWorkWith />
      <Testimonials />
      <CaseStudies />
      <Projects />
      <HowIWork />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
