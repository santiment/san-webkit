import type { ChangeEventHandler, KeyboardEventHandler } from 'svelte/elements'

import { useDebouncedFn } from '$lib/analytics/amplitude/flow.svelte.js'
import { createCtx } from '$lib/utils/index.js'

type TSearchProps<T> = {
  getCompareValues: (item: T) => string | string[]
}

export const useSearchCtx = createCtx(
  'webkit_useSearchCtx',
  <GItem>({ getCompareValues }: TSearchProps<GItem>) => {
    let searchTerm = $state('')

    const onSearch = useDebouncedFn(250, (value: string) => {
      searchTerm = value
    })

    const onInput: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) =>
      onSearch(currentTarget.value)

    const match = (value: string, target: string) => target.toLowerCase().includes(value)

    const matchItem = (value: string, item: GItem) => {
      const compareValues = getCompareValues(item)

      return Array.isArray(compareValues)
        ? compareValues.some((target) => match(value, target))
        : match(value, compareValues)
    }

    const filter = <T extends GItem>(items: T[]) => {
      const value = searchTerm.toLocaleLowerCase()

      return items.filter((item) => matchItem(value, item))
    }

    const onKeyUp: KeyboardEventHandler<HTMLInputElement> = ({ currentTarget, code }) => {
      if (!currentTarget) return

      if (code === 'Escape') {
        if (searchTerm) {
          currentTarget.value = searchTerm = ''
        }
      }
    }

    return {
      searchTerm: {
        get $() {
          return searchTerm
        },
      },
      filter,
      onKeyUp,
      onInput,
      clear() {
        searchTerm = ''
      },
    }
  },
)
