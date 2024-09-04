import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        isActive?: boolean;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponent<CheckboxProps, CheckboxEvents, CheckboxSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        isActive?: boolean;
        class?: string;
    }>);
    $$bindings: "";
}
export {};
