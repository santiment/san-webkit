import { writable } from 'svelte/store'
import { Cache } from '@/api/cache'

if (process.browser) {
  if (!window.__SAPPER__) {
    window.__SAPPER__ = { session: {} }
  }
}

export const getSessionValue = () => window.__SAPPER__.session
export const setSessionValue = (value) => Object.assign(getSessionValue(), value)

export function QueryStore<T>(defaultValue: T, query: () => Promise<T>, schema: string) {
  const { subscribe, set: _set } = writable<T>(defaultValue)

  const set = (value: T) => (_set(value), value)
  return {
    DEFAULT: defaultValue,
    fetched: false,
    set,
    subscribe(run: Parameters<typeof subscribe>[0], invalidate): ReturnType<typeof subscribe> {
      if (!this.fetched) this.query()
      return subscribe(run, invalidate)
    },
    clear() {
      Cache.delete(schema)
      this.fetched = false
    },
    query(): Promise<T> {
      this.fetched = true
      return query()
        .then(set)
        .catch((e) => {
          console.error(e)
          this.resetToDefault()
          return Promise.reject(e)
        })
    },
    refetch(): undefined | Promise<T> {
      if (this.fetched === false) return

      this.clear()
      return this.query()
    },
    resetToDefault() {
      set(this.DEFAULT)
    },
  }
}
