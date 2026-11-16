import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-noob-club_/content-assistentin")({
  beforeLoad: ({ location }) => { throw redirect({ href: "/ai-noob-club/content-assistentin" + location.searchStr + "", statusCode: 301 }); },
});
