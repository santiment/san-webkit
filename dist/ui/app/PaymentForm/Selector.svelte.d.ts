import type { Snippet } from 'svelte';
declare class __sveltets_Render<T extends {
    name: string;
}> {
    props(): {
        name: string;
        smallGap?: boolean;
        options: T[];
        active?: T | undefined;
        onSelect: (option: T) => void;
        children: Snippet<[T]>;
        class?: string;
    };
    events(): {};
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T extends {
        name: string;
    }>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T extends {
        name: string;
    }>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Selector: $$IsomorphicComponent;
type Selector<T extends {
    name: string;
}> = InstanceType<typeof Selector<T>>;
export default Selector;
