import { DialogLock } from './types';
export declare const CTX = "Dialog";
export type DialogCtxType = ReturnType<typeof newDialogCtx>;
export declare const newDialogCtx: (DialogPromise: SAN.Dialog.Promise, closeDialog?: (skipLockChecks?: boolean) => void) => {
    close: (skipLockChecks?: boolean) => void;
    lock: () => DialogLock;
    lockWarn: () => DialogLock;
    unlock: () => DialogLock;
};
export declare const setDialogCtx: (DialogCtx: DialogCtxType) => {
    close: (skipLockChecks?: boolean) => void;
    lock: () => DialogLock;
    lockWarn: () => DialogLock;
    unlock: () => DialogLock;
};
export declare const getDialogCtx: () => {
    close: (skipLockChecks?: boolean) => void;
    lock: () => DialogLock;
    lockWarn: () => DialogLock;
    unlock: () => DialogLock;
};
