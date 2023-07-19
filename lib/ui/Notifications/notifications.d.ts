/// <reference types="svelte" />
export type Notification = {
    type?: 'success' | 'error' | 'warning' | 'info';
    title: string;
    description?: string;
    id?: number;
    dismissAfter?: number;
};
export declare const link: (text: string, href: string) => string;
export declare const notifications$: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<Set<Notification>>, invalidate?: import("svelte/store").Invalidator<Set<Notification>> | undefined) => import("svelte/store").Unsubscriber;
    show: (notification: Notification) => void;
    hide: (notification: Notification) => void;
};
