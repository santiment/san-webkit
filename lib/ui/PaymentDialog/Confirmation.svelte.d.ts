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
        onSubmit: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ConfirmationProps = typeof __propDef.props;
export type ConfirmationEvents = typeof __propDef.events;
export type ConfirmationSlots = typeof __propDef.slots;
export default class Confirmation extends SvelteComponentTyped<ConfirmationProps, ConfirmationEvents, ConfirmationSlots> {
}
export {};
