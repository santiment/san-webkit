import { writable } from 'svelte/store'
export const link = (text, href) => `<a href="${href}">${text}</a>`
const { subscribe, update } = writable(new Set())
let id = 1
export const notifications$ = {
  subscribe,
  show: (notification) => {
    notification.id = id++
    update((notifications) => {
      notifications.add(notification)
      return notifications
    })
  },
  hide: (notification) => {
    update((notifications) => {
      notifications.delete(notification)
      return notifications
    })
  },
}
//# sourceMappingURL=notifications.js.map
