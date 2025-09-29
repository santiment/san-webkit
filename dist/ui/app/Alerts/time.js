import { parseRangeString } from '../../../utils/dates/index.js';
import { keyify } from '../../../utils/object.js';
export const TimeModifiers = keyify({
    m: { label: 'Minute(s)', name: 'minute' },
    h: { label: 'Hour(s)', name: 'hour' },
    d: { label: 'Day(s)', name: 'day' },
});
export function getTimeFromApi(timeSetting) {
    const { amount, modifier } = parseRangeString(timeSetting);
    if (modifier === 'w')
        return `${amount * 7}d`;
    return `${amount}${modifier}`;
}
