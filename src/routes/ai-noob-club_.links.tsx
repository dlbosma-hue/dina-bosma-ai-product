import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-noob-club_/links")({
  beforeLoad: ({ location }) => { throw redirect({ href: "/ai-noob-club" + location.searchStr + "", statusCode: 301 }); },
});
