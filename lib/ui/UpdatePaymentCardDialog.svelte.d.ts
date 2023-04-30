import { SvelteComponentTyped } from "svelte";
export declare const showUpdatePaymentCardDialog: (props?: any) => Promise<unknown>;
export declare const dataPreloader: (node: HTMLElement) => void;
declare const __propDef: {
    props: {
        [x: string]: any;
        DialogPromise: SAN.DialogController;
        onSuccess?: ((data: any) => void) | undefined;
        onError: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type UpdatePaymentCardDialogProps = typeof __propDef.props;
export type UpdatePaymentCardDialogEvents = typeof __propDef.events;
export type UpdatePaymentCardDialogSlots = typeof __propDef.slots;
export default class UpdatePaymentCardDialog extends SvelteComponentTyped<UpdatePaymentCardDialogProps, UpdatePaymentCardDialogEvents, UpdatePaymentCardDialogSlots> {
}
export {};