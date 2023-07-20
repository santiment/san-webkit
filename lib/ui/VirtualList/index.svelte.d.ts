import { SvelteComponentTyped } from "svelte";
export { Controller } from './ctx';
declare class __sveltets_Render<T> {
    props(): {
        class?: string | undefined;
        itemHeight: number;
        items?: T[] | undefined;
        renderAmount?: number | undefined;
        maxFluidHeight?: number | undefined;
        bufferItemsAmount?: number | undefined;
        pageSize?: number | undefined;
        pageOffset?: number | undefined;
        preloadPage?: ((page: number, pages: [number, number]) => void) | undefined;
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
export type IndexProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type IndexEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type IndexSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Index<T> extends SvelteComponentTyped<IndexProps<T>, IndexEvents<T>, IndexSlots<T>> {
}
