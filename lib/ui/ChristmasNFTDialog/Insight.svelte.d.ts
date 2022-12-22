import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type InsightProps = typeof __propDef.props;
export declare type InsightEvents = typeof __propDef.events;
export declare type InsightSlots = typeof __propDef.slots;
export default class Insight extends SvelteComponentTyped<InsightProps, InsightEvents, InsightSlots> {
}
export {};
