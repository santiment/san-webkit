import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        plans: SAN.Plan[];
        plan: SAN.Plan;
        price: string;
        selectedNameBilling: string;
        isSinglePlan: boolean;
        annualDiscount: SAN.AnnualDiscount;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PlanSelectorProps = typeof __propDef.props;
export declare type PlanSelectorEvents = typeof __propDef.events;
export declare type PlanSelectorSlots = typeof __propDef.slots;
export default class PlanSelector extends SvelteComponentTyped<PlanSelectorProps, PlanSelectorEvents, PlanSelectorSlots> {
}
export {};
