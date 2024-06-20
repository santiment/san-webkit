import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
import type { Builder } from 'bits-ui';
declare const __propDef: {
    props: {
        builder: Builder;
        children: (this: void, args_0: {
            ref: import("svelte-runes").SS<HTMLElement | null>;
        }) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
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
        children: (this: void, args_0: {
            ref: import("svelte-runes").SS<HTMLElement | null>;
        }) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
    }>);
    $$bindings: "";
}
export {};
