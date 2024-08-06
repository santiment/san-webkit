import { SvelteComponent } from "svelte";
import { getApiBusinessPlans, getSanbaseConsumerPlans } from './api.js';
declare const __propDef: {
    props: {
        productFilter?: typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans;
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
    }>);
    $$bindings: "";
}
export {};
