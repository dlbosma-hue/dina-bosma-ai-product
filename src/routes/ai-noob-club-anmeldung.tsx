import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-noob-club-anmeldung")({
  beforeLoad: ({ location }) => { throw redirect({ href: "/ai-noob-club/community" + location.searchStr + "#platz", statusCode: 301 }); },
});
