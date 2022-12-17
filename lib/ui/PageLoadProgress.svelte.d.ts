/** @typedef {typeof __propDef.props}  PageLoadProgressProps */
/** @typedef {typeof __propDef.events}  PageLoadProgressEvents */
/** @typedef {typeof __propDef.slots}  PageLoadProgressSlots */
export default class PageLoadProgress extends SvelteComponentTyped<{
    preloading: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PageLoadProgressProps = typeof __propDef.props;
export type PageLoadProgressEvents = typeof __propDef.events;
export type PageLoadProgressSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        preloading: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
