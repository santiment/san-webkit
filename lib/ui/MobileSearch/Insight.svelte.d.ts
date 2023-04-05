import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        item: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InsightProps = typeof __propDef.props;
export type InsightEvents = typeof __propDef.events;
export type InsightSlots = typeof __propDef.slots;
export default class Insight extends SvelteComponentTyped<InsightProps, InsightEvents, InsightSlots> {
}
export {};
