import { SvelteComponentTyped } from "svelte";
import type { Asset } from './types';
declare const __propDef: {
    props: {
        selected?: Set<Asset> | undefined;
        tabs?: import("./Tabs.svelte").TabsType | undefined;
        onSelect: (assets: Asset[], asset?: Asset) => void;
        onEscape?: ((...args: any[]) => any) | undefined;
        hasSearch?: boolean | undefined;
        hasResetButton?: boolean | undefined;
        keepSelectedInList?: boolean | undefined;
        recents?: Asset[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MultiProps = typeof __propDef.props;
export type MultiEvents = typeof __propDef.events;
export type MultiSlots = typeof __propDef.slots;
export default class Multi extends SvelteComponentTyped<MultiProps, MultiEvents, MultiSlots> {
}
export {};
