import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
import type { PlanType } from './plans.js';
import { getApiBusinessPlans } from './api.js';
declare const __propDef: {
    props: Pick<{
        productsWithPlans?: import("./api.js").TProductsWithPlans;
        productFilter?: typeof import("./api.js").getSanbaseConsumerPlans | typeof getApiBusinessPlans;
        children?: Snippet<[{
            plans: {
                id: string;
                name: string;
                interval: "month" | "year";
                amount: number;
                isDeprecated: boolean;
                product: {
                    id: string;
                };
            }[];
            planBillingGroup: import("./api.js").TPlanBillingGroup;
            billingGroupPlans: import("./api.js").TPlanBillingGroup[string][];
        } | null]>;
    }, "productsWithPlans"> & {
        children?: Snippet;
        planType?: PlanType;
        onPlanTypeChange?: (type: PlanType) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PricingSectionProps = typeof __propDef.props;
export type PricingSectionEvents = typeof __propDef.events;
export type PricingSectionSlots = typeof __propDef.slots;
export default class PricingSection extends SvelteComponent<PricingSectionProps, PricingSectionEvents, PricingSectionSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<Pick<{
        productsWithPlans?: import("./api.js").TProductsWithPlans;
        productFilter?: typeof import("./api.js").getSanbaseConsumerPlans | typeof getApiBusinessPlans;
        children?: Snippet<[{
            plans: {
                id: string;
                name: string;
                interval: "month" | "year";
                amount: number;
                isDeprecated: boolean;
                product: {
                    id: string;
                };
            }[];
            planBillingGroup: import("./api.js").TPlanBillingGroup;
            billingGroupPlans: import("./api.js").TPlanBillingGroup[string][];
        } | null]>;
    }, "productsWithPlans"> & {
        children?: Snippet;
        planType?: PlanType;
        onPlanTypeChange?: (type: PlanType) => void;
    }>);
    $$bindings: "";
}
export {};
