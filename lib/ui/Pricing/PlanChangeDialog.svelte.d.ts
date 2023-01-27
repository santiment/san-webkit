import { SvelteComponentTyped } from "svelte";
export declare const showPlanChangeDialog: (props?: any) => Promise<unknown>;
declare const __propDef: {
    props: {
        [x: string]: any;
        DialogPromise: SAN.DialogController;
        plan: any;
        isUpgrade?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PlanChangeDialogProps = typeof __propDef.props;
export declare type PlanChangeDialogEvents = typeof __propDef.events;
export declare type PlanChangeDialogSlots = typeof __propDef.slots;
export default class PlanChangeDialog extends SvelteComponentTyped<PlanChangeDialogProps, PlanChangeDialogEvents, PlanChangeDialogSlots> {
}
export {};
