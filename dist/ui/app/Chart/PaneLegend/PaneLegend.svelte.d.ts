import type { Snippet } from 'svelte';
import type { IPaneApi, Time } from '@santiment-network/chart-next';
import type { TSeries } from '../ctx/series.svelte.js';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const PaneLegend: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    children: Snippet<[{
        pane: IPaneApi<Time>;
        metrics: Set<TSeries>;
        index: number;
    }]>;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type PaneLegend = InstanceType<typeof PaneLegend>;
export default PaneLegend;
