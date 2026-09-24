import { createFileRoute } from '@tanstack/react-router'
import { sendTemplateEmail } from '@/lib/email-templates/send-email'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const CHOICES: Record<string, { de: string; en: string }> = {
  workshop: { de: 'Workshop', en: 'Workshop' },
  impuls: { de: '30-Minuten-Impuls', en: '30 Minute-check' },
  kunst: {
    de: 'Zwischen Intuition und Algorithmus',
    en: 'Art & AI: Between Intuition and Algorithm',
  },
}

export const Route = createFileRoute('/api/public/signup')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: Record<string, unknown>
        try {
          body = ((await request.json()) ?? {}) as Record<string, unknown>
        } catch {
          return new Response('Invalid body', { status: 400 })
        }
        const email = typeof body['email'] === 'string' ? body['email'].trim() : ''
        const name = typeof body['name'] === 'string' ? body['name'].trim().slice(0, 80) : ''
        const message =
          typeof body['message'] === 'string' ? body['message'].trim().slice(0, 2000) : ''
        const lang = body['lang'] === 'de' ? 'de' : 'en'
        const opt = CHOICES[String(body['choice'] ?? '')]
        if (!opt) return new Response('Invalid choice', { status: 400 })
        if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
          return new Response('Invalid email', { status: 400 })
        }
        const id = crypto.randomUUID()
        try {
          await sendTemplateEmail('signup-notification', 'landingpage@humint.site', {
            templateData: { name, email, choice: opt.de, message, lang },
            idempotencyKey: `signup-notification-${id}`,
            replyTo: email,
          })
          const result = await sendTemplateEmail('signup-confirmation', email, {
            templateData: { name, choice: opt[lang], lang },
            idempotencyKey: `signup-confirmation-${id}`,
          })
          return Response.json({ ok: true, sent: result.sent })
        } catch (error) {
          console.error('signup send failed', error)
          return Response.json({ ok: false }, { status: 502 })
        }
      },
    },
  },
})
