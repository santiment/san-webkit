import { SvelteComponent } from "svelte";
import { SCREENS } from './state.js';
declare const __propDef: {
    props: {
        disabled?: (typeof SCREENS)[number];
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
        disabled?: (typeof SCREENS)[number];
    }>);
    $$bindings: "";
}
export {};
