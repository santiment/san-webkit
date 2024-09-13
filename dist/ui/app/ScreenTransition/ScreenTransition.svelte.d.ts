import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        class?: string;
        children: Snippet;
        style?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScreenTransitionProps = typeof __propDef.props;
export type ScreenTransitionEvents = typeof __propDef.events;
export type ScreenTransitionSlots = typeof __propDef.slots;
export default class ScreenTransition extends SvelteComponent<ScreenTransitionProps, ScreenTransitionEvents, ScreenTransitionSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string;
        children: Snippet;
        style?: string;
    }>);
    $$bindings: "";
}
export {};
