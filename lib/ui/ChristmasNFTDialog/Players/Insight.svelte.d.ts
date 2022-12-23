/** @typedef {typeof __propDef.props}  InsightProps */
/** @typedef {typeof __propDef.events}  InsightEvents */
/** @typedef {typeof __propDef.slots}  InsightSlots */
export default class Insight extends SvelteComponentTyped<{
    value: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InsightProps = typeof __propDef.props;
export type InsightEvents = typeof __propDef.events;
export type InsightSlots = typeof __propDef.slots;
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
