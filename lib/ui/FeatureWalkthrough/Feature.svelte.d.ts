/** @typedef {typeof __propDef.props}  FeatureProps */
/** @typedef {typeof __propDef.events}  FeatureEvents */
/** @typedef {typeof __propDef.slots}  FeatureSlots */
export default class Feature extends SvelteComponentTyped<{
    feature: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FeatureProps = typeof __propDef.props;
export type FeatureEvents = typeof __propDef.events;
export type FeatureSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        feature: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
