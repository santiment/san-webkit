import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        onPlanSelect: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponent<IndexProps, IndexEvents, IndexSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        onPlanSelect: () => void;
    }>);
    $$bindings: "";
}
export {};
