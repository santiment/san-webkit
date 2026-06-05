import { createDialog, type CreateDialogProps } from '@melt-ui/svelte'
import { onMount } from 'svelte'

import { getDialogControllerCtx } from './dialogs.js'

export const TRANSITION_MS = 180

export function useCreateDialog(onOpenChange: CreateDialogProps['onOpenChange']) {
  const { Controller } = getDialogControllerCtx()

  const {
    elements,
    states: { open },
  } = createDialog({
    forceVisible: true,
    closeOnOutsideClick: false,
    escapeBehavior: 'defer-otherwise-ignore',
    onOpenChange,
  })

  function close(isForced?: boolean) {
    if (Controller.checkIsLocked(isForced)) return false

    open.set(false)
  }

  onMount(() => {
    open.set(true)
    Controller.close = close
  })

  return { elements, states: { open }, close }
}
