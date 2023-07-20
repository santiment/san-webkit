/** @typedef {typeof __propDef.props}  VersionInfoProps */
/** @typedef {typeof __propDef.events}  VersionInfoEvents */
/** @typedef {typeof __propDef.slots}  VersionInfoSlots */
export default class VersionInfo extends SvelteComponentTyped<{
    isAppUpdateAvailable: any;
    version: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type VersionInfoProps = typeof __propDef.props;
export type VersionInfoEvents = typeof __propDef.events;
export type VersionInfoSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isAppUpdateAvailable: any;
        version: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
