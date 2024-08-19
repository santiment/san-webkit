import { toast } from 'svelte-sonner'

export { default } from './Notifications.svelte'
import component from './Notification.svelte'

function createToast(icon: string, ...rest: any) {
  const [message, options] = rest

  return toast.custom(component, {
    componentProps: {
      icon,
      message,
      ...options,
    },
  })
}

toast.info = (...rest) => createToast('info', ...rest)
toast.error = (...rest) => createToast('error', ...rest)
toast.warning = (...rest) => createToast('warning', ...rest)
toast.success = (...rest) => createToast('checkmark-circle', ...rest)

export { toast as notification }
