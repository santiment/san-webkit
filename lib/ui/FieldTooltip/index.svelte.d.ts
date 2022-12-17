/** @typedef {typeof __propDef.props}  IndexProps */
/** @typedef {typeof __propDef.events}  IndexEvents */
/** @typedef {typeof __propDef.slots}  IndexSlots */
export default class Index extends SvelteComponentTyped<{
    type?: string | undefined;
    text?: string | undefined;
    offsetY?: number | undefined;
    activeClass?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        slot: string;
    };
}> {
}
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        type?: string | undefined;
        text?: string | undefined;
        offsetY?: number | undefined;
        activeClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            slot: string;
        };
    };
};
export {};
