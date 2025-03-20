import type { TApiAlert } from '../../types.js'

import { createStepSchema, type TStepBaseSchema } from '../types.js'
import Form from './ui/index.svelte'

export type TBaseSchema = TStepBaseSchema<
  'notifications-privacy',
  {
    initState: (apiAlert?: null | TApiAlert) => {
      channel: string[]
      isPublic: boolean
    }
  }
>

export const STEP_NOTIFICATIONS_PRIVACY_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'notifications-privacy',

  ui: {
    title: 'Set up Notifications and Privacy',
    label: 'Notification & Privacy',
    description: 'Choose one or multiple alert methods',

    Form,
  },

  initState() {
    return { channel: [], isPublic: false }
  },

  validate(state) {
    return state.channel.length > 0
  },
})
