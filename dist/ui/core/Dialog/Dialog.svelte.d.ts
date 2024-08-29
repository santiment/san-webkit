import { SvelteComponent } from "svelte";
import { type Snippet } from 'svelte';
declare const __propDef: {
    props: {
        class?: string;
        children: Snippet<[{
            close: () => void;
        }]>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponent<DialogProps, DialogEvents, DialogSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string;
        children: Snippet<[{
            close: () => void;
        }]>;
    }>);
    $$bindings: "";
}
export {};
