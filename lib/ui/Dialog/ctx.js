import { setContext, getContext } from 'svelte';
import { DialogLock } from './types';
export const CTX = 'Dialog';
export const setDialogCtx = ({ DialogPromise, closeDialog }) => setContext(CTX, {
    close: closeDialog,
    lock: () => (DialogPromise.locking = DialogLock.LOCKED),
    lockWarn: () => (DialogPromise.locking = DialogLock.WARN),
    unlock: () => (DialogPromise.locking = DialogLock.FREE),
});
export const getDialogCtx = () => getContext(CTX);
//# sourceMappingURL=ctx.js.map