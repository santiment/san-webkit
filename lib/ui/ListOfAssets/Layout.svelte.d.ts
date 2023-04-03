import { SvelteComponentTyped } from "svelte";
import type { Asset } from './api';
declare class __sveltets_Render<T> {
    props(): {
        mapItems?: ((assets: Asset[]) => T[]) | undefined;
        accessAsset: (item: T) => Asset;
        tabs?: import("./Tabs.svelte").TabsType | undefined;
        onEscape?: ((_?: any) => any) | undefined;
        onTabSelect?: ((_?: any) => any) | undefined;
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
export declare type LayoutProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export declare type LayoutEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export declare type LayoutSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Layout<T> extends SvelteComponentTyped<LayoutProps<T>, LayoutEvents<T>, LayoutSlots<T>> {
}
export {};
