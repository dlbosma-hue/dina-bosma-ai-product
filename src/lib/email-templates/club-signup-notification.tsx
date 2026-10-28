import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

function Email({ name, email, business, pain, source }: { name?: string; email?: string; business?: string; pain?: string; source?: string }) {
  return <Html lang="de"><Head /><Preview>Neue Club-Registrierung</Preview><Body style={main}>
    <Container style={container}><Heading>Neue Club-Registrierung</Heading>
      <Text>{source === 'community' ? 'Gründerinnen-Community' : 'Gratis-Starter-Kit'}</Text>
      <Text>Name: {name}<br />E-Mail: {email}</Text>
      {business && <Text>Business: {business}</Text>}{pain && <Text>Was nervt gerade: {pain}</Text>}
    </Container></Body></Html>
}
export const template = {
  component: Email, subject: 'Neue Club-Registrierung', to: 'ai.noobclub@humint.site',
  displayName: 'Club signup notice to Dina', previewData: { name: 'Test', email: 'test@example.com', source: 'community', business: 'Ein kleines Business' },
} satisfies TemplateEntry
const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif', color: '#1F2A44' }
const container = { padding: '28px 26px', maxWidth: '560px' }