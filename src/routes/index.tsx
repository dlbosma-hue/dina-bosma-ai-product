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
import { ClubCallout } from "@/components/site/ClubCallout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "HUMINT | KI-Beratung und Umsetzung" },
      { name: "description", content: "HUMINT: KI-Strategie, praktische Umsetzung und die menschliche Seite. Beratung von Dina Bosma-Buczynska." },
      { property: "og:title", content: "HUMINT | KI-Beratung und Umsetzung" },
      { property: "og:description", content: "KI-Strategie, praktische Umsetzung und die menschliche Seite. Beratung von Dina Bosma-Buczynska." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://humint.site/og-image.jpg?v=2" },
      { name: "twitter:image", content: "https://humint.site/og-image.jpg?v=2" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <Belief />
      <Services />
      <WhoIWorkWith />
      <Testimonials />
      <HowIWork />
      <CaseStudies />
      <Projects />
      <Credentials />
      <Contact />
      <ClubCallout />
      <Footer />
    </main>
  );
}
