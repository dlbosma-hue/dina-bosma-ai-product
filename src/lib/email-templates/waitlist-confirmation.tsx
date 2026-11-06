import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  lang?: string
}

const copy = {
  en: {
    preview: 'You are in the AI Noob Club.',
    heading: 'Welcome to the AI Noob Club',
    greeting: (name?: string) => (name ? `Hi ${name},` : 'Hi there,'),
    body: 'Thank you, you are in. Your free starter pack with AI basics and the Weekly Content Plan will follow by email.',
    signoff: 'Talk soon.',
    nameLine: 'Best, Dina',
    brandLine: 'AI Noob Club | HUMINT',
  },
  de: {
    preview: 'Du bist im AI Noob Club.',
    heading: 'Willkommen im AI Noob Club',
    greeting: (name?: string) => (name ? `Hallo ${name},` : 'Hallo,'),
    body: 'Danke, du bist dabei. Dein Gratis-Starterpaket mit KI-Basics und Content-Wochenplan folgt per E-Mail.',
    signoff: 'Bis bald.',
    nameLine: 'LG, Dina',
    brandLine: 'AI Noob Club | HUMINT',
  },
} as const

const Email = ({ name, lang }: Props) => {
  const t = lang === 'en' ? copy.en : copy.de
  return (
    <Html lang={lang === 'en' ? 'en' : 'de'} dir="ltr">
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>{t.heading}</Heading>
          <Text style={text}>{t.greeting(name)}</Text>
          <Text style={text}>{t.body}</Text>
          <Text style={text}>
            {t.signoff}
            <br />
            {t.nameLine}
            <br />
            {t.brandLine}
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    data['lang'] !== 'en'
      ? 'Willkommen im AI Noob Club'
      : 'Welcome to the AI Noob Club',
  displayName: 'AI Noob Club waitlist confirmation',
  previewData: { name: 'Jane', lang: 'en' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '28px 26px', maxWidth: '560px' }
const heading = { fontSize: '24px', color: '#1b2a5e', margin: '0 0 18px' }
const text = { fontSize: '16px', lineHeight: '26px', color: '#2b2b2b' }
