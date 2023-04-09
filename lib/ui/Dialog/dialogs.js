var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
        const { strict } = props, rest = __rest(props, ["strict"]);
        const promise = new Promise((resolve, reject) => (rest.DialogPromise = { resolve, reject, locking: DialogLock.FREE }));
        rest.DialogCtx = newDialogCtx(rest.DialogPromise);
        update((dialogs) => {
            dialogs.push({ Component, props: rest });
            return dialogs;
        });
        return strict ? promise : promise.catch(pipeCatch);
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