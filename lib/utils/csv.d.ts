declare type Header<T> = {
  title: string
  format: (item: T) => string | number
}
export declare function downloadCsv<T extends any>(
  title: string,
  headers: Header<T>[],
  data: T[],
): void
export {}
