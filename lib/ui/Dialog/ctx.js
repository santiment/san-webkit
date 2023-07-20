import { noop } from './../../utils/index.js';
import { setContext, getContext } from 'svelte';
import { DialogLock } from './types.js';
export const CTX = 'Dialog';
export const newDialogCtx = (DialogPromise, closeDialog = noop) => ({
    close: closeDialog,
    lock: () => (DialogPromise.locking = DialogLock.LOCKED),
    lockWarn: () => (DialogPromise.locking = DialogLock.WARN),
    unlock: () => (DialogPromise.locking = DialogLock.FREE),
    resolve: (value) => DialogPromise.resolve(value),
    reject: (reason) => DialogPromise.reject(reason),
});
export const setDialogCtx = (DialogCtx) => setContext(CTX, DialogCtx);
export const getDialogCtx = () => getContext(CTX);
//# sourceMappingURL=ctx.js.map