/** @typedef {typeof __propDef.props}  ItemProps */
/** @typedef {typeof __propDef.events}  ItemEvents */
/** @typedef {typeof __propDef.slots}  ItemSlots */
export default class Item extends SvelteComponentTyped<{
    i: any;
    notification: any;
    parentNode: any;
    notifications: any;
    offset?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ItemProps = typeof __propDef.props;
export type ItemEvents = typeof __propDef.events;
export type ItemSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        i: any;
        notification: any;
        parentNode: any;
        notifications: any;
        offset?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
