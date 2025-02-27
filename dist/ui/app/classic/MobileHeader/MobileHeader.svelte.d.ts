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
declare const MobileHeader: $$__sveltets_2_IsomorphicComponent<{
    title?: string;
    left?: Snippet;
    right?: Snippet;
    share?: Snippet;
    onSearchClick?: () => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type MobileHeader = InstanceType<typeof MobileHeader>;
export default MobileHeader;
