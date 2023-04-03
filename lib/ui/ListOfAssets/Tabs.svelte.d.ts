import { SvelteComponentTyped } from "svelte";
import type { Asset } from './types';
export declare type TabsType = [string, () => Promise<Asset[]>][];
export declare const TABS: TabsType;
declare const __propDef: {
    props: {
        tabs: TabsType;
        selected: TabsType[number];
        onSelect?: ((_?: any) => any) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TabsProps = typeof __propDef.props;
export declare type TabsEvents = typeof __propDef.events;
export declare type TabsSlots = typeof __propDef.slots;
export default class Tabs extends SvelteComponentTyped<TabsProps, TabsEvents, TabsSlots> {
}
export {};
