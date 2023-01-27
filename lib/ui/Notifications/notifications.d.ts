export declare type Notification = {
    type?: 'success' | 'error' | 'warning' | 'info';
    title: string;
    description?: string;
    id?: number;
    dismissAfter?: number;
};
export declare const link: (text: string, href: string) => string;
export declare const notifications$: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<Set<Notification>>, invalidate?: ((value?: Set<Notification> | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    show: (notification: Notification) => void;
    hide: (notification: Notification) => void;
};
