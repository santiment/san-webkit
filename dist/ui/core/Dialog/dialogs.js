import { BROWSER } from 'esm-env';
import { getAllContexts, getContext, mount, unmount, untrack, } from 'svelte';
export const CTX = 'DialogController';
export const getDialogControllerCtx = () => getContext(CTX);
export const dialogs$ = {
    new(component) {
        const ALL_CTX = getAllContexts();
        const showDialog = (props) => untrack(() => {
            if (!BROWSER)
                return Promise.reject();
            const { promise, resolve, reject } = Promise.withResolvers();
            const Controller = {
                lock: () => { },
                lockWarn: () => { },
                unlock: () => { },
                close: () => { },
                resolve,
                reject,
                _unmount: () => { },
            };
            const context = new Map(ALL_CTX);
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
