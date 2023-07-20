/** @typedef {typeof __propDef.props}  SlidesProps */
/** @typedef {typeof __propDef.events}  SlidesEvents */
/** @typedef {typeof __propDef.slots}  SlidesSlots */
export default class Slides extends SvelteComponentTyped<{
    amount?: number | undefined;
    class?: string | undefined;
    active?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SlidesProps = typeof __propDef.props;
export type SlidesEvents = typeof __propDef.events;
export type SlidesSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        amount?: number | undefined;
        class?: string | undefined;
        active?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
