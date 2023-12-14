import { SvelteComponentTyped } from "svelte";
export type AreaType = {
    data: Props['data'];
    color: string;
    formatter?: (v: number) => string;
    title?: string;
};
import type { Props } from './svelte';
declare const __propDef: {
    props: {
        id?: string | undefined;
        width: Props['width'];
        height: Props['height'];
        areas: AreaType[];
        tooltipVisible?: boolean | undefined;
        tooltipSyncKey?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MultiAreaProps = typeof __propDef.props;
export type MultiAreaEvents = typeof __propDef.events;
export type MultiAreaSlots = typeof __propDef.slots;
export default class MultiArea extends SvelteComponentTyped<MultiAreaProps, MultiAreaEvents, MultiAreaSlots> {
}
export {};
