import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { CredibilityStrip } from "@/components/site/CredibilityStrip";
import { About } from "@/components/site/About";
import { IntroCallCTA } from "@/components/site/IntroCallCTA";
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
      { property: "og:url", content: "https://humint.site/" },
    ],
    links: [
      { rel: "canonical", href: "https://humint.site/" },
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
      <IntroCallCTA />
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
