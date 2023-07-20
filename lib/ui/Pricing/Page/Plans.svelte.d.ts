/** @typedef {typeof __propDef.props}  PlansProps */
/** @typedef {typeof __propDef.events}  PlansEvents */
/** @typedef {typeof __propDef.slots}  PlansSlots */
export default class Plans extends SvelteComponentTyped<{
    billingPlans: any;
    plans: any;
    subscription: any;
    annualDiscount: any;
    isLoggedIn: any;
    isEligibleForTrial: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PlansProps = typeof __propDef.props;
export type PlansEvents = typeof __propDef.events;
export type PlansSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        billingPlans: any;
        plans: any;
        subscription: any;
        annualDiscount: any;
        isLoggedIn: any;
        isEligibleForTrial: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
