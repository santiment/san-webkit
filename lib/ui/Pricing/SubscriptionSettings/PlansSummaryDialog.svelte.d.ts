import { SvelteComponentTyped } from "svelte";
export declare const showPlanSummaryDialog: () => Promise<unknown>;
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlansSummaryDialogProps = typeof __propDef.props;
export type PlansSummaryDialogEvents = typeof __propDef.events;
export type PlansSummaryDialogSlots = typeof __propDef.slots;
export default class PlansSummaryDialog extends SvelteComponentTyped<PlansSummaryDialogProps, PlansSummaryDialogEvents, PlansSummaryDialogSlots> {
}
export {};
