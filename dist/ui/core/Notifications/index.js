import { toast } from 'svelte-sonner';
import Component from './Notification.svelte';
export { default } from './Notifications.svelte';
function createToast(icon, message, { duration = 5000, ...options } = {}) {
    return toast.custom(Component, {
        duration,
        componentProps: { ...options, icon, message },
    });
}
const createNotificationType = (icon) => (...rest) => createToast(icon, ...rest);
const notification = {
    info: createNotificationType('info'),
    error: createNotificationType('error'),
    warning: createNotificationType('warning'),
    success: createNotificationType('checkmark-circle'),
};
export { notification };
