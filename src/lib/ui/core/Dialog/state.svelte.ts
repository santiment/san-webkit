import { createDialog, type CreateDialogProps } from '@melt-ui/svelte'

import { getDialogControllerCtx } from './dialogs.js'

export const TRANSITION_MS = 180

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
