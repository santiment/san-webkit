import { noop } from '@/utils'
import { setContext, getContext } from 'svelte'
import { DialogLock } from './types'

export const CTX = 'Dialog'

export type DialogCtxType = ReturnType<typeof newDialogCtx>

export const newDialogCtx = (
  DialogPromise: SAN.Dialog.Promise,
  closeDialog = noop as (skipLockChecks?: boolean) => void,
) => ({
  close: closeDialog,
  lock: () => (DialogPromise.locking = DialogLock.LOCKED),
  lockWarn: () => (DialogPromise.locking = DialogLock.WARN),
  unlock: () => (DialogPromise.locking = DialogLock.FREE),
})

export const setDialogCtx = (DialogCtx: DialogCtxType) => setContext(CTX, DialogCtx)

export const getDialogCtx = () => getContext<DialogCtxType>(CTX)
