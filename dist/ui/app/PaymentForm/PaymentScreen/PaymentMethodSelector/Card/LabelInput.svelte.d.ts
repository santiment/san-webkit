import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: import("svelte/elements").HTMLInputAttributes & {
        class?: string;
        type?: "text" | "number";
        placeholder?: string;
        icon?: string;
        iconSize?: number | string;
        inputClass?: string;
        right?: import("svelte").Snippet;
    } & {
        label: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LabelInputProps = typeof __propDef.props;
export type LabelInputEvents = typeof __propDef.events;
export type LabelInputSlots = typeof __propDef.slots;
export default class LabelInput extends SvelteComponent<LabelInputProps, LabelInputEvents, LabelInputSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<import("svelte/elements").HTMLInputAttributes & {
        class?: string;
        type?: "text" | "number";
        placeholder?: string;
        icon?: string;
        iconSize?: number | string;
        inputClass?: string;
        right?: import("svelte").Snippet;
    } & {
        label: string;
    }>);
    $$bindings: "";
}
export {};
