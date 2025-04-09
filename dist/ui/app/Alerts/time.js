import { keyify } from '../../../utils/object.js';
export const TimeModifiers = keyify({
    m: { frequencyLabel: 'Minutely', name: 'minute' },
    h: { frequencyLabel: 'Hourly', name: 'hour' },
    d: { frequencyLabel: 'Daily', name: 'day' },
    w: { frequencyLabel: 'Weekly', name: 'week' },
});
