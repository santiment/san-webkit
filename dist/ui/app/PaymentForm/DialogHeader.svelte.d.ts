import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        screens: string[];
        active: string;
        disabled?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DialogHeaderProps = typeof __propDef.props;
export type DialogHeaderEvents = typeof __propDef.events;
export type DialogHeaderSlots = typeof __propDef.slots;
export default class DialogHeader extends SvelteComponent<DialogHeaderProps, DialogHeaderEvents, DialogHeaderSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        screens: string[];
        active: string;
        disabled?: string;
    }>);
    $$bindings: "active";
}
export {};
