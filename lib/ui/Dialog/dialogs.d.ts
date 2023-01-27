import type { SvelteComponentDev } from 'svelte/internal';
export declare enum DialogLock {
    FREE = 0,
    LOCKED = 1,
    WARN = 2
}
export declare type DialogController = {
    resolve: (value: unknown) => void;
    reject: (reason?: any) => void;
    locking: DialogLock;
};
export declare type SvelteComponentModule = {
    new (options: {
        target: Element;
        props?: any;
    }): SvelteComponentDev;
};
declare type DialogsStore = Array<{
    Component: SvelteComponentModule;
    props: any;
}>;
declare type Props = {
    [key: string]: any;
} & {
    strict?: boolean;
    single?: boolean;
    DialogPromise?: {
        resolve: (value: unknown) => void;
        reject: (reason?: any) => void;
        locking: DialogLock;
    };
};
export declare const dialogs: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<DialogsStore>, invalidate?: ((value?: DialogsStore | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    show<T = unknown>(Component: SvelteComponentModule, props?: Props): Promise<T>;
    /** Only single entity of the Component can be mounted at the same time */
    showOnce<T_1 = unknown>(Component: SvelteComponentModule, props?: Props): Promise<T_1> | undefined;
    hide(index: number): void;
    has(Component: SvelteComponentModule): boolean;
};
export {};
