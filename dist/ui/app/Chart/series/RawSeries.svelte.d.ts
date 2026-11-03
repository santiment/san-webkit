import type { TSeries } from '../ctx/series.svelte.js';
type TProps = {
    series: TSeries;
};
declare const RawSeries: import("svelte").Component<TProps, {}, "">;
type RawSeries = ReturnType<typeof RawSeries>;
export default RawSeries;
