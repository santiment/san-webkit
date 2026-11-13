import { TimeZones } from '../../utils/dates/timezone.js';
import { createCtx } from '../../utils/index.js';
import { useUiCtx } from '../ui/index.js';
export const useTimeZoneCtx = createCtx('webkit_useTimeZoneCtx', () => {
    const { ui } = useUiCtx.get();
    const timeZone = $derived(TimeZones[ui.$$.timeZone]);
    const utcLabel = $derived(timeZone?.utcLabel || 'UTC');
    function applyTimeZoneOffset(date, utcMinutesOffset = timeZone?.utcMinutesOffset || 0) {
        date.setUTCMinutes(date.getUTCMinutes() + utcMinutesOffset);
        return date;
    }
    return {
        timeZone: {
            get $() {
                return timeZone;
            },
            get utcLabel$() {
                return utcLabel;
            },
        },
        applyTimeZoneOffset,
    };
});
