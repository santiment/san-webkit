import { ssd } from 'svelte-runes'
import { createDialog, type CreateDialogProps } from '@melt-ui/svelte'

import { getDialogControllerCtx } from './dialogs.js'

export const TRANSITION_MS = 180

export function useOpenState() {
  const { Controller } = getDialogControllerCtx()

  const isMounted = ssd(() => false)

  // @ts-expect-error
  const onClosed = () => Controller._unmount()

  function onOpenChange({ next }: { next: boolean }) {
    if (next === false) {
      if (isMounted.$ === false) return true

      // Forcing memory clean
      setTimeout(onClosed, TRANSITION_MS + 50)
    }

    return next
  }

  $effect(() => {
    setTimeout(() => (isMounted.$ = true), TRANSITION_MS + 50)
  })

  return {
    onOpenChange,
    onClosed,
    isMounted,
  }
}

export function useCreateDialog(onOpenChange: CreateDialogProps['onOpenChange']) {
  const { Controller } = getDialogControllerCtx()

  const {
    elements,
    states: { open },
  } = createDialog({ forceVisible: true, closeOnOutsideClick: false, onOpenChange })

  function close(isForced?: boolean) {
    if (Controller.checkIsLocked(isForced)) return false

    open.set(false)
  }

  $effect(() => {
    open.set(true)
    Controller.close = close
  })

  return { elements, states: { open }, close }
}
