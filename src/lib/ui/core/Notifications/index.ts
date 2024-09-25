import { toast } from 'svelte-sonner'

export { default } from './Notifications.svelte'
import Component from './Notification.svelte'
import type { ComponentProps, ComponentType } from 'svelte'

type ToastComponentProps = Omit<ComponentProps<Component>, 'icon' | 'message'>

function createToast(icon: string, message: string, options?: ToastComponentProps) {
  return toast.custom(Component as unknown as ComponentType, {
    componentProps: {
      icon,
      message,
      ...options,
    },
    duration: options?.duration,
  })
}

const createNotificationType =
  (icon: string) =>
  (...rest: [message: string, options?: ToastComponentProps]) =>
    createToast(icon, ...rest)

const notification: Record<
  'info' | 'error' | 'warning' | 'success',
  (message: string, options?: ToastComponentProps) => string | number
> = {
  info: createNotificationType('info'),
  error: createNotificationType('error'),
  warning: createNotificationType('warning'),
  success: createNotificationType('checkmark-circle'),
}

export { notification }
