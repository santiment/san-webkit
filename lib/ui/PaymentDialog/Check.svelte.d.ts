import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        plan: SAN.Plan;
        percentOff?: number | undefined;
        sanBalance?: number | undefined;
        isAnnualPlan: boolean;
        isEligibleForTrial: boolean;
        annualDiscount: SAN.AnnualDiscount;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CheckProps = typeof __propDef.props;
export declare type CheckEvents = typeof __propDef.events;
export declare type CheckSlots = typeof __propDef.slots;
export default class Check extends SvelteComponentTyped<CheckProps, CheckEvents, CheckSlots> {
}
export {};
