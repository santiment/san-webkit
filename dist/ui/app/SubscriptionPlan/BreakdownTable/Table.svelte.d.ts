import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
import { CONSUMER_PLANS_BREAKDOWN, BUSINESS_PLANS_BREAKDOWN } from './breakdown.js';
declare const __propDef: {
    props: {
        plans: Record<string, any>[];
        breakdown: typeof CONSUMER_PLANS_BREAKDOWN | typeof BUSINESS_PLANS_BREAKDOWN;
        children: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
export default class Table extends SvelteComponent<TableProps, TableEvents, TableSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        plans: Record<string, any>[];
        breakdown: typeof CONSUMER_PLANS_BREAKDOWN | typeof BUSINESS_PLANS_BREAKDOWN;
        children: Snippet;
    }>);
    $$bindings: "";
}
export {};
