import { noop } from '@/utils'
import { setContext, getContext } from 'svelte'
import { DialogLock } from './types'

export const CTX = 'Dialog'

export type DialogCtxType<T = unknown> = ReturnType<typeof newDialogCtx<T>>

export const newDialogCtx = <T = unknown>(
  DialogPromise: SAN.Dialog.Promise,
  closeDialog = noop as (skipLockChecks?: boolean) => void,
) => ({
  close: closeDialog,
  lock: () => (DialogPromise.locking = DialogLock.LOCKED),
  lockWarn: () => (DialogPromise.locking = DialogLock.WARN),
  unlock: () => (DialogPromise.locking = DialogLock.FREE),

  resolve: (value: T) => DialogPromise.resolve(value),
  reject: <T>(reason?: T) => DialogPromise.reject(reason),
})

export const setDialogCtx = (DialogCtx: DialogCtxType) => setContext(CTX, DialogCtx)

export const getDialogCtx = <T>() => getContext<DialogCtxType<T>>(CTX)
