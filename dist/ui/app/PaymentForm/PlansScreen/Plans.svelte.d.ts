import { SvelteComponent } from "svelte";
import { getApiBusinessPlans, getSanbaseConsumerPlans } from '../../SubscriptionPlan/api.js';
declare const __propDef: {
    props: {
        productFilter?: typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlansProps = typeof __propDef.props;
export type PlansEvents = typeof __propDef.events;
export type PlansSlots = typeof __propDef.slots;
export default class Plans extends SvelteComponent<PlansProps, PlansEvents, PlansSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        productFilter?: typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans;
    }>);
    $$bindings: "";
}
export {};
