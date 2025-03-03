import type { Snippet } from 'svelte';
import { Popover, type PopoverContentProps, type PopoverRootProps, type PopoverTriggerProps } from 'bits-ui';
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
    children?: PopoverTriggerProps["child"];
    content: Snippet<[{
        close: () => void;
    }]>;
    noStyles?: boolean;
    isOpened?: boolean;
    align?: PopoverContentProps["align"];
    side?: PopoverContentProps["side"];
    rootProps?: PopoverRootProps;
    contentProps?: PopoverContentProps;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "isOpened">;
type Popover = InstanceType<typeof Popover>;
export default Popover;
