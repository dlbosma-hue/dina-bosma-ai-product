import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-noob-club_/datenschutz")({
  beforeLoad: () => { throw redirect({ to: "/datenschutz", statusCode: 301 }); },
});
