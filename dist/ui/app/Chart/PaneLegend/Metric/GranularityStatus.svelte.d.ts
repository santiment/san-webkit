import type { TSeries } from '../../ctx/series.svelte.js';
type TProps = {
    metric: TSeries;
};
declare const GranularityStatus: import("svelte").Component<TProps, {}, "">;
type GranularityStatus = ReturnType<typeof GranularityStatus>;
export default GranularityStatus;
