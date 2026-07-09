import type { ChangeEventHandler, KeyboardEventHandler } from 'svelte/elements'

import { createCtx, useDebouncedFn } from '$lib/utils/index.js'

type TSearchProps<T> = {
  getCompareValues: (item: T) => string | string[]
}

export const useSearchCtx = createCtx(
  'webkit_useSearchCtx',
  <GItem>({ getCompareValues }: TSearchProps<GItem>) => {
    let searchTerm = $state.raw<string[]>([])

    const isSearching = $derived(searchTerm.length > 0)

    const onSearch = useDebouncedFn(250, (value: string) => {
      searchTerm = value ? value.split(' ') : []
    })

    const oninput: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) =>
      onSearch(currentTarget.value.trim().toLowerCase())

    const match = (value: string, target: string) => target.toLowerCase().includes(value)

    const matchItem = (value: string, item: GItem) => {
      const compareValues = getCompareValues(item)

      return Array.isArray(compareValues)
        ? compareValues.some((target) => match(value, target))
        : match(value, compareValues)
    }

    const filter = <T extends GItem>(items: T[]) =>
      isSearching
        ? items.filter((item) => searchTerm.every((value) => matchItem(value, item)))
        : items

    const onkeyup: KeyboardEventHandler<HTMLInputElement> = ({ currentTarget, code }) => {
      if (!currentTarget) return

      if (code === 'Escape') {
        if (searchTerm) {
          searchTerm = []
          currentTarget.value = ''
        }
      }
    }

    return {
      searchTerm: {
        get $() {
          return searchTerm
        },
      },
      isSearching: {
        get $() {
          return isSearching
        },
      },
      filter,
      /** @deprecated use [onkeyup] instead */
      onKeyUp: onkeyup,
      /** @deprecated use [oninput] instead */
      onInput: oninput,
      onkeyup,
      oninput,
      clear() {
        searchTerm = []
      },
    }
  },
)
