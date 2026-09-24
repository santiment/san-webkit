import type { Snippet } from 'svelte';
import type { TSeries } from '../ctx/series.svelte.js';
type TProps = {
    class?: string;
    children: Snippet<[{
        metrics: TSeries[];
        index: number;
    }]>;
};
declare const PaneLegend: import("svelte").Component<TProps, {}, "">;
type PaneLegend = ReturnType<typeof PaneLegend>;
export default PaneLegend;
