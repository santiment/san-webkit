import { SvelteComponent } from "svelte";
import { type ComponentProps, type Snippet } from 'svelte';
import { VList } from 'virtua/svelte';
declare class __sveltets_Render<T> {
    props(): {
        class?: string;
        data: T[];
        /**
         * `maxHeight` allows to have a list with a dynamic height.
         *
         * The list will not exceed `maxHeight`, but might be smaller than it.
         *
         * Depends on `itemHeight` to calculate current list's height.
         */
        maxHeight?: number;
        /**
         * Approximate height of the item.
         *
         * Used in pair with `maxHeight` and only to calculate dynamic max-height of the list.
         */
        itemHeight?: number;
        getKey: ComponentProps<VList<T_1>>["getKey"];
        children: Snippet<[{
            item: T;
        }]>;
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
