/** @typedef {typeof __propDef.props}  RangeProps */
/** @typedef {typeof __propDef.events}  RangeEvents */
/** @typedef {typeof __propDef.slots}  RangeSlots */
export default class Range extends SvelteComponentTyped<{
    class?: string | undefined;
    items?: any[] | undefined;
    selectedIndex?: number | undefined;
    onChange?: ((value: any) => void) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RangeProps = typeof __propDef.props;
export type RangeEvents = typeof __propDef.events;
export type RangeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        items?: any[] | undefined;
        selectedIndex?: number | undefined;
        onChange?: ((value: any) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
