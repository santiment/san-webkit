/** @typedef {typeof __propDef.props}  BackgroundProps */
/** @typedef {typeof __propDef.events}  BackgroundEvents */
/** @typedef {typeof __propDef.slots}  BackgroundSlots */
export default class Background extends SvelteComponentTyped<{
    rect: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BackgroundProps = typeof __propDef.props;
export type BackgroundEvents = typeof __propDef.events;
export type BackgroundSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        rect: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
