import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        name: string;
        img: string;
        noteSnippet?: Snippet;
        children: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DescriptionProps = typeof __propDef.props;
export type DescriptionEvents = typeof __propDef.events;
export type DescriptionSlots = typeof __propDef.slots;
export default class Description extends SvelteComponent<DescriptionProps, DescriptionEvents, DescriptionSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        name: string;
        img: string;
        noteSnippet?: Snippet;
        children: Snippet;
    }>);
    $$bindings: "";
}
export {};
