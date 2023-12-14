/** @typedef {typeof __propDef.props}  GoogleProps */
/** @typedef {typeof __propDef.events}  GoogleEvents */
/** @typedef {typeof __propDef.slots}  GoogleSlots */
export default class Google extends SvelteComponentTyped<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GoogleProps = typeof __propDef.props;
export type GoogleEvents = typeof __propDef.events;
export type GoogleSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
