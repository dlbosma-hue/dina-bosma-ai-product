import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-noob-club_/checkliste")({
  beforeLoad: ({ location }) => { throw redirect({ href: "/ai-noob-club/gratis" + location.searchStr + "#starterpaket", statusCode: 301 }); },
});
