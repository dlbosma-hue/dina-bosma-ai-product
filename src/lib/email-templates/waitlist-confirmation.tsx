import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
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
    body: 'Thank you. You get the Weekly Cheat Sheet by email. Unsubscribe any time, just reply to this email.',
    shop: 'Want something practical right away? Have a look at the shop:',
    signoff: 'Talk soon.',
    nameLine: 'Best, Dina',
    brandLine: 'AI Noob Club | HUMINT',
  },
  de: {
    preview: 'Du bist im AI Noob Club.',
    heading: 'Willkommen im AI Noob Club',
    greeting: (name?: string) => (name ? `Hallo ${name},` : 'Hallo,'),
    body: 'Danke, du bist dabei. Du bekommst den Wochen-Spickzettel per E-Mail. Abmelden geht jederzeit, ein kurzer Satz genügt.',
    shop: 'Du möchtest direkt loslegen? Schau im Shop vorbei:',
    signoff: 'Bis bald.',
    nameLine: 'LG, Dina',
    brandLine: 'AI Noob Club | HUMINT',
  },
} as const

const Email = ({ name, lang }: Props) => {
  const t = lang === 'de' ? copy.de : copy.en
  return (
    <Html lang={lang === 'de' ? 'de' : 'en'} dir="ltr">
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>{t.heading}</Heading>
          <Text style={text}>{t.greeting(name)}</Text>
          <Text style={text}>{t.body}</Text>
          <Hr style={hr} />
          <Text style={muted}>
            {t.shop}{' '}
            <Link href="https://www.etsy.com/shop/TheAINoobClub" style={link}>
              etsy.com/shop/TheAINoobClub
            </Link>
          </Text>
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
    data['lang'] === 'de'
      ? 'Willkommen im AI Noob Club'
      : 'Welcome to the AI Noob Club',
  displayName: 'AI Noob Club waitlist confirmation',
  previewData: { name: 'Jane', lang: 'en' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '28px 26px', maxWidth: '560px' }
const heading = { fontSize: '24px', color: '#1b2a5e', margin: '0 0 18px' }
const text = { fontSize: '16px', lineHeight: '26px', color: '#2b2b2b' }
const muted = { fontSize: '14px', lineHeight: '22px', color: '#5b5b5b' }
const link = { color: '#1b2a5e' }
const hr = { borderColor: '#e8e2d5', margin: '22px 0' }
