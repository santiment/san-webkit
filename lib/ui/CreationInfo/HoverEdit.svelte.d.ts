/** @typedef {typeof __propDef.props}  HoverEditProps */
/** @typedef {typeof __propDef.events}  HoverEditEvents */
/** @typedef {typeof __propDef.slots}  HoverEditSlots */
export default class HoverEdit extends SvelteComponentTyped<{
    currentUser: any;
    onEditClick: any;
    class?: string | undefined;
    editLabel?: string | undefined;
    titleHoverTooltipClass?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type HoverEditProps = typeof __propDef.props;
export type HoverEditEvents = typeof __propDef.events;
export type HoverEditSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        currentUser: any;
        onEditClick: any;
        class?: string | undefined;
        editLabel?: string | undefined;
        titleHoverTooltipClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
