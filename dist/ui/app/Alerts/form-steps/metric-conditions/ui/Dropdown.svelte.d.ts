import type { Snippet } from 'svelte';
declare class __sveltets_Render<T> {
    props(): {
        class?: string;
        items: T[];
        selected: T;
        label: Snippet<[T]>;
        onSelect: (item: T) => void;
    };
    events(): {};
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Dropdown: $$IsomorphicComponent;
type Dropdown<T> = InstanceType<typeof Dropdown<T>>;
export default Dropdown;
