/** @typedef {typeof __propDef.props}  MoreFeaturesButtonProps */
/** @typedef {typeof __propDef.events}  MoreFeaturesButtonEvents */
/** @typedef {typeof __propDef.slots}  MoreFeaturesButtonSlots */
export default class MoreFeaturesButton extends SvelteComponentTyped<{
    isShowingMore?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MoreFeaturesButtonProps = typeof __propDef.props;
export type MoreFeaturesButtonEvents = typeof __propDef.events;
export type MoreFeaturesButtonSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isShowingMore?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
