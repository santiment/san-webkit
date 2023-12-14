/** @typedef {typeof __propDef.props}  PlayerProps */
/** @typedef {typeof __propDef.events}  PlayerEvents */
/** @typedef {typeof __propDef.slots}  PlayerSlots */
export default class Player extends SvelteComponentTyped<{
    value: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PlayerProps = typeof __propDef.props;
export type PlayerEvents = typeof __propDef.events;
export type PlayerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
