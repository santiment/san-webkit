import type { TSeries } from '../ctx/series.svelte.js';
type TProps = {
    series: TSeries;
    priceSeries: TSeries;
};
declare const RawSignalSeries: import("svelte").Component<TProps, {}, "">;
type RawSignalSeries = ReturnType<typeof RawSignalSeries>;
export default RawSignalSeries;
