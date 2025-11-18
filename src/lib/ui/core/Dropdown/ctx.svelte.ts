import type { TBasicItem } from './types.js'

import { type Snippet } from 'svelte'

import { createCtx } from '$lib/utils/index.js'

const CTX = 'webkit_useDropdownCtx'

export type TDropdownCtx<T extends TBasicItem> = {
  selected: T | undefined
  closeDelay: number | undefined
  label: Snippet<[T]> | undefined
}

export const useDropdownCtx = createCtx(
  CTX,
  <T extends TBasicItem>({ selected: selectedProp, label, closeDelay = 0 }: TDropdownCtx<T>) => {
    let closeTimer: NodeJS.Timeout | undefined

    let selected = $state(selectedProp)
    let isOpened = $state(false)

    const getItemIcon = (item: TBasicItem | undefined) =>
      typeof item === 'string' ? undefined : item?.icon

    function closeDropdown({ skipDelay }: { skipDelay?: boolean }) {
      clearTimeout(closeTimer)

      if (skipDelay) {
        close()
      } else {
        closeTimer = setTimeout(() => {
          close()
        }, closeDelay)
      }
    }

    function close() {
      isOpened = false
    }

    return {
      selected: {
        get $() {
          return selected
        },

        set $(value: T | undefined) {
          selected = value
        },
      },

      isOpened: {
        get $() {
          return isOpened
        },

        set $(value: boolean) {
          isOpened = value
        },
      },

      label,
      getItemIcon,
      closeDropdown,
    }
  },
)
