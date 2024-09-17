import type { Snippet } from 'svelte';
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
declare const MobileDrawer: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    close: () => void;
    children: Snippet<[{
        close: () => void;
    }]>;
    isNested?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type MobileDrawer = InstanceType<typeof MobileDrawer>;
export default MobileDrawer;
