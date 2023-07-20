import type { ComponentType } from 'svelte';
import { DialogLock } from './types';
export { DialogLock } from './types';
export type DialogController = {
    resolve: (value: unknown) => void;
    reject: (reason?: any) => void;
    locking: DialogLock;
};
type DialogsStore = Array<{
    Component: ComponentType;
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
    subscribe: (this: void, run: import("svelte/store").Subscriber<DialogsStore>, invalidate?: import("svelte/store").Invalidator<DialogsStore> | undefined) => import("svelte/store").Unsubscriber;
    show<T = unknown>(Component: ComponentType, props?: Props): Promise<T>;
    /** Only single entity of the Component can be mounted at the same time */
    showOnce<T_1 = unknown>(Component: ComponentType, props?: Props): Promise<T_1> | undefined;
    hide(index: number): void;
    has(Component: ComponentType): boolean;
};
