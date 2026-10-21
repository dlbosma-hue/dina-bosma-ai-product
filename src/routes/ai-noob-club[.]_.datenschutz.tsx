import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-noob-club._/datenschutz")({
  beforeLoad: () => { throw redirect({ to: "/datenschutz", statusCode: 301 }); },
});