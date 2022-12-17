import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        plans: SAN.Plan[];
        plan: SAN.Plan;
        name: string;
        price: string;
        isSinglePlan: boolean;
        isEligibleForTrial: boolean;
        loading: boolean;
        sanBalance: number;
        annualDiscount?: SAN.AnnualDiscount | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ConfirmationProps = typeof __propDef.props;
export declare type ConfirmationEvents = typeof __propDef.events;
export declare type ConfirmationSlots = typeof __propDef.slots;
export default class Confirmation extends SvelteComponentTyped<ConfirmationProps, ConfirmationEvents, ConfirmationSlots> {
}
export {};
