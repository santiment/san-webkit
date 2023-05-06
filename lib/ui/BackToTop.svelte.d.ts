/** @typedef {typeof __propDef.props}  BackToTopProps */
/** @typedef {typeof __propDef.events}  BackToTopEvents */
/** @typedef {typeof __propDef.slots}  BackToTopSlots */
export default class BackToTop extends SvelteComponentTyped<{
    options?: {
        rootMargin: string;
    } | undefined;
    class?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BackToTopProps = typeof __propDef.props;
export type BackToTopEvents = typeof __propDef.events;
export type BackToTopSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: {
            rootMargin: string;
        } | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
