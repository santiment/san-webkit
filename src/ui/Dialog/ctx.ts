import { setContext, getContext } from 'svelte'
import { DialogLock } from './types'

export const CTX = 'Dialog'

type Ctx = { DialogPromise: SAN.Dialog.Promise; closeDialog: (skipLockChecks?: boolean) => void }
export const setDialogCtx = ({ DialogPromise, closeDialog }: Ctx) =>
  setContext(CTX, {
    close: closeDialog,
    lock: () => (DialogPromise.locking = DialogLock.LOCKED),
    lockWarn: () => (DialogPromise.locking = DialogLock.WARN),
    unlock: () => (DialogPromise.locking = DialogLock.FREE),
  })

export const getDialogCtx = () => getContext<ReturnType<typeof setDialogCtx>>(CTX)
