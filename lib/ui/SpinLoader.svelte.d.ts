/** @typedef {typeof __propDef.props}  SpinLoaderProps */
/** @typedef {typeof __propDef.events}  SpinLoaderEvents */
/** @typedef {typeof __propDef.slots}  SpinLoaderSlots */
export default class SpinLoader extends SvelteComponentTyped<{
    size?: number | undefined;
    fixed?: boolean | undefined;
    bg?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SpinLoaderProps = typeof __propDef.props;
export type SpinLoaderEvents = typeof __propDef.events;
export type SpinLoaderSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number | undefined;
        fixed?: boolean | undefined;
        bg?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
