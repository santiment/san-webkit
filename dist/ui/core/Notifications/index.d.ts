import type { ComponentProps } from 'svelte';
import Component from './Notification.svelte';
export { default } from './Notifications.svelte';
type TOptions = Omit<ComponentProps<Component>, 'icon' | 'message'> & {
    duration?: number;
};
type TIcon = ComponentProps<Component>['icon'];
declare const notification: {
    info: (message: string, options?: TOptions | undefined) => string | number;
    error: (message: string, options?: TOptions | undefined) => string | number;
    warning: (message: string, options?: TOptions | undefined) => string | number;
    success: (message: string, options?: TOptions | undefined) => string | number;
    custom: (icon: TIcon, message: string, options?: TOptions) => string | number;
};
export { notification };
