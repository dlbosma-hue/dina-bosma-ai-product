import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-noob-club_/widerruf")({
  beforeLoad: ({ location }) => { throw redirect({ href: "/ai-noob-club/kontakt" + location.searchStr + "", statusCode: 301 }); },
});
