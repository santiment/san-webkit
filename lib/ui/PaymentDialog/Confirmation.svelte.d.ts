import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        plans: SAN.Plan[];
        plan: SAN.Plan;
        name: string;
        price: string;
        isEligibleForTrial: boolean;
        loading: boolean;
        annualDiscount: any;
        onSubmit: any;
        source: string;
        closeDialog?: ((_?: any) => any) | undefined;
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
