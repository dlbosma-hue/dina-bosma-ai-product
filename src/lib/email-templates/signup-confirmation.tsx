import * as React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  choice?: string
  lang?: string
}

const Email = ({ name, choice, lang }: Props) => {
  const de = lang === 'de'
  return (
    <Html lang={de ? 'de' : 'en'} dir="ltr">
      <Head />
      <Preview>{de ? 'Danke für Ihre Anmeldung.' : 'Thanks for signing up.'}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>{de ? 'Danke für Ihre Anmeldung' : 'Thanks for signing up'}</Heading>
          <Text style={text}>{de ? (name ? `Hallo ${name},` : 'Hallo,') : name ? `Hi ${name},` : 'Hi there,'}</Text>
          <Text style={text}>
            {de
              ? `wir haben Ihre Anmeldung für „${choice ?? ''}" erhalten. Ich melde mich in Kürze persönlich mit allen Details bei Ihnen.`
              : `we received your sign-up for "${choice ?? ''}". I will get back to you personally with all the details soon.`}
          </Text>
          <Text style={text}>
            {de ? 'Bis bald.' : 'Talk soon.'}
            <br />
            {de ? 'LG, Dina' : 'Best, Dina'}
            <br />
            AI Noob Club | HUMINT
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: (d: Record<string, any>) =>
    d['lang'] === 'de' ? 'Ihre Anmeldung beim AI Noob Club' : 'Your AI Noob Club sign-up',
  displayName: 'Landingpage sign-up confirmation',
  previewData: { name: 'Jane', choice: 'Workshop', lang: 'de' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '28px 26px', maxWidth: '560px' }
const heading = { fontSize: '24px', color: '#1b2a5e', margin: '0 0 18px' }
const text = { fontSize: '16px', lineHeight: '26px', color: '#2b2b2b' }
