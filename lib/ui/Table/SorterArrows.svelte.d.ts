/** @typedef {typeof __propDef.props}  SorterArrowsProps */
/** @typedef {typeof __propDef.events}  SorterArrowsEvents */
/** @typedef {typeof __propDef.slots}  SorterArrowsSlots */
export default class SorterArrows extends SvelteComponentTyped<{
    isAscending?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SorterArrowsProps = typeof __propDef.props;
export type SorterArrowsEvents = typeof __propDef.events;
export type SorterArrowsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isAscending?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
