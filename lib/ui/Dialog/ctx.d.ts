import { DialogLock } from './types';
export declare const CTX = "Dialog";
export type DialogCtxType<T = unknown> = ReturnType<typeof newDialogCtx<T>>;
export declare const newDialogCtx: <T = unknown>(DialogPromise: SAN.Dialog.Promise, closeDialog?: (skipLockChecks?: boolean) => void) => {
    close: (skipLockChecks?: boolean) => void;
    lock: () => DialogLock;
    lockWarn: () => DialogLock;
    unlock: () => DialogLock;
    resolve: (value: T) => void;
    reject: <T_1>(reason?: T_1 | undefined) => void;
};
export declare const setDialogCtx: (DialogCtx: DialogCtxType) => {
    close: (skipLockChecks?: boolean) => void;
    lock: () => DialogLock;
    lockWarn: () => DialogLock;
    unlock: () => DialogLock;
    resolve: (value: unknown) => void;
    reject: <T>(reason?: T | undefined) => void;
};
export declare const getDialogCtx: <T>() => {
    close: (skipLockChecks?: boolean) => void;
    lock: () => DialogLock;
    lockWarn: () => DialogLock;
    unlock: () => DialogLock;
    resolve: (value: T) => void;
    reject: <T_1>(reason?: T_1 | undefined) => void;
};
