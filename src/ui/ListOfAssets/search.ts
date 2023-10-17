import type { Asset } from './types'

import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'
import { debounce } from '@/utils/fn'

const CTX = 'AssetSearcher$$'
export function Searcher$$(options = {} as any) {
  let searchTerm = ''
  const searchTerm$ = writable(searchTerm)

  const [onSearch, clear] = debounce(250, (value: string) => {
    searchTerm$.set((searchTerm = value))
  })
  const onInput = ({ currentTarget }) => onSearch(currentTarget.value)

  const match = (value: string, target: string) => target.toLowerCase().includes(value)

  const matchAsset = (value: string, { slug, ticker, name }: Asset) =>
    match(value, slug) || match(value, ticker) || match(value, name)

  function filter<T>(items: T[]) {
    const value = searchTerm.toLowerCase()
    return items.filter((item) => matchAsset(value, options.accessAsset(item)))
  }

  function onKeyUp({ currentTarget, code }: KeyboardEvent) {
    if (!currentTarget) return

    const inputNode = currentTarget as HTMLInputElement

    if (code === 'Escape') {
      if (searchTerm) {
        inputNode.value = searchTerm = ''
        searchTerm$.set(searchTerm)
      } else options.onEscape?.()
    }
  }

  return setContext(CTX, {
    searchTerm$,
    filter,
    onKeyUp,
    onInput,
    clear() {
      searchTerm$.set('')
      clear()
    },
  })
}

export const getSearcher$Ctx = () => getContext(CTX) as ReturnType<typeof Searcher$$>
