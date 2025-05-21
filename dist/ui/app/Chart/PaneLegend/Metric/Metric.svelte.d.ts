import type { Snippet } from 'svelte';
import type { TSeries } from '../../ctx/series.svelte.js';
type TProps = {
    metric: TSeries;
    label?: Snippet<[TSeries]>;
};
declare const Metric: import("svelte").Component<TProps, {}, "">;
type Metric = ReturnType<typeof Metric>;
export default Metric;
