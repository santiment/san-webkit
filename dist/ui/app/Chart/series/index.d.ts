import type { TMetricData } from '../api/index.js';
export { default as RawSeries } from './RawSeries.svelte';
export { default as ApiMetricSeries } from './ApiMetricSeries.svelte';
export { default as ApiSignalSeries } from './ApiSignalSeries.svelte';
export declare function calculateDataInterval(timeseries: TMetricData): `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
