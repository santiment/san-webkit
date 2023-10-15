import { SvelteComponentTyped } from "svelte";
import type { Asset } from './types';
declare class __sveltets_Render<T> {
    props(): {
        mapItems?: ((assets: Asset[]) => T[]) | undefined;
        accessAsset: (item: T) => Asset;
        tabs?: import("./Tabs.svelte").TabsType | undefined;
        onEscape?: ((_?: any) => any) | undefined;
        onTabSelect?: ((_?: any) => any) | undefined;
        hasSearch?: boolean | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            assets: T[];
        };
    };
}
export type LayoutProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type LayoutEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type LayoutSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Layout<T> extends SvelteComponentTyped<LayoutProps<T>, LayoutEvents<T>, LayoutSlots<T>> {
}
export {};
