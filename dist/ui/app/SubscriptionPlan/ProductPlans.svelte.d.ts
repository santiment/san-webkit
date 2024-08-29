import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
import { getApiBusinessPlans, getSanbaseConsumerPlans } from './api.js';
declare const __propDef: {
    props: {
        productFilter?: typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans;
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
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProductPlansProps = typeof __propDef.props;
export type ProductPlansEvents = typeof __propDef.events;
export type ProductPlansSlots = typeof __propDef.slots;
export default class ProductPlans extends SvelteComponent<ProductPlansProps, ProductPlansEvents, ProductPlansSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        productFilter?: typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans;
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
    }>);
    $$bindings: "";
}
export {};
