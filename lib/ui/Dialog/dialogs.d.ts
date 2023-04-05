import type { SvelteComponentDev } from 'svelte/internal';
import { DialogLock } from './types';
export { DialogLock } from './types';
export type DialogController = {
    resolve: (value: unknown) => void;
    reject: (reason?: any) => void;
    locking: DialogLock;
};
export type SvelteComponentModule = {
    new (options: {
        target: Element;
        props?: any;
    }): SvelteComponentDev;
};
type DialogsStore = Array<{
    Component: SvelteComponentModule;
    props: any;
}>;
type Props = {
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
