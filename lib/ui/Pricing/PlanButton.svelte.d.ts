import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        plan: SAN.Plan;
        subscription: undefined | SAN.Subscription;
        isEligibleForTrial?: boolean | undefined;
        annualDiscount?: SAN.AnnualDiscount | undefined;
        isLoggedIn?: boolean | undefined;
        isFreePlan?: boolean | undefined;
        source: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PlanButtonProps = typeof __propDef.props;
export declare type PlanButtonEvents = typeof __propDef.events;
export declare type PlanButtonSlots = typeof __propDef.slots;
export default class PlanButton extends SvelteComponentTyped<PlanButtonProps, PlanButtonEvents, PlanButtonSlots> {
}
export {};
