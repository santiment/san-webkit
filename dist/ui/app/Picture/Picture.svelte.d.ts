import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        src: string;
        class?: string | undefined;
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
        src: string;
        class?: string | undefined;
        children: (this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
    }>);
    $$bindings: "";
}
export {};
