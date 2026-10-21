import { createFileRoute } from '@tanstack/react-router'
import { sendTemplateEmail } from '@/lib/email-templates/send-email'
import { clubSignupSchema, confirmationTemplate, signupConsent } from '@/lib/club-signup'

export const Route = createFileRoute('/api/public/waitlist')({
  server: { handlers: { POST: async ({ request }) => {
    const origin = request.headers.get('origin')
    const allowed = new Set([new URL(request.url).origin, 'http://localhost:8080', 'https://humint.site', 'https://www.humint.site', 'https://dina-ai-consultantpm.lovable.app', 'https://id-preview--94c133bd-d2cc-4f1b-945c-4c30de04908e.lovable.app'])
    if (origin && !allowed.has(origin)) return new Response('Invalid origin', { status: 403 })
    if (Number(request.headers.get('content-length') ?? 0) > 10000) return new Response('Body too large', { status: 413 })
    let raw: string
    try { raw = await request.text() } catch { return new Response('Invalid body', { status: 400 }) }
    if (raw.length > 10000) return new Response('Body too large', { status: 413 })
    let payload: unknown
    try { payload = JSON.parse(raw) } catch { return new Response('Invalid body', { status: 400 }) }
    const parsed = clubSignupSchema.safeParse(payload)
    if (!parsed.success) return Response.json({ ok: false }, { status: 400 })
    const data = parsed.data
    const c = signupConsent[data.lang]
    const consent_text = c[data.source] + c.privacy + '.'
    const consent_at = new Date().toISOString()
    // Only the platform-provided address is used; never trust X-Forwarded-For.
    const address = request.headers.get('cf-connecting-ip') ?? 'local-preview'
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(address))
    const ipHash = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, '0')).join('')
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server')
    const { error } = await supabaseAdmin.rpc('store_club_submission', { p_data: { ...data, consent_text, consent_at }, p_ip_hash: ipHash })
    if (error) return Response.json({ ok: false }, { status: error.message.includes('rate_limit') ? 429 : error.message.includes('duplicate_submission') ? 409 : 502 })

    const form = new FormData()
    for (const [key, value] of Object.entries({ ...data, consent: 'yes', consent_text, consent_at })) form.set(key, String(value))
    form.set('_subject', `AI Noob Club signup (${data.source})`)
    let formspreeDelivered = false
    let sent = false
    try {
      const response = await fetch('https://formspree.io/f/maqkylpb', { method: 'POST', body: form, headers: { Accept: 'application/json' } })
      formspreeDelivered = response.ok
    } catch { console.error('Club owner delivery failed') }
    try {
      const result = await sendTemplateEmail(confirmationTemplate(data.source), data.email, { templateData: { name: data.name, lang: data.lang }, idempotencyKey: `club-confirmation-${data.id}` })
      sent = result.sent
    } catch { console.error('Club confirmation delivery failed') }
    await supabaseAdmin.from('waitlist_submissions').update({ formspree_delivered: formspreeDelivered, confirmation_sent: sent }).eq('id', data.id)
    return Response.json({ ok: true, sent })
  } } },
})
