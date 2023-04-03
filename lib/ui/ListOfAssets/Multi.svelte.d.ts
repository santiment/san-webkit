import { SvelteComponentTyped } from "svelte";
import type { Asset } from './api';
declare const __propDef: {
    props: {
        selected?: Set<Asset> | undefined;
        tabs?: import("./Tabs.svelte").TabsType | undefined;
        onSelect: (assets: Asset[]) => void;
        onEscape?: ((...args: any[]) => any) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type MultiProps = typeof __propDef.props;
export declare type MultiEvents = typeof __propDef.events;
export declare type MultiSlots = typeof __propDef.slots;
export default class Multi extends SvelteComponentTyped<MultiProps, MultiEvents, MultiSlots> {
}
export {};
