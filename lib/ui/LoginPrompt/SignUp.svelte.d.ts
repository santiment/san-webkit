/** @typedef {typeof __propDef.props}  SignUpProps */
/** @typedef {typeof __propDef.events}  SignUpEvents */
/** @typedef {typeof __propDef.slots}  SignUpSlots */
export default class SignUp extends SvelteComponentTyped<{
    title: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SignUpProps = typeof __propDef.props;
export type SignUpEvents = typeof __propDef.events;
export type SignUpSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
