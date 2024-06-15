import { SvelteComponent } from "svelte";
declare class __sveltets_Render<T> {
    props(): {
        class?: string | undefined;
        data: T[];
        /**
         * `maxHeight` allows to have a list with a dynamic height.
         *
         * The list will not exceed `maxHeight`, but might be smaller than it.
         *
         * Depends on `itemHeight` to calculate current list's height.
         */
        maxHeight?: number | undefined;
        /**
         * Approximate height of the item.
         *
         * Used in pair with `maxHeight` and only to calculate dynamic max-height of the list.
         */
        itemHeight?: number | undefined;
        getKey: any;
        children: (this: void, args_0: {
            item: T;
        }) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export type VirtualListProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type VirtualListEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type VirtualListSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
/**
 * Wrap list in a parent with a `flex-direction: column` and pass `flex-1` to the VirtuaList for it to
 * take whole available space.
 *
 * @example
 *
 * ```svelte
 * <div class="flex flex-col">
 * <VirtualList class="flex-1" >...</VirtualList>
 * </div>
 * ```
 */
export default class VirtualList<T> extends SvelteComponent<VirtualListProps<T>, VirtualListEvents<T>, VirtualListSlots<T>> {
    constructor(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>);
    $$bindings: "";
}
export {};
