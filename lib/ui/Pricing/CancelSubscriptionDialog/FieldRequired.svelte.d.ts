/** @typedef {typeof __propDef.props}  FieldRequiredProps */
/** @typedef {typeof __propDef.events}  FieldRequiredEvents */
/** @typedef {typeof __propDef.slots}  FieldRequiredSlots */
export default class FieldRequired extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FieldRequiredProps = typeof __propDef.props;
export type FieldRequiredEvents = typeof __propDef.events;
export type FieldRequiredSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
