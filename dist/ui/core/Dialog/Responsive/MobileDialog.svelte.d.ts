import type { ComponentProps } from 'svelte';
import MobileDrawer from './MobileDrawer.svelte';
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
declare const MobileDialog: $$__sveltets_2_IsomorphicComponent<Pick<{
    class?: string;
    close: () => void;
    children: import("svelte").Snippet<[{
        close: () => void;
    }]>;
    isNested?: boolean;
}, "close" | "class" | "children"> & {
    onClose: ComponentProps<MobileDrawer>["close"];
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type MobileDialog = InstanceType<typeof MobileDialog>;
export default MobileDialog;
