import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LangProvider } from "@/club-i18n/lang";
import { Header } from "@/components/club/Header";
import { Footer } from "@/components/club/Footer";

export const Route = createFileRoute("/ai-noob-club")({
  component: ClubLayout,
});

function ClubLayout() {
  return (
    <LangProvider>
      <div className="noob-theme new-club min-h-screen">
        <Header />
        <main id="main"><Outlet /></main>
        <Footer />
      </div>
    </LangProvider>
  );
}
