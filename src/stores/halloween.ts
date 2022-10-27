import { query } from '@/api'
import { Cache } from '@/api/cache'
import { writable } from 'svelte/store'

export const PUMPKINS_COUNT_QUERY = `{
  getPumpkinsCount
}`

type Query = SAN.API.Query<'getPumpkinsCount', { getPumpkinsCount: number }>

const accessor = ({ getPumpkinsCount: count }: Query) => ({ count })
export const queryPumpkinsCount = () => query<Query>(PUMPKINS_COUNT_QUERY).then(accessor)

export type HalloweenData = {
  count: number
}

export const DEFAULT = {
  count: 0,
} as HalloweenData

const { subscribe, set } = writable<HalloweenData>(DEFAULT)

export const halloweenData$ = {
  fetched: false,
  set,
  setValue(value) {
    halloweenData$.set(value)
    return value
  },
  setDefault() {
    this.set(DEFAULT)
  },
  query() {
    this.fetched = true
    return queryPumpkinsCount()
      .then(this.setValue)
      .catch((e) => {
        console.error(e)
        this.set(DEFAULT)
      })
  },
  subscribe(run: Parameters<typeof subscribe>[0], invalidate): ReturnType<typeof subscribe> {
    if (!this.fetched) this.query()
    return subscribe(run, invalidate)
  },
  clear() {
    Cache.delete(PUMPKINS_COUNT_QUERY)
    this.fetched = false
  },
  refetch() {
    this.clear()
    return this.query()
  },
}
