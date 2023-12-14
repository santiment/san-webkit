/** @typedef {typeof __propDef.props}  ViewportObserverProps */
/** @typedef {typeof __propDef.events}  ViewportObserverEvents */
/** @typedef {typeof __propDef.slots}  ViewportObserverSlots */
export default class ViewportObserver extends SvelteComponentTyped<{
    options: any;
    top?: boolean | undefined;
    isObserving?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ViewportObserverProps = typeof __propDef.props;
export type ViewportObserverEvents = typeof __propDef.events;
export type ViewportObserverSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options: any;
        top?: boolean | undefined;
        isObserving?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
