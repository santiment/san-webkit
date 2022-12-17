/** @typedef {typeof __propDef.props}  BillingToggleProps */
/** @typedef {typeof __propDef.events}  BillingToggleEvents */
/** @typedef {typeof __propDef.slots}  BillingToggleSlots */
export default class BillingToggle extends SvelteComponentTyped<{
    billing?: Billing.MONTH | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BillingToggleProps = typeof __propDef.props;
export type BillingToggleEvents = typeof __propDef.events;
export type BillingToggleSlots = typeof __propDef.slots;
import { Billing } from "./../../../utils/plans";
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        billing?: Billing.MONTH | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
