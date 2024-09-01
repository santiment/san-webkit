import { SvelteComponent } from "svelte";
import type { HTMLInputAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: HTMLInputAttributes & {
        class?: string;
        type?: "text" | "number";
        placeholder?: string;
        icon?: string;
        iconSize?: number | string;
        inputClass?: string;
        right?: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<HTMLInputAttributes & {
        class?: string;
        type?: "text" | "number";
        placeholder?: string;
        icon?: string;
        iconSize?: number | string;
        inputClass?: string;
        right?: Snippet;
    }>);
    $$bindings: "";
}
export {};
