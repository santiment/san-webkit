import { writable } from 'svelte/store'
import { Cache } from '@/api/cache'
import { BROWSER } from 'esm-env'

if (typeof window !== 'undefined') {
  if (!window.__SESSION__) window.__SESSION__ = {}
}

export const getSessionValue = () => window.__SESSION__
export const setSessionValue = (value) => Object.assign(getSessionValue(), value)

export function QueryStore<T>(
  defaultValue: T,
  query: () => Promise<T>,
  schema: string,
  DEFAULT = defaultValue,
) {
  const { subscribe, set: _set } = writable<T>(defaultValue)

  const set = (value: T) => (_set(value), value)
  return {
    DEFAULT,
    fetched: false,
    set,
    subscribe(run: Parameters<typeof subscribe>[0], invalidate): ReturnType<typeof subscribe> {
      if (BROWSER && !this.fetched) this.query()
      return subscribe(run, invalidate)
    },
    clear() {
      Cache.delete(schema)
      this.fetched = false
    },
    query(): Promise<T> {
      if (!BROWSER) return Promise.reject('Can not fetch during SSR')

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
