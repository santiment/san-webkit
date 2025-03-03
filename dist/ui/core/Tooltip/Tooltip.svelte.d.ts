import { type Snippet } from 'svelte';
import { type CreateTooltipProps } from '@melt-ui/svelte';
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
declare const Tooltip: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    noStyles?: boolean;
    isOpened?: boolean;
    type?: "plain" | "arrow";
    children: Snippet<[{
        ref: import("svelte-runes").SS<HTMLElement | null>;
    }]>;
    content: Snippet<[{
        close: () => void;
    }]>;
    position?: NonNullable<CreateTooltipProps["positioning"]>["placement"];
} & Omit<CreateTooltipProps, "positioning">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Tooltip = InstanceType<typeof Tooltip>;
export default Tooltip;
