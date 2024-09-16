import { BROWSER } from 'esm-env';
import { getAllContexts, getContext, mount, unmount, untrack, } from 'svelte';
import { getVaulCtx } from './vaul.js';
export const CTX = 'DialogController';
export const getDialogControllerCtx = () => getContext(CTX);
export const dialogs$ = {
    new(component) {
        const ALL_CTX = getAllContexts();
        const parentDialog = ALL_CTX.get(CTX);
        // HACK: Accessing parent's vaul ctx
        queueMicrotask(() => {
            const [vaulCtxKey, vaulCtx] = getVaulCtx(parentDialog?.Controller?._context || ALL_CTX);
            if (vaulCtx)
                ALL_CTX.set(vaulCtxKey, vaulCtx);
        });
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
            // const context = new Map(ALL_CTX)
            const context = ALL_CTX;
            const Controller = {
                lock: () => { },
                lockWarn: () => { },
                unlock: () => { },
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
