type Callback = (...args: any[]) => any
export function debounce<T extends Callback>(timeout: number, fn: T): [T, () => void] {
  let timer
  const clear = () => window.clearTimeout(timer)
  const debounced = (...args) => {
    clear()
    timer = window.setTimeout(() => fn(...args), timeout)
  }

  return [debounced as T, clear]
}
