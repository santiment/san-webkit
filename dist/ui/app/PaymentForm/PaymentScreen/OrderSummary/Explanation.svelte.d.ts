import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        price?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ExplanationProps = typeof __propDef.props;
export type ExplanationEvents = typeof __propDef.events;
export type ExplanationSlots = typeof __propDef.slots;
export default class Explanation extends SvelteComponent<ExplanationProps, ExplanationEvents, ExplanationSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        price?: number;
    }>);
    $$bindings: "";
}
export {};
