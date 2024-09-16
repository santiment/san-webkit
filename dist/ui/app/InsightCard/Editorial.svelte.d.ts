import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        userId: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EditorialProps = typeof __propDef.props;
export type EditorialEvents = typeof __propDef.events;
export type EditorialSlots = typeof __propDef.slots;
export default class Editorial extends SvelteComponent<EditorialProps, EditorialEvents, EditorialSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        userId: number;
    }>);
    $$bindings: "";
}
export {};
