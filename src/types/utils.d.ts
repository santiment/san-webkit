declare namespace SAN {
  declare namespace Utils {
    type RemoveIndex<T> = {
      [K in keyof T as string extends K
        ? never
        : number extends K
        ? never
        : symbol extends K
        ? never
        : K]: T[K]
    }
  }
}
