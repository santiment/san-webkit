import { SvelteComponentTyped } from "svelte";
import type { Asset } from './types';
export type TabsType = [string, () => Promise<Asset[]>][];
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
export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;
export default class Tabs extends SvelteComponentTyped<TabsProps, TabsEvents, TabsSlots> {
}
export {};
