import { parseRangeString } from '../../../../../utils/dates/index.js';
import { exactObjectKeys } from '../../../../../utils/object.js';
import { TimeModifiers } from '../../time.js';
export function describeNotifications(notificationStep) {
    const { channel, cooldown: rawCooldown } = notificationStep;
    const cooldown = parseRangeString(rawCooldown);
    const timeModifier = TimeModifiers[cooldown.modifier].label.toLowerCase();
    return `Send me notifications every ${cooldown.amount} ${timeModifier} via ${formatChannels(channel)}.`;
}
export function formatChannels(channels) {
    return exactObjectKeys(channels)
        .filter((channel) => !!channels[channel])
        .join(', ');
}
