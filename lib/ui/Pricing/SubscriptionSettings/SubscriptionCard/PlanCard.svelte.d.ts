import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        plan: SAN.Plan;
        altPlan?: SAN.Plan | undefined;
        discount: undefined | number;
        action?: string | undefined;
        label: any;
        badge: any;
        badgeIcon: any;
        isEligibleForTrial?: boolean | undefined;
        isTrial?: boolean | undefined;
        isUpgrade?: boolean | undefined;
        shouldHideBillingInfo: any;
        onActionClick?: (() => Promise<unknown>) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type PlanCardProps = typeof __propDef.props;
export declare type PlanCardEvents = typeof __propDef.events;
export declare type PlanCardSlots = typeof __propDef.slots;
export default class PlanCard extends SvelteComponentTyped<PlanCardProps, PlanCardEvents, PlanCardSlots> {
}
export {};
