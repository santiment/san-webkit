import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        children: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type OnlyAnnualMethodProps = typeof __propDef.props;
export type OnlyAnnualMethodEvents = typeof __propDef.events;
export type OnlyAnnualMethodSlots = typeof __propDef.slots;
export default class OnlyAnnualMethod extends SvelteComponent<OnlyAnnualMethodProps, OnlyAnnualMethodEvents, OnlyAnnualMethodSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        children: Snippet;
    }>);
    $$bindings: "";
}
export {};
