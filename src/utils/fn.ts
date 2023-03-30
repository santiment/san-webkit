import { readable } from 'svelte/store'

type Callback = (...args: any[]) => void
export function debounce<T extends Callback>(timeout: number, fn: T): [T, () => void] {
  let timer: number
  const clear = () => process.browser && window.clearTimeout(timer)
  const debounced = (...args: any) => {
    clear()
    timer = window.setTimeout(() => fn(...args), timeout)
  }

  return [debounced as T, clear]
}

/** Debounced function can be accessed by subscribing to a store by prefixing it with a $ sign*/
export function debounce$<T extends Callback>(timeout: number, fn: T) {
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
