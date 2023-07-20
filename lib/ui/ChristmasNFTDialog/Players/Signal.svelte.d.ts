/** @typedef {typeof __propDef.props}  SignalProps */
/** @typedef {typeof __propDef.events}  SignalEvents */
/** @typedef {typeof __propDef.slots}  SignalSlots */
export default class Signal extends SvelteComponentTyped<{
    item: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SignalProps = typeof __propDef.props;
export type SignalEvents = typeof __propDef.events;
export type SignalSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        item: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
