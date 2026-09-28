import { formatTimestampToRangeString } from '../../../../utils/dates/index.js';
export { default as RawSeries } from './RawSeries.svelte';
export { default as ApiMetricSeries } from './ApiMetricSeries.svelte';
export { default as ApiSignalSeries } from './ApiSignalSeries.svelte';
export function calculateDataInterval(timeseries) {
    if (!timeseries.length) {
        return;
    }
    const granularityTimestamp = (timeseries.at(-1)?.time ?? 0) - (timeseries.at(-2)?.time ?? 0);
    return formatTimestampToRangeString(granularityTimestamp * 1000);
}
