import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-noob-club-anmeldung")({
  beforeLoad: () => { throw redirect({ to: "/ai-noob-club", hash: "community", statusCode: 301 }); },
});
