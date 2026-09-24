import * as React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  choice?: string
  message?: string
  lang?: string
}

const Email = ({ name, email, choice, message, lang }: Props) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>{`Neue Anmeldung: ${choice ?? '-'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Neue Anmeldung über die Landingpage</Heading>
        <Text style={text}><b>Auswahl:</b> {choice || '-'}</Text>
        <Text style={text}><b>Name:</b> {name || '-'}</Text>
        <Text style={text}><b>E-Mail:</b> {email || '-'}</Text>
        <Text style={text}><b>Sprache:</b> {lang === 'de' ? 'Deutsch' : 'Englisch'}</Text>
        <Text style={text}><b>Nachricht:</b> {message || '-'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `Neue Anmeldung: ${d['choice'] ?? ''} (${d['name'] ?? ''})`,
  displayName: 'Landingpage sign-up notice (to Dina)',
  to: 'landingpage@humint.site',
  previewData: { name: 'Jane', email: 'jane@example.com', choice: 'Workshop', message: 'Hallo!', lang: 'de' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px' }
const heading = { fontSize: '20px', color: '#1b2a5e' }
const text = { fontSize: '15px', lineHeight: '22px', color: '#2b2b2b', margin: '4px 0' }
