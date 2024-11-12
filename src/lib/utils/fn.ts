import { BROWSER } from 'esm-env'

type Callback = (...args: any[]) => void
export function debounce<T extends Callback>(timeout: number, fn: T) {
  let timer: number
  const clear = () => BROWSER && window.clearTimeout(timer)
  const debounced = (...args: any) => {
    clear()
    return new Promise((resolve) => {
      timer = window.setTimeout(() => resolve(fn(...args)), timeout)
    })
  }

  return [debounced, clear] as [(...args: Parameters<T>) => Promise<ReturnType<T>>, () => void]
}
