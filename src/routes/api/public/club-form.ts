import { createFileRoute } from "@tanstack/react-router";
import { importedClubRequestSchema } from "@/lib/imported-club-request";
import { dict } from "@/club-i18n/strings";

export const Route = createFileRoute("/api/public/club-form")({
  server: { handlers: { POST: async ({ request }) => {
    const origin = request.headers.get("origin");
    const allowed = new Set([new URL(request.url).origin, "http://localhost:8080", "https://humint.site", "https://www.humint.site", "https://dina-ai-consultantpm.lovable.app", "https://id-preview--94c133bd-d2cc-4f1b-945c-4c30de04908e.lovable.app"]);
    if (origin && !allowed.has(origin)) return Response.json({ ok: false }, { status: 403 });
    const raw = await request.text();
    if (raw.length > 10000) return Response.json({ ok: false }, { status: 413 });
    let payload: unknown;
    try { payload = JSON.parse(raw); } catch { return Response.json({ ok: false }, { status: 400 }); }
    const parsed = importedClubRequestSchema.safeParse(payload);
    if (!parsed.success) return Response.json({ ok: false }, { status: 400 });
    const data = parsed.data;
    const form = dict[data.lang].form;
    const consent_text = (data.kind === "contact" ? form.contactConsentA : data.list === "community" ? dict[data.lang].community.consentA : form.consentA) + form.consentLink + form.consentB;
    const address = request.headers.get("cf-connecting-ip") ?? "local-preview";
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(address));
    const hash = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, "0")).join("");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.rpc("store_imported_club_form", { p_data: { ...data, consent_text }, p_ip_hash: hash });
    if (error) return Response.json({ ok: false }, { status: error.message.includes("rate_limit") ? 429 : 502 });
    if (data.kind === "signup" && data.list === "community") {
      const { data: submission } = await supabaseAdmin.from("waitlist_submissions").select("id").eq("signup_list", "community").ilike("email", data.email).maybeSingle();
      if (submission) {
        try {
          const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
          const result = await sendTemplateEmail("club-signup-notification", "ai.noobclub@humint.site", {
            templateData: { name: data.firstName, email: data.email, signupList: data.list, lang: data.lang },
            idempotencyKey: `combined-community-owner-${submission.id}`,
          });
          if (result.sent) await supabaseAdmin.from("waitlist_submissions").update({ owner_notified: true }).eq("id", submission.id);
        } catch { console.error("Community owner notification failed; signup remains stored"); }
      }
    }
    return Response.json({ ok: true });
  } } },
});
