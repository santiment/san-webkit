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
export type ScrollPaginationProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type ScrollPaginationEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type ScrollPaginationSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class ScrollPagination<T> extends SvelteComponentTyped<ScrollPaginationProps<T>, ScrollPaginationEvents<T>, ScrollPaginationSlots<T>> {
    get reset(): () => void;
}
export {};
