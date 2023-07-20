/** @typedef {typeof __propDef.props}  SkeletonProps */
/** @typedef {typeof __propDef.events}  SkeletonEvents */
/** @typedef {typeof __propDef.slots}  SkeletonSlots */
export default class Skeleton extends SvelteComponentTyped<{
    style?: string | undefined;
    isActive?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SkeletonProps = typeof __propDef.props;
export type SkeletonEvents = typeof __propDef.events;
export type SkeletonSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string | undefined;
        isActive?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
