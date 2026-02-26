import type { ComponentProps } from 'svelte';
import Component from './Notification.svelte';
export { default } from './Notifications.svelte';
type TOptions = Omit<ComponentProps<Component>, 'icon' | 'message'> & {
    duration?: number;
};
declare const notification: Record<'info' | 'error' | 'warning' | 'success', (message: string, options?: TOptions) => string | number>;
export { notification };
