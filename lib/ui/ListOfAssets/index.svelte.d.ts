import { SvelteComponentTyped } from "svelte";
import type { Asset } from './api';
declare const __propDef: {
    props: {
        selected?: Asset | null | undefined;
        tabs?: import("./Tabs.svelte").TabsType | undefined;
        onSelect: (asset: Asset) => void;
        onEscape?: ((...args: any[]) => any) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
