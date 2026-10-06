import type { Snippet } from 'svelte';
declare class __sveltets_Render<T> {
    props(): {
        items: T[];
        initialPage?: number;
        hasMore: boolean;
        rootMargin?: string;
        loadMore: (page: number) => Promise<T[]>;
        children: Snippet<[T[]]>;
        loader?: Snippet;
    };
    events(): {};
    slots(): {};
    bindings(): "items";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const ScrollPagination: $$IsomorphicComponent;
type ScrollPagination<T> = InstanceType<typeof ScrollPagination<T>>;
export default ScrollPagination;
