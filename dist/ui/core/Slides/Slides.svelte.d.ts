import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare class __sveltets_Render<T> {
    props(): {
        class?: string;
        items: T[];
        onChange: (item: T) => void;
        children: Snippet<[T]>;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export type SlidesProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type SlidesEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type SlidesSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Slides<T> extends SvelteComponent<SlidesProps<T>, SlidesEvents<T>, SlidesSlots<T>> {
    constructor(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>);
    $$bindings: "";
}
export {};
