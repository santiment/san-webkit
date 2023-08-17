import type { ComponentType, SvelteComponent } from 'svelte';
import { DialogLock } from './types';
export { DialogLock } from './types';
export type DialogController = {
    resolve: (value: unknown) => void;
    reject: (reason?: any) => void;
    locking: DialogLock;
};
type SvelteProps<T> = T extends ComponentType<infer Component> ? Component extends SvelteComponent<infer Props> ? Props : never : never;
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
type DialogComponentProps<T> = {
    [K in keyof SvelteProps<T> as K extends 'DialogPromise' | 'i' | 'DialogCtx' ? never : K]: SvelteProps<T>[K];
} & Partial<{
    strict: boolean;
}>;
export declare const dialogs: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<DialogsStore>, invalidate?: import("svelte/store").Invalidator<DialogsStore> | undefined) => import("svelte/store").Unsubscriber;
    show<T = unknown>(Component: ComponentType, props?: Props): Promise<T>;
    /** Only single entity of the Component can be mounted at the same time */
    showOnce<T_1 = unknown>(Component: ComponentType, props?: Props): Promise<T_1> | undefined;
    __show<T_2 extends ComponentType>(Component: T_2, props?: DialogComponentProps<T_2>): Promise<any>;
    /**
     * Example:
     * ```html
     * <script context="module">
     *   export const showPaymentDialog$ = () => dialogs.WithCtx(PaymentDialog)
     * </script>
     *
     * <script>
     *   const showPaymentDialog = showPaymentDialog$()
     * ```
     */
    __WithCtx<T_3 extends ComponentType, K extends (...args: any[]) => DialogComponentProps<T_3>>(Component: T_3, modifyProps?: K): (...args: Parameters<K>) => Promise<any>;
    hide(index: number): void;
    has(Component: ComponentType): boolean;
};
