import { SvelteComponent } from "svelte";
import type { TSubscriptionPlan } from '../types.js';
declare const __propDef: {
    props: {
        class?: string;
        plans: TSubscriptionPlan[];
        isConsumerPlans?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponent<IndexProps, IndexEvents, IndexSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string;
        plans: TSubscriptionPlan[];
        isConsumerPlans?: boolean;
    }>);
    $$bindings: "";
}
export {};
