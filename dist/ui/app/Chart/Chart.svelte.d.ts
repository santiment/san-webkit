import { type Snippet } from 'svelte';
import { createChart } from '@santiment-network/chart-next';
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
declare const Chart: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    watermark?: boolean;
    watermarkOpacity?: string;
    options?: Parameters<typeof createChart>[1];
    children: Snippet;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Chart = InstanceType<typeof Chart>;
export default Chart;
