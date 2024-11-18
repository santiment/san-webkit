import { BROWSER } from 'esm-env';
if (BROWSER) {
    // NOTE: Overwriting global close function that closes an active tab (for cases when incorrect close fn is called)
    window.close = () => { };
}
export { default } from './Dialog.svelte';
export { dialogs$, getDialogControllerCtx } from './dialogs.js';
