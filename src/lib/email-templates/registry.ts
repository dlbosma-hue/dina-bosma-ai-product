import type { ComponentType } from 'react'
import { template as waitlistConfirmation } from './waitlist-confirmation'
import { template as signupConfirmation } from './signup-confirmation'
import { template as signupNotification } from './signup-notification'

export interface TemplateEntry {
  component: ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  /** Fixed recipient — overrides caller-provided recipientEmail when set. */
  to?: string
}

/**
 * Template registry — maps template names to their React Email components.
 * Import and register new templates here after creating them in this directory.
 */
export const TEMPLATES: Record<string, TemplateEntry> = {
  'waitlist-confirmation': waitlistConfirmation,
  'signup-confirmation': signupConfirmation,
  'signup-notification': signupNotification,
}
