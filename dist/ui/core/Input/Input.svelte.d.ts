import { SvelteComponent } from "svelte";
import type { HTMLInputAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLInputAttributes & {
        class?: string | undefined;
        type?: "number" | "text" | undefined;
        placeholder?: string | undefined;
        icon?: string | undefined;
        iconSize?: string | number | undefined;
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
        class?: string | undefined;
        type?: "number" | "text" | undefined;
        placeholder?: string | undefined;
        icon?: string | undefined;
        iconSize?: string | number | undefined;
    }>);
    $$bindings: "";
}
export {};
