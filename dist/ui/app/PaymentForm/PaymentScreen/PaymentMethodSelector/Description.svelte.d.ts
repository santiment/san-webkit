import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        name: unknown;
        img: unknown;
        children: unknown;
        noteSnippet: unknown;
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
        name: unknown;
        img: unknown;
        children: unknown;
        noteSnippet: unknown;
    }>);
    $$bindings: "";
}
export {};
