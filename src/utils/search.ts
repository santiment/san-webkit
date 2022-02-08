const defaultCompare = (a: number, b: number) => a - b
export function binSearch<T>(
  items: T[],
  target: T,
  compare = defaultCompare,
): { value: undefined | T; mid: number } {
  let start = 0
  let stop = items.length - 1
  let value: T | undefined = undefined
  let mid: number = 0

  while (start < stop) {
    mid = Math.floor((start + stop) / 2)
    value = items[mid]
    const dir = compare(value as any, target as any)

    if (dir === 0 || value === undefined) break

    if (dir < 0) stop = mid - 1
    else start = mid + 1
  }

  return { value, mid }
}
