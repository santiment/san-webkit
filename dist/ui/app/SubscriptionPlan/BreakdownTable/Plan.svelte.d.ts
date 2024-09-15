import { SvelteComponent } from "svelte";
import type { TSubscriptionPlan } from '../types.js';
declare const __propDef: {
    props: {
        plan: TSubscriptionPlan;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlanProps = typeof __propDef.props;
export type PlanEvents = typeof __propDef.events;
export type PlanSlots = typeof __propDef.slots;
export default class Plan extends SvelteComponent<PlanProps, PlanEvents, PlanSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        plan: TSubscriptionPlan;
        class?: string;
    }>);
    $$bindings: "";
}
export {};
