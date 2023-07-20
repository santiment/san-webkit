/** @typedef {typeof __propDef.props}  CheckmarkProps */
/** @typedef {typeof __propDef.events}  CheckmarkEvents */
/** @typedef {typeof __propDef.slots}  CheckmarkSlots */
export default class Checkmark extends SvelteComponentTyped<{
    class?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CheckmarkProps = typeof __propDef.props;
export type CheckmarkEvents = typeof __propDef.events;
export type CheckmarkSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
