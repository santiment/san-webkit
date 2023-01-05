/** @typedef {typeof __propDef.props}  ScreenProps */
/** @typedef {typeof __propDef.events}  ScreenEvents */
/** @typedef {typeof __propDef.slots}  ScreenSlots */
export default class Screen extends SvelteComponentTyped<{
    loading: any;
    onCancellationClick: any;
    onServiceClick: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    title: {};
    subtitle: {};
    help: {};
    right: {};
}> {
}
export type ScreenProps = typeof __propDef.props;
export type ScreenEvents = typeof __propDef.events;
export type ScreenSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        loading: any;
        onCancellationClick: any;
        onServiceClick: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        subtitle: {};
        help: {};
        right: {};
    };
};
export {};
