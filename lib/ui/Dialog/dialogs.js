import { writable } from 'svelte/store';
import { newDialogCtx } from './ctx';
import { DialogLock } from './types';
export { DialogLock } from './types';
const DIALOGS = [];
const { subscribe, update } = writable(DIALOGS);
const pipeCatch = (e) => e && Promise.reject(e);
export const dialogs = {
    subscribe,
    show(Component, props = {}) {
        const promise = new Promise((resolve, reject) => (props.DialogPromise = { resolve, reject, locking: DialogLock.FREE }));
        props.DialogCtx = newDialogCtx(props.DialogPromise);
        update((dialogs) => {
            dialogs.push({ Component, props });
            return dialogs;
        });
        return props.strict ? promise : promise.catch(pipeCatch);
    },
    /** Only single entity of the Component can be mounted at the same time */
    showOnce(Component, props = {}) {
        return dialogs.has(Component) ? undefined : dialogs.show(Component, props);
    },
    hide(index) {
        update((dialogs) => {
            dialogs.splice(index, 1);
            return dialogs;
        });
    },
    has(Component) {
        for (let i = DIALOGS.length - 1; i > -1; i--) {
            if (DIALOGS[i].Component === Component)
                return true;
        }
        return false;
    },
};
/*

Example:

<div id="dialogs">
  {#each $dialogs as { Component, props }, i}
    <svelte:component this={Component} {...props} {i} />
  {/each}
</div>

*/
//# sourceMappingURL=dialogs.js.map