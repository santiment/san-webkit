import { query } from '@/api'
import { Cache } from '@/api/cache'
import { writable } from 'svelte/store'

export const PUMPKINS_COUNT_QUERY = `{
  getPumpkins
}`

type Query = SAN.API.Query<'getPumpkins', { getPumpkins: string[] }>

const accessor = ({ getPumpkins: pages }: Query) => ({ pages })
export const queryPumpkinsCount = () => query<Query>(PUMPKINS_COUNT_QUERY).then(accessor)

export type HalloweenData = {
  pages: string[]
}

export const DEFAULT = {
  pages: [],
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
