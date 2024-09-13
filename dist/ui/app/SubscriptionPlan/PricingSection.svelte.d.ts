import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
import type { PlanType } from './plans.js';
import { type TProductsWithPlans } from './api.js';
declare const __propDef: {
    props: {
        productsWithPlans?: TProductsWithPlans;
        class?: string;
        children?: Snippet<[{
            isConsumerPlans: boolean;
        }]>;
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
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        productsWithPlans?: TProductsWithPlans;
        class?: string;
        children?: Snippet<[{
            isConsumerPlans: boolean;
        }]>;
        planType?: PlanType;
        onPlanTypeChange?: (type: PlanType) => void;
    }>);
    $$bindings: "";
}
export {};
