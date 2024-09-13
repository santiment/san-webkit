import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        src?: null | string;
        alt?: string;
        class?: string;
        children: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PictureProps = typeof __propDef.props;
export type PictureEvents = typeof __propDef.events;
export type PictureSlots = typeof __propDef.slots;
export default class Picture extends SvelteComponent<PictureProps, PictureEvents, PictureSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        src?: null | string;
        alt?: string;
        class?: string;
        children: Snippet;
    }>);
    $$bindings: "";
}
export {};
