import { type Snippet } from 'svelte';
import { createChart } from '@santiment-network/chart-next';
import { type TMode } from './types.js';
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
    /**
     * DRAG, SHIFT, ZOOM
     */
    mode?: TMode;
    class?: string;
    watermark?: boolean;
    watermarkOpacity?: string;
    options?: Parameters<typeof createChart>[1];
    onRangeSelectChange: (start: import("@santiment-network/chart-next").MouseEventParams<import("@santiment-network/chart-next").Time>, end: import("@santiment-network/chart-next").MouseEventParams<import("@santiment-network/chart-next").Time>) => void;
    onRangeSelectEnd: (start: import("@santiment-network/chart-next").MouseEventParams<import("@santiment-network/chart-next").Time>, end: import("@santiment-network/chart-next").MouseEventParams<import("@santiment-network/chart-next").Time>) => void;
    children: Snippet;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "mode">;
type Chart = InstanceType<typeof Chart>;
export default Chart;
