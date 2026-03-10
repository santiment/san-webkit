import type { TSeries } from '../ctx/series.svelte.js';
type TProps = {
    series: TSeries;
    index: number;
};
declare const ApiMetricSeries: import("svelte").Component<TProps, {}, "">;
type ApiMetricSeries = ReturnType<typeof ApiMetricSeries>;
export default ApiMetricSeries;
