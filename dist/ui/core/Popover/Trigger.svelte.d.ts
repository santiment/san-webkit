import type { Snippet } from 'svelte';
import type { Builder } from 'bits-ui';
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
declare const Trigger: $$__sveltets_2_IsomorphicComponent<{
    builder: Builder;
    children: Snippet<[{
        ref: import("svelte-runes").SS<HTMLElement | null>;
    }]>;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Trigger = InstanceType<typeof Trigger>;
export default Trigger;
