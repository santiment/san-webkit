import { SvelteComponentTyped } from "svelte";
export declare const showComplete3dsDialog$: () => (...args: any[]) => Promise<any>;
import Dialog from './../../ui/Dialog';
declare const __propDef: {
    props: {
        [x: string]: any;
        paymentIntent?: string | undefined;
        DialogCtx: SAN.Dialog.Ctx;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponentTyped<DialogProps, DialogEvents, DialogSlots> {
}
export {};
