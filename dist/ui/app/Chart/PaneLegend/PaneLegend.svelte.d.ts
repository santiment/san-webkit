import type { Snippet } from 'svelte';
import type { IPaneApi, Time } from '@santiment-network/chart-next';
import type { TSeries } from '../ctx/series.svelte.js';
type TProps = {
    class?: string;
    children: Snippet<[{
        pane: IPaneApi<Time>;
        metrics: Set<TSeries>;
        index: number;
    }]>;
};
declare const PaneLegend: import("svelte").Component<TProps, {}, "">;
type PaneLegend = ReturnType<typeof PaneLegend>;
export default PaneLegend;
