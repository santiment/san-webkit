import { SvelteComponentTyped } from "svelte";
export declare const showBillingHistoryDialog: (props?: any) => Promise<unknown>;
declare const __propDef: {
    props: {
        [x: string]: any;
        history?: never[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BillingHistoryDialogProps = typeof __propDef.props;
export type BillingHistoryDialogEvents = typeof __propDef.events;
export type BillingHistoryDialogSlots = typeof __propDef.slots;
export default class BillingHistoryDialog extends SvelteComponentTyped<BillingHistoryDialogProps, BillingHistoryDialogEvents, BillingHistoryDialogSlots> {
}
export {};
