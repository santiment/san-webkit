import { toast } from 'svelte-sonner'

export { default } from './Notifications.svelte'
import Component from './Notification.svelte'
import type { ComponentProps } from 'svelte'

function createToast(
  icon: string,
  message: string,
  options?: Omit<ComponentProps<Component>, 'icon' | 'message'>,
) {
  return toast.custom(Component, {
    componentProps: {
      icon,
      message,
      ...options,
    },
  })
}

const notification: Record<
  'info' | 'error' | 'warning' | 'success',
  (
    message: string,
    options?: Omit<ComponentProps<Component>, 'icon' | 'message'>,
  ) => string | number
> = {
  info: (...rest) => createToast('info', ...rest),
  error: (...rest) => createToast('error', ...rest),
  warning: (...rest) => createToast('warning', ...rest),
  success: (...rest) => createToast('checkmark-circle', ...rest),
}

export { notification }
