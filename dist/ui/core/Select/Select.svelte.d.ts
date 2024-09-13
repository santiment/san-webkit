import { SvelteComponent } from "svelte";
import type { Selected } from 'bits-ui';
declare class __sveltets_Render<T> {
    props(): {
        items: Selected<T>[];
        selected?: Selected<T> | undefined;
        onSelectedChange?: ((value: Selected<T> | undefined) => void) | undefined;
        triggerClass?: string;
        contentClass?: string;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export type SelectProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type SelectEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type SelectSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Select<T> extends SvelteComponent<SelectProps<T>, SelectEvents<T>, SelectSlots<T>> {
    constructor(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>);
    $$bindings: "selected";
}
export {};
