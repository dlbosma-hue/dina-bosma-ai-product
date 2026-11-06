import { Body, Button, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

const copy = {
  de: {
    title: 'Dein Edit-Guide ist da',
    preview: 'Reels schneiden mit Claude',
    body: 'Hier ist dein Edit-Guide „Reels schneiden mit Claude“ als PDF.',
    cta: 'PDF öffnen',
    signoff: 'Viel Spaß damit. LG, Dina',
  },
  en: {
    title: 'Your Edit Guide is here',
    preview: 'Cutting Reels with Claude',
    body: 'Here is your Edit Guide for cutting Reels with Claude as a PDF.',
    cta: 'Open PDF',
    signoff: 'Enjoy. Best, Dina',
  },
}

function Email({ lang }: { lang?: string }) {
  const de = lang !== 'en'
  const t = de ? copy.de : copy.en
  return <Html lang={de ? 'de' : 'en'}><Head /><Preview>{t.preview}</Preview><Body style={main}>
    <Container style={container}><Heading style={heading}>{t.title}</Heading>
      <Text style={text}>{t.body}</Text>
      <Button href="https://humint.site/downloads/reels-schneiden-mit-claude.pdf" style={button}>{t.cta}</Button>
      <Text style={text}>{t.signoff}<br />AI Noob Club | HUMINT</Text>
    </Container></Body></Html>
}

export const template = {
  component: Email,
  subject: (data: Record<string, unknown>) => data['lang'] === 'en' ? copy.en.title : copy.de.title,
  displayName: 'Edit Guide confirmation', previewData: { lang: 'de' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '28px 26px', maxWidth: '560px' }
const heading = { fontSize: '24px', color: '#1F2A44', margin: '0 0 18px' }
const text = { fontSize: '16px', lineHeight: '26px', color: '#1F2A44' }
const button = { backgroundColor: '#F39A7E', color: '#1F2A44', borderRadius: '24px', padding: '12px 24px', fontSize: '16px', textDecoration: 'none' }
