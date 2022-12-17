import { SvelteComponentTyped } from "svelte";
export declare const showPlanSummaryDialog: () => Promise<unknown>;
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PlansSummaryDialogProps = typeof __propDef.props;
export declare type PlansSummaryDialogEvents = typeof __propDef.events;
export declare type PlansSummaryDialogSlots = typeof __propDef.slots;
export default class PlansSummaryDialog extends SvelteComponentTyped<PlansSummaryDialogProps, PlansSummaryDialogEvents, PlansSummaryDialogSlots> {
}
export {};
