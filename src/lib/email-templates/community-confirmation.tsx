import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

const copy = {
  de: { title: 'Die Gründerinnen-Community', body: 'Danke, dass du dabei sein möchtest. Du bist auf der Liste der Gründerinnen-Community. Ich melde mich bald persönlich bei dir.' },
  en: { title: "The Founders' Community", body: "Thank you for wanting to join. You're on the list for the Founders' Community. I'll get back to you personally soon." },
}

function Email({ name, lang }: { name?: string; lang?: string }) {
  const de = lang !== 'en'
  const t = de ? copy.de : copy.en
  return <Html lang={de ? 'de' : 'en'}><Head /><Preview>{t.title}</Preview><Body style={main}>
    <Container style={container}><Heading style={heading}>{t.title}</Heading>
      <Text style={text}>{de ? `Hallo ${name ?? ''},` : `Hi ${name ?? ''},`}</Text>
      <Text style={text}>{t.body}</Text><Text style={text}>{de ? 'LG, Dina' : 'Best, Dina'}<br />AI Noob Club | HUMINT</Text>
    </Container></Body></Html>
}

export const template = {
  component: Email,
  subject: (data: Record<string, unknown>) => data['lang'] === 'en' ? copy.en.title : copy.de.title,
  displayName: 'Founders community confirmation', previewData: { name: 'Dina', lang: 'de' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '28px 26px', maxWidth: '560px' }
const heading = { fontSize: '24px', color: '#1F2A44', margin: '0 0 18px' }
const text = { fontSize: '16px', lineHeight: '26px', color: '#1F2A44' }