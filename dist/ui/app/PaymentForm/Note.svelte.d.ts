import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        class?: string;
        children: Snippet;
        dark?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NoteProps = typeof __propDef.props;
export type NoteEvents = typeof __propDef.events;
export type NoteSlots = typeof __propDef.slots;
export default class Note extends SvelteComponent<NoteProps, NoteEvents, NoteSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string;
        children: Snippet;
        dark?: boolean;
    }>);
    $$bindings: "";
}
export {};
