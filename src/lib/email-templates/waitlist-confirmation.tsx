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
    preview: 'You are on the AI Noob Club waitlist.',
    heading: 'Welcome to the AI Noob Club',
    greeting: (name?: string) => (name ? `Hi ${name},` : 'Hi there,'),
    body: 'You are on the waitlist. The first course is still being built, and you will hear from us first when workshops and courses open.',
    body2:
      'In the meantime we will send a few useful starter tips now and then. No spam, no pressure to learn everything at once.',
    shop: 'Want something practical right away? Have a look at the shop:',
    signoff: 'Talk soon,',
  },
  de: {
    preview: 'Sie stehen auf der Warteliste des AI Noob Club.',
    heading: 'Willkommen im AI Noob Club',
    greeting: (name?: string) => (name ? `Hallo ${name},` : 'Hallo,'),
    body: 'Sie stehen auf der Warteliste. Der erste Kurs entsteht noch, und Sie hören zuerst von uns, sobald Workshops und Kurse starten.',
    body2:
      'Bis dahin schicken wir Ihnen gelegentlich ein paar hilfreiche Einsteiger-Tipps. Kein Spam, kein Druck, alles auf einmal zu lernen.',
    shop: 'Sie möchten sofort etwas Praktisches? Schauen Sie im Shop vorbei:',
    signoff: 'Bis bald,',
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
          <Text style={text}>{t.body2}</Text>
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
            Dina, HUMINT
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
