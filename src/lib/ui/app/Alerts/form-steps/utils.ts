import type { TNotificationsState } from './notifications-privacy/schema.js'

import { parseRangeString } from '$lib/utils/dates/index.js'
import { exactObjectKeys } from '$lib/utils/object.js'

import { TimeModifiers } from '../time.js'

export function describeNotifications(notificationStep: TNotificationsState) {
  const { channel: channels, cooldown: rawCooldown } = notificationStep

  const cooldown = parseRangeString(rawCooldown)
  const timeModifier = TimeModifiers[cooldown.modifier].label.toLowerCase()

  const channelsString = exactObjectKeys(channels)
    .filter((channel) => !!channels[channel])
    .join(', ')

  return `Send me notifications every ${cooldown.amount} ${timeModifier} via ${channelsString}.`
}
