import { SvelteComponent } from "svelte";
import { type TPlanBillingGroup } from './api.js';
declare const __propDef: {
    props: {
        billingGroup: TPlanBillingGroup[string];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlanCardProps = typeof __propDef.props;
export type PlanCardEvents = typeof __propDef.events;
export type PlanCardSlots = typeof __propDef.slots;
export default class PlanCard extends SvelteComponent<PlanCardProps, PlanCardEvents, PlanCardSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        billingGroup: TPlanBillingGroup[string];
    }>);
    $$bindings: "";
}
export {};
