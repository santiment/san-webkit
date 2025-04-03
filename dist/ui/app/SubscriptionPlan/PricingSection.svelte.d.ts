import type { Snippet } from 'svelte';
import type { PlanType } from './plans.js';
import { type TProductsWithPlans } from './api.js';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const PricingSection: $$__sveltets_2_IsomorphicComponent<{
    source?: string;
    productsWithPlans?: TProductsWithPlans;
    class?: string;
    children?: Snippet<[{
        isConsumerPlans: boolean;
    }]>;
    planType?: PlanType;
    onPlanTypeChange?: (type: PlanType) => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type PricingSection = InstanceType<typeof PricingSection>;
export default PricingSection;
