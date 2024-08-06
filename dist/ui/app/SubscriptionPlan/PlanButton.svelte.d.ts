import { SvelteComponent } from "svelte";
import type { TSubscriptionPlan } from './types.js';
declare const __propDef: {
    props: {
        plan: Exclude<TSubscriptionPlan, "isDeprecated">;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlanButtonProps = typeof __propDef.props;
export type PlanButtonEvents = typeof __propDef.events;
export type PlanButtonSlots = typeof __propDef.slots;
export default class PlanButton extends SvelteComponent<PlanButtonProps, PlanButtonEvents, PlanButtonSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        plan: Exclude<TSubscriptionPlan, "isDeprecated">;
    }>);
    $$bindings: "";
}
export {};
