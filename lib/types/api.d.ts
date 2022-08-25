interface Request extends RequestInit {
  headers: Record<string, string | null>
}

declare namespace SAN {
  declare namespace API {
    type Query<T extends string, U> = Record<T, U>
    type QueryBase = Query<string, unknown>
    type QueryData<T extends QueryBase> = T[keyof T]

    type QueryOptions<T extends QueryBase, U extends Variables = Variables> = {
      cache?: boolean
      /** Caching time in seconds */ cacheTime?: number
      cachePolicy?: CachePolicy
      precacher?: (vars?: U) => Updater<T>
      variables?: U
    }

    type RequestOptions = Omit<RequestInit, 'headers'> & { headers?: Record<string, string | null> }

    type CachePolicy = import('../api/cache').CachePolicy
    type Updater<T extends QueryBase> = (data: T) => T
    type Subscriber<T extends QueryBase> = (data: T) => void
    type Unsubscriber = () => void
  }
}
