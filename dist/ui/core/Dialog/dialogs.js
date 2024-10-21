import { BROWSER } from 'esm-env';
import { getAllContexts, getContext, mount, unmount, untrack, } from 'svelte';
var Locking;
(function (Locking) {
    Locking[Locking["FREE"] = 0] = "FREE";
    Locking[Locking["LOCKED"] = 1] = "LOCKED";
    Locking[Locking["LOCKED_WARN"] = 2] = "LOCKED_WARN";
})(Locking || (Locking = {}));
export const CTX = 'DialogController';
export const getDialogControllerCtx = () => getContext(CTX);
export const dialogs$ = {
    new(component) {
        const ALL_CTX = getAllContexts();
        const showDialog = (props) => untrack(() => {
            if (!BROWSER)
                return Promise.reject();
            // NOTE: Promise.withResolvers() has a bug on iOS 17
            // const { promise, resolve, reject } = Promise.withResolvers()
            let resolve = () => { };
            let reject = () => { };
            const promise = new Promise((promiseResolve, promiseReject) => {
                resolve = promiseResolve;
                reject = promiseReject;
            });
            let locking = Locking.FREE;
            // const context = new Map(ALL_CTX)
            const context = ALL_CTX;
            const Controller = {
                lock: () => (locking = Locking.LOCKED),
                lockWarn: () => (locking = Locking.LOCKED_WARN),
                unlock: () => (locking = Locking.FREE),
                checkIsLocked: (isForced) => {
                    // NOTE: Enforcing boolean check
                    if (isForced === true)
                        return false;
                    if (locking === Locking.LOCKED)
                        return true;
                    if (locking === Locking.LOCKED_WARN &&
                        confirm('Do you want to close the dialog?') === false) {
                        return true;
                    }
                    return false;
                },
                close: () => { },
                resolve,
                reject,
                _unmount: () => { },
                _context: context,
            };
            context.set(CTX, { Controller });
            const mounted = mount(component, {
                target: document.body,
                context,
                props: { ...props, resolve, reject, Controller },
            });
            Controller._unmount = () => unmount(mounted);
            if (process.env.NODE_ENV !== 'production' && BROWSER) {
                // @ts-expect-error
                if (!window.__STORYBOOK_DIALOGS__)
                    window.__STORYBOOK_DIALOGS__ = new Set();
                //@ts-expect-error
                window.__STORYBOOK_DIALOGS__.add(() => unmount(mounted));
            }
            return promise;
        });
        return showDialog;
    },
};
