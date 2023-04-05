import { SvelteComponentTyped } from "svelte";
import type { Asset } from './types';
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
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
