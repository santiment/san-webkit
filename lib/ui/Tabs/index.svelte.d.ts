import { SvelteComponentTyped } from "svelte";
declare class __sveltets_Render<T extends {
    title: string;
    action?: (node: HTMLElement) => any;
}> {
    props(): {
        class?: string | undefined;
        tabs: readonly T[];
        selected?: T | undefined;
        onSelect?: ((selectedTab: T) => void) | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            item: T;
        };
        after: {};
    };
}
export type IndexProps<T extends {
    title: string;
    action?: (node: HTMLElement) => any;
}> = ReturnType<__sveltets_Render<T>['props']>;
export type IndexEvents<T extends {
    title: string;
    action?: (node: HTMLElement) => any;
}> = ReturnType<__sveltets_Render<T>['events']>;
export type IndexSlots<T extends {
    title: string;
    action?: (node: HTMLElement) => any;
}> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Index<T extends {
    title: string;
    action?: (node: HTMLElement) => any;
}> extends SvelteComponentTyped<IndexProps<T>, IndexEvents<T>, IndexSlots<T>> {
}
export {};
