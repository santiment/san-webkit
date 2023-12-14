/** @typedef {typeof __propDef.props}  TopProps */
/** @typedef {typeof __propDef.events}  TopEvents */
/** @typedef {typeof __propDef.slots}  TopSlots */
export default class Top extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TopProps = typeof __propDef.props;
export type TopEvents = typeof __propDef.events;
export type TopSlots = typeof __propDef.slots;
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
