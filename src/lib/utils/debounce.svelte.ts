export function useDebouncedFn<GFunction extends (...args: any[]) => void>(
  time: number,
  fn: GFunction,
) {
  let timer: NodeJS.Timeout

  const clear = () => clearTimeout(timer)
  $effect(() => clear)

  const debounced = ((...args) => {
    clear()
    timer = setTimeout(() => fn(...args), time)
  }) as GFunction

  return Object.assign(debounced, { cancel: clear })
}
