import { SvelteComponentTyped } from "svelte";
declare class __sveltets_Render<T> {
    props(): {
        items: T[];
        query: (page: number, items: T[]) => Promise<T[]>;
        pageSize: number;
        rootMargin?: string | undefined;
        reset?: (() => void) | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            items: T[];
        };
        loader: {};
    };
}
export declare type ScrollPaginationProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export declare type ScrollPaginationEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export declare type ScrollPaginationSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class ScrollPagination<T> extends SvelteComponentTyped<ScrollPaginationProps<T>, ScrollPaginationEvents<T>, ScrollPaginationSlots<T>> {
    get reset(): () => void;
}
export {};
