import { onMount, untrack } from 'svelte';
import { createCtx } from '../../utils/index.js';
import { useTimeZoneCtx } from './timezone.svelte.js';
export const useClockCtx = createCtx('utils_useClockCtx', () => {
    const { timeZone, applyTimeZoneOffset } = useTimeZoneCtx();
    let date = $state.raw(new Date());
    let time = $state(createTime(date));
    function updateClock() {
        const offset = timeZone.$?.utcMinutesOffset || 0;
        untrack(() => {
            date = applyTimeZoneOffset(new Date(), offset);
            time = createTime(date);
        });
    }
    $effect.pre(updateClock);
    onMount(() => {
        function onVisibilityChange() {
            if (document.hidden)
                return;
            updateClock();
        }
        const interval = setInterval(() => {
            if (++time[2] === 60) {
                time[2] = 0;
                if (++time[1] === 60) {
                    time[1] = 0;
                    if (++time[0] === 24) {
                        time[0] = 0;
                    }
                }
            }
        }, 1000);
        document.addEventListener('visibilitychange', onVisibilityChange);
        return () => {
            clearInterval(interval);
            document.removeEventListener('visibilitychange', onVisibilityChange);
        };
    });
    return {
        time: {
            get $() {
                return `${pad(time[0])}:${pad(time[1])}:${pad(time[2])} (${timeZone.utcLabel$})`;
            },
        },
    };
});
function pad(value) {
    return value.toString().padStart(2, '0');
}
function createTime(date) {
    return [date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()];
}
