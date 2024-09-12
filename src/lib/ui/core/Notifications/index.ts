import { toast, type ExternalToast } from 'svelte-sonner'

export { default } from './Notifications.svelte'
import Component from './Notification.svelte'
import type { ComponentType, Snippet } from 'svelte'

type ModifiedExternalToastDescription<T extends ComponentType = ComponentType> = Omit<
  ExternalToast<T>,
  'description'
> & {
  description?: string | Snippet
}

function createToast(
  icon: string,
  message: string,
  options: ModifiedExternalToastDescription | undefined,
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
  (message: string, options?: ModifiedExternalToastDescription | undefined) => string | number
> = {
  info: (...rest) => createToast('info', ...rest),
  error: (...rest) => createToast('error', ...rest),
  warning: (...rest) => createToast('warning', ...rest),
  success: (...rest) => createToast('checkmark-circle', ...rest),
}

export { notification }
