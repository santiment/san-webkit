import type { ComponentProps, Snippet } from 'svelte';
import { Popover } from 'bits-ui';
import Trigger from './Trigger.svelte';
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
declare const Popover: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    children: ComponentProps<Trigger>["children"];
    content: Snippet<[{
        close: () => void;
    }]>;
    noStyles?: boolean;
    align?: Popover.ContentProps["align"];
    side?: Popover.ContentProps["side"];
    rootProps?: Popover.Props;
    triggerProps?: Popover.TriggerProps;
    contentProps?: Popover.ContentProps;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Popover = InstanceType<typeof Popover>;
export default Popover;
