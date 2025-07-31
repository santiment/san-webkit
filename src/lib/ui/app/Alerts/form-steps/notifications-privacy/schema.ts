import type { TApiAlert } from '../../types.js'

import { getTimeFromApi, type TTimeWindow } from '../../time.js'
import { getChannelFromApi, reduceChannelToApi, type TChannel } from '../../channels.js'
import { createStepSchema, type TStepBaseSchema } from '../types.js'
import Form from './ui/index.svelte'
import Legend from './ui/Legend.svelte'

export type TNotificationsState = {
  channel: TChannel
  isPublic: boolean
  isRepeating: boolean
  cooldown: TTimeWindow
}

export type TBaseSchema = TStepBaseSchema<'notifications-privacy', TApiAlert, TNotificationsState>

export const STEP_NOTIFICATIONS_PRIVACY_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'notifications-privacy',

  ui: {
    title: 'Set up Notifications and Privacy',
    label: 'Notification & Privacy',
    description: 'Choose one or multiple alert methods',

    Form,
    Legend,
  },

  initState(apiAlert) {
    return {
      channel: getChannelFromApi(apiAlert?.settings?.channel) ?? {},
      isPublic: apiAlert?.isPublic ?? false,
      isRepeating: apiAlert?.isRepeating ?? true,
      cooldown: apiAlert?.cooldown ? getTimeFromApi(apiAlert.cooldown) : '1d',
    }
  },

  validate(state) {
    return Object.values(state.channel).some((value) => !!value)
  },

  reduceToApi: ({ channel, isRepeating, isPublic, cooldown }) => ({
    isPublic,
    isRepeating,
    cooldown,
    settings: {
      channel: reduceChannelToApi(channel),
    },
  }),
})
