import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

const copy = {
  de: {
    title: 'Meine Content-Assistentin',
    beta: 'Danke! Ich melde mich persönlich bei dir.',
    frueh: 'Danke, du bist eingetragen. Ich melde mich per E-Mail bei dir.',
  },
  en: {
    title: 'My Content Assistant',
    beta: "Thank you! I'll get back to you personally.",
    frueh: "Thank you, you're signed up. I'll get in touch by email.",
  },
}

function Email({ name, lang, runde }: { name?: string; lang?: string; runde?: string }) {
  const de = lang !== 'en'
  const t = de ? copy.de : copy.en
  return <Html lang={de ? 'de' : 'en'}><Head /><Preview>{t.title}</Preview><Body style={main}>
    <Container style={container}><Heading style={heading}>{t.title}</Heading>
      <Text style={text}>{de ? `Hallo ${name ?? ''},` : `Hi ${name ?? ''},`}</Text>
      <Text style={text}>{runde === 'beta' ? t.beta : t.frueh}</Text>
      <Text style={text}>{de ? 'LG, Dina' : 'Best, Dina'}<br />AI Noob Club | HUMINT</Text>
    </Container></Body></Html>
}

export const template = {
  component: Email,
  subject: (data: Record<string, unknown>) => data['lang'] === 'en' ? copy.en.title : copy.de.title,
  displayName: 'Course waitlist confirmation', previewData: { name: 'Dina', lang: 'de', runde: 'beta' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '28px 26px', maxWidth: '560px' }
const heading = { fontSize: '24px', color: '#1F2A44', margin: '0 0 18px' }
const text = { fontSize: '16px', lineHeight: '26px', color: '#1F2A44' }
