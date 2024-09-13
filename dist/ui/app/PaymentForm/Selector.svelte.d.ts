import { SvelteComponent } from "svelte";
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
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export type SelectorProps<T extends {
    name: string;
}> = ReturnType<__sveltets_Render<T>['props']>;
export type SelectorEvents<T extends {
    name: string;
}> = ReturnType<__sveltets_Render<T>['events']>;
export type SelectorSlots<T extends {
    name: string;
}> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Selector<T extends {
    name: string;
}> extends SvelteComponent<SelectorProps<T>, SelectorEvents<T>, SelectorSlots<T>> {
    constructor(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>);
    $$bindings: "";
}
export {};
