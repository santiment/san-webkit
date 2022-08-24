export declare function binSearch<T>(
  items: T[],
  target: T,
  compare?: (a: number, b: number) => number,
): {
  value: undefined | T
  mid: number
}
