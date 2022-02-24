import { writable } from 'svelte/store'

export type Notification = {
  type?: 'success' | 'error' | 'warning' | 'info'
  title: string
  description?: string
  id?: number
  dismissAfter?: number
}

export const link = (text: string, href: string): string =>
  `<a href="${href}">${text}</a>`

const { subscribe, update } = writable<Set<Notification>>(new Set())

let id = 1
export const notifications = {
  subscribe,
  show: (notification: Notification): void => {
    notification.id = id++
    update((notifications) => {
      notifications.add(notification)
      return notifications
    })
  },
  hide: (notification: Notification): void => {
    update((notifications) => {
      notifications.delete(notification)
      return notifications
    })
  },
}
