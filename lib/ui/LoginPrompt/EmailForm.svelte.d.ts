/** @typedef {typeof __propDef.props}  EmailFormProps */
/** @typedef {typeof __propDef.events}  EmailFormEvents */
/** @typedef {typeof __propDef.slots}  EmailFormSlots */
export default class EmailForm extends SvelteComponentTyped<{
    isSignUp: any;
    from?: string | undefined;
    verifiedEmail?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EmailFormProps = typeof __propDef.props;
export type EmailFormEvents = typeof __propDef.events;
export type EmailFormSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isSignUp: any;
        from?: string | undefined;
        verifiedEmail?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
