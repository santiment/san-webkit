import { onMount } from 'svelte';
import { BROWSER } from 'esm-env';
import { useCustomerCtx } from '../../../ctx/customer/index.svelte.js';
import { deleteSavedValue, getSavedBoolean, saveBoolean } from '../../../utils/localStorage.js';
import { showExpiredSessionDialog$ } from './ExpiredSessionDialog.svelte';
const LS_WAS_USER_LOGGED_IN = 'LS_WUL';
export function useSessionExpiredFlow() {
    if (!BROWSER)
        return;
    const { customer } = useCustomerCtx.get();
    const showExpiredSessionDialog = showExpiredSessionDialog$();
    const isLoggedIn = $derived(customer.$.isLoggedIn);
    if (!isLoggedIn && getSavedBoolean(LS_WAS_USER_LOGGED_IN)) {
        showExpiredSessionDialog();
    }
    $effect(() => {
        if (isLoggedIn)
            saveBoolean(LS_WAS_USER_LOGGED_IN, true);
        else
            deleteSavedValue(LS_WAS_USER_LOGGED_IN);
    });
}
