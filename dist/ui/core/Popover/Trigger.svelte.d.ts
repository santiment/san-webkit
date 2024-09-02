import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
import type { Builder } from 'bits-ui';
declare const __propDef: {
    props: {
        builder: Builder;
        children: Snippet<[{
            ref: import("svelte-runes").SS<HTMLElement | null>;
        }]>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TriggerProps = typeof __propDef.props;
export type TriggerEvents = typeof __propDef.events;
export type TriggerSlots = typeof __propDef.slots;
export default class Trigger extends SvelteComponent<TriggerProps, TriggerEvents, TriggerSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        builder: Builder;
        children: Snippet<[{
            ref: import("svelte-runes").SS<HTMLElement | null>;
        }]>;
    }>);
    $$bindings: "";
}
export {};
