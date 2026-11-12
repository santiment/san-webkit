import { on } from 'svelte/events'

type TCloseOutsideProps = {
  getIsOpened: () => boolean
  close: () => void
  enabled?: boolean
}

export const useCloseOnOutsideClick = ({
  getIsOpened,
  close,
  enabled = true,
}: TCloseOutsideProps) => {
  let triggerEl = $state<HTMLElement | null>(null)
  let contentEl = $state<HTMLElement | null>(null)

  const isOpened = $derived(getIsOpened())

  if (enabled) {
    $effect(() => {
      if (!isOpened) return

      return on(window, 'pointerdown', (e) => {
        if (contentEl && e.composedPath().includes(contentEl)) return
        if (triggerEl && e.composedPath().includes(triggerEl)) return

        close()
      })
    })
  }

  return {
    triggerEl: {
      get $() {
        return triggerEl
      },
      set $(el: HTMLElement | null) {
        triggerEl = el
      },
    },

    contentEl: {
      get $() {
        return contentEl
      },
      set $(el: HTMLElement | null) {
        contentEl = el
      },
    },
  }
}
