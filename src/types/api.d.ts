declare namespace SAN {
  declare namespace API {
    export type Query<T extends string, U> = Record<T, U>
    export type QueryBase = Query<string, unknown>
    export type QueryData<T extends QueryBase> = T[keyof T]

    export type QueryOptions<
      T extends QueryBase,
      U extends Variables = Variables
    > = {
      cache?: boolean
      /** Caching time in seconds */ cacheTime?: number
      cachePolicy?: CachePolicy
      precacher?: (vars?: U) => Updater<T>
      variables?: U
    }

    export type Updater<T extends QueryBase> = (data: T) => T
    export type Subscriber<T extends QueryBase> = (data: T) => void
    export type Unsubscriber = () => void
  }
}
