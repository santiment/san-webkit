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
        children: Snippet<[T, number]>;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {
        $$events?: ReturnType<__sveltets_Render<T>['events']>;
    }): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
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
declare const VirtualList: $$IsomorphicComponent;
type VirtualList<T> = InstanceType<typeof VirtualList<T>>;
export default VirtualList;
