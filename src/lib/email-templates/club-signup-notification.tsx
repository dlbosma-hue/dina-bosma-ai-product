import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

const rounds: Record<string, string> = {
  beta: 'Runde 1 Beta-Community',
  frueh: 'Runde 2 Frühe Warteliste',
  'edit-guide': 'Gratis Edit-Guide',
}

function Email({ name, email, source, runde }: { name?: string; email?: string; source?: string; runde?: string }) {
  const list = source === 'checkliste' ? 'Gratis-Starterpaket' : rounds[runde ?? ''] ?? 'Gründerinnen-Community'
  return <Html lang="de"><Head /><Preview>Neue Club-Registrierung</Preview><Body style={main}>
    <Container style={container}><Heading>Neue Club-Registrierung</Heading>
      <Text>{list}</Text>
      <Text>Name: {name || 'Nicht angegeben'}<br />E-Mail: {email}<br />Runde: {runde || 'Starterpaket'}</Text>
    </Container></Body></Html>
}
export const template = {
  component: Email, subject: 'Neue Club-Registrierung', to: 'ai.noobclub@humint.site',
  displayName: 'Club signup notice to Dina', previewData: { name: 'Test', email: 'test@example.com', source: 'community', runde: 'beta' },
} satisfies TemplateEntry
const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif', color: '#1F2A44' }
const container = { padding: '28px 26px', maxWidth: '560px' }
