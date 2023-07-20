/** @typedef {typeof __propDef.props}  IndexProps */
/** @typedef {typeof __propDef.events}  IndexEvents */
/** @typedef {typeof __propDef.slots}  IndexSlots */
export default class Index extends SvelteComponentTyped<{
    title: any;
    onMetamaskClick: any;
    bottomLabel?: string | undefined;
    bottomAction?: string | undefined;
    bottomHref?: string | undefined;
    isSignUp?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: any;
        onMetamaskClick: any;
        bottomLabel?: string | undefined;
        bottomAction?: string | undefined;
        bottomHref?: string | undefined;
        isSignUp?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
