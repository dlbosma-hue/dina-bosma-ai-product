import { createFileRoute } from '@tanstack/react-router'
import { sendTemplateEmail } from '@/lib/email-templates/send-email'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const Route = createFileRoute('/api/public/waitlist')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown
        try {
          payload = await request.json()
        } catch {
          return new Response('Invalid body', { status: 400 })
        }

        const body = (payload ?? {}) as Record<string, unknown>
        const email = typeof body['email'] === 'string' ? body['email'].trim() : ''
        const rawName = typeof body['name'] === 'string' ? body['name'].trim() : ''
        const name = rawName.slice(0, 80)
        const lang = body['lang'] === 'de' ? 'de' : 'en'

        if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
          return new Response('Invalid email', { status: 400 })
        }

        try {
          const result = await sendTemplateEmail('waitlist-confirmation', email, {
            templateData: { name, lang },
            idempotencyKey: `waitlist-confirmation-${email.toLowerCase()}`,
          })
          return Response.json({ ok: true, sent: result.sent })
        } catch (error) {
          console.error('waitlist confirmation send failed', error)
          return Response.json({ ok: false }, { status: 502 })
        }
      },
    },
  },
})
