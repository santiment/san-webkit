import type { TTimeWindow } from '../../time.js'
import type { TApiAlert } from '../../types.js'

import { getChannelFromApi, reduceChannelToApi, type TChannel } from '../../channels.js'
import { createStepSchema, type TStepBaseSchema } from '../types.js'
import Form from './ui/index.svelte'

export type TBaseSchema = TStepBaseSchema<
  'notifications-privacy',
  {
    initState: (apiAlert?: null | TApiAlert<unknown>) => {
      channel: TChannel
      isPublic: boolean
      isRepeating: boolean
      cooldown: TTimeWindow
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

  initState(apiAlert) {
    return {
      channel: getChannelFromApi(apiAlert?.settings?.channel) ?? {},
      isPublic: apiAlert?.isPublic ?? false,
      isRepeating: apiAlert?.isRepeating ?? true,
      cooldown: apiAlert?.cooldown ?? '1d',
    }
  },

  validate(state) {
    return Object.values(state.channel).some((value) => !!value)
  },

  reduceToApi(apiAlert, state) {
    const { channel, ...rest } = state

    Object.assign(apiAlert, rest)
    Object.assign(apiAlert.settings, { channel: reduceChannelToApi(channel) })

    return apiAlert
  },
})
