import type { ComponentProps, ComponentType } from 'svelte'
import { toast } from 'svelte-sonner'
import Component from './Notification.svelte'

export { default } from './Notifications.svelte'

type TOptions = Omit<ComponentProps<Component>, 'icon' | 'message'> & { duration?: number }
type TIcon = ComponentProps<Component>['icon']

function createToast(icon: TIcon, message: string, { duration = 5000, ...options }: TOptions = {}) {
  return toast.custom(Component as unknown as ComponentType, {
    duration,
    componentProps: { ...options, icon, message },
  })
}

const createNotificationType =
  (icon: TIcon) =>
  (...rest: [message: string, options?: TOptions]) =>
    createToast(icon, ...rest)

const notification: Record<
  'info' | 'error' | 'warning' | 'success',
  (message: string, options?: TOptions) => string | number
> = {
  info: createNotificationType('info'),
  error: createNotificationType('error'),
  warning: createNotificationType('warning'),
  success: createNotificationType('checkmark-circle'),
}

export { notification }
