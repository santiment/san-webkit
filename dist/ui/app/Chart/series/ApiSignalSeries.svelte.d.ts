import type { TSeries } from '../ctx/series.svelte.js';
type TProps = {
    series: TSeries;
    priceSeries: TSeries;
    index: number;
};
declare const ApiSignalSeries: import("svelte").Component<TProps, {}, "">;
type ApiSignalSeries = ReturnType<typeof ApiSignalSeries>;
export default ApiSignalSeries;
