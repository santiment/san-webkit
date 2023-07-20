/** @typedef {typeof __propDef.props}  IndexProps */
/** @typedef {typeof __propDef.events}  IndexEvents */
/** @typedef {typeof __propDef.slots}  IndexSlots */
export default class Index extends SvelteComponentTyped<{
    [x: string]: any;
    title: any;
    value: any;
    placeholder?: any;
    required?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        classes: string;
    };
}> {
}
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title: any;
        value: any;
        placeholder?: any;
        required?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            classes: string;
        };
    };
};
export {};
