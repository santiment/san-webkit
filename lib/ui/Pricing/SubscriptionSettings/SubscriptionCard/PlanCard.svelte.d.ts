import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        plan: SAN.Plan;
        discount: undefined | number;
        action?: string | undefined;
        label: any;
        badge: any;
        badgeIcon: any;
        isEligibleForTrial?: boolean | undefined;
        isTrial?: boolean | undefined;
        isUpgrade?: boolean | undefined;
        shouldHideBillingInfo?: boolean | undefined;
        plans?: SAN.Plan[] | undefined;
        description?: string | undefined;
        onActionClick?: ((e: any) => any) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PlanCardProps = typeof __propDef.props;
export type PlanCardEvents = typeof __propDef.events;
export type PlanCardSlots = typeof __propDef.slots;
export default class PlanCard extends SvelteComponentTyped<PlanCardProps, PlanCardEvents, PlanCardSlots> {
}
export {};
