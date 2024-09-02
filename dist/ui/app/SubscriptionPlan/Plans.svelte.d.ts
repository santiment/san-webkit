import { SvelteComponent } from "svelte";
import { getApiBusinessPlans } from './api.js';
declare const __propDef: {
    props: Pick<{
        productsWithPlans?: import("./api.js").TProductsWithPlans;
        productFilter?: typeof import("./api.js").getSanbaseConsumerPlans | typeof getApiBusinessPlans;
        children?: import("svelte").Snippet<[{
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
    }, "productsWithPlans">;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlansProps = typeof __propDef.props;
export type PlansEvents = typeof __propDef.events;
export type PlansSlots = typeof __propDef.slots;
export default class Plans extends SvelteComponent<PlansProps, PlansEvents, PlansSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<Pick<{
        productsWithPlans?: import("./api.js").TProductsWithPlans;
        productFilter?: typeof import("./api.js").getSanbaseConsumerPlans | typeof getApiBusinessPlans;
        children?: import("svelte").Snippet<[{
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
    }, "productsWithPlans">>);
    $$bindings: "";
}
export {};
