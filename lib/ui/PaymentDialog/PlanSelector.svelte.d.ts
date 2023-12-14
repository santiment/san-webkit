import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        plans: SAN.Plan[];
        plan: SAN.Plan;
        price: string;
        selectedNameBilling: string;
        isSinglePlan: boolean;
        annualDiscount: any;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlanSelectorProps = typeof __propDef.props;
export type PlanSelectorEvents = typeof __propDef.events;
export type PlanSelectorSlots = typeof __propDef.slots;
export default class PlanSelector extends SvelteComponentTyped<PlanSelectorProps, PlanSelectorEvents, PlanSelectorSlots> {
}
export {};
