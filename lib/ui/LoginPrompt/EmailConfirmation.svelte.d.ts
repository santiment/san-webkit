/** @typedef {typeof __propDef.props}  EmailConfirmationProps */
/** @typedef {typeof __propDef.events}  EmailConfirmationEvents */
/** @typedef {typeof __propDef.slots}  EmailConfirmationSlots */
export default class EmailConfirmation extends SvelteComponentTyped<{
    verifiedEmail: any;
    isSignUp?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EmailConfirmationProps = typeof __propDef.props;
export type EmailConfirmationEvents = typeof __propDef.events;
export type EmailConfirmationSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        verifiedEmail: any;
        isSignUp?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
