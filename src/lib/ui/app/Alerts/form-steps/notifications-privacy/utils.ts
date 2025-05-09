import type { TNotificationsState } from './schema.js'
import type { TChannel } from '../../channels.js'

import { parseRangeString } from '$lib/utils/dates/index.js'
import { exactObjectKeys } from '$lib/utils/object.js'

import { TimeModifiers } from '../../time.js'

export function describeNotifications(notificationStep: TNotificationsState) {
  const { channel, cooldown: rawCooldown } = notificationStep

  const cooldown = parseRangeString(rawCooldown)
  const timeModifier = TimeModifiers[cooldown.modifier].label.toLowerCase()

  return `Send me notifications every ${cooldown.amount} ${timeModifier} via ${formatChannels(channel)}.`
}

export function formatChannels(channels: TChannel) {
  return exactObjectKeys(channels)
    .filter((channel) => !!channels[channel])
    .join(', ')
}
