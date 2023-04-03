import { SvelteComponentTyped } from "svelte";
export { Controller } from './ctx';
declare class __sveltets_Render<T> {
    props(): {
        class?: string | undefined;
        itemHeight: number;
        items?: T[] | undefined;
        renderAmount?: number | undefined;
        maxFluidHeight?: number | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            item: T;
            i: any;
        };
        empty: {};
    };
}
export declare type IndexProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export declare type IndexEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export declare type IndexSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Index<T> extends SvelteComponentTyped<IndexProps<T>, IndexEvents<T>, IndexSlots<T>> {
}
