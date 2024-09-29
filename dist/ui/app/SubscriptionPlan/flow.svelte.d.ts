import { type SS } from 'svelte-runes';
import { getApiBusinessPlans, getSanbaseConsumerPlans, type TProductsWithPlans } from './api.js';
export declare function useProductPlansFlow(defaultProductsWithPlans: TProductsWithPlans | undefined, productFilter: SS<typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans>): {
    productPlans: {
        readonly $: {
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
        } | null;
    };
};
