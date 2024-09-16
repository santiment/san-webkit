import { SvelteComponent } from "svelte";
import { type Snippet } from 'svelte';
import { type CreateTooltipProps } from '@melt-ui/svelte';
declare const __propDef: {
    props: {
        class?: string;
        noStyles?: boolean;
        isOpened?: boolean;
        children: Snippet<[{
            ref: import("svelte-runes").SS<HTMLElement | null>;
        }]>;
        content: Snippet<[{
            close: () => void;
        }]>;
        position?: NonNullable<CreateTooltipProps["positioning"]>["placement"];
    } & Omit<CreateTooltipProps, "positioning">;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
export default class Tooltip extends SvelteComponent<TooltipProps, TooltipEvents, TooltipSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string;
        noStyles?: boolean;
        isOpened?: boolean;
        children: Snippet<[{
            ref: import("svelte-runes").SS<HTMLElement | null>;
        }]>;
        content: Snippet<[{
            close: () => void;
        }]>;
        position?: NonNullable<CreateTooltipProps["positioning"]>["placement"];
    } & Omit<CreateTooltipProps, "positioning">>);
    $$bindings: "";
}
export {};
