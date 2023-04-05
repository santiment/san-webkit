import { DialogLock } from './types';
export declare const CTX = "Dialog";
type Ctx = {
    DialogPromise: SAN.Dialog.Promise;
    closeDialog: (skipLockChecks?: boolean) => void;
};
export declare const setDialogCtx: ({ DialogPromise, closeDialog }: Ctx) => {
    close: (skipLockChecks?: boolean) => void;
    lock: () => DialogLock.LOCKED;
    lockWarn: () => DialogLock.WARN;
    unlock: () => DialogLock.FREE;
};
export declare const getDialogCtx: () => {
    close: (skipLockChecks?: boolean) => void;
    lock: () => DialogLock.LOCKED;
    lockWarn: () => DialogLock.WARN;
    unlock: () => DialogLock.FREE;
};
export {};
