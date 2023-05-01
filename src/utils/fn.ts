import { readable } from 'svelte/store'

type Callback = (...args: any[]) => void
export function debounce<T extends Callback>(timeout: number, fn: T) {
  let timer: number
  const clear = () => process.browser && window.clearTimeout(timer)
  const debounced = (...args: any) => {
    clear()
    return new Promise((resolve) => {
      timer = window.setTimeout(() => resolve(fn(...args)), timeout)
    })
  }

  return [debounced, clear] as [(...args: Parameters<T>) => Promise<ReturnType<T>>, () => void]
}

/** Debounced function can be accessed by subscribing to a store by prefixing it with a $ sign*/
export function debounce$$<T extends Callback>(timeout: number, fn: T) {
  const [debounced, clear] = debounce(timeout, fn)
  return readable(debounced, () => clear)
}

const once = { once: true }
export function Preloader(dataPreloader: (...args: any) => any) {
  return (node: HTMLElement) => {
    node.addEventListener('mouseenter', dataPreloader, once)
    node.addEventListener('touchstart', dataPreloader, once)
  }
}
