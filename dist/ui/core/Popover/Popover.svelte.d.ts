import { SvelteComponent } from "svelte";
import type { ComponentProps, Snippet } from 'svelte';
import Trigger from './Trigger.svelte';
declare const __propDef: {
    props: {
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
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PopoverProps = typeof __propDef.props;
export type PopoverEvents = typeof __propDef.events;
export type PopoverSlots = typeof __propDef.slots;
export default class Popover extends SvelteComponent<PopoverProps, PopoverEvents, PopoverSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
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
    }>);
    $$bindings: "";
}
export {};
