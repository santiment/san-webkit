import { SvelteComponentTyped } from "svelte";
export declare const showRemovePaymentCardDialog: () => Promise<unknown>;
declare const __propDef: {
    props: {
        [x: string]: any;
        DialogPromise: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RemovePaymentCardDialogProps = typeof __propDef.props;
export type RemovePaymentCardDialogEvents = typeof __propDef.events;
export type RemovePaymentCardDialogSlots = typeof __propDef.slots;
export default class RemovePaymentCardDialog extends SvelteComponentTyped<RemovePaymentCardDialogProps, RemovePaymentCardDialogEvents, RemovePaymentCardDialogSlots> {
}
export {};
