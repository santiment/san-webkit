import { BROWSER } from 'esm-env';
import { useCustomerCtx } from '../../ctx/customer/index.svelte.js';
import { useDeviceCtx } from '../../ctx/device/index.svelte.js';
import { useUiCtx } from '../../ctx/ui/index.svelte.js';
if (BROWSER) {
    if (!window.__SESSION__)
        window.__SESSION__ = {};
}
let __SESSION__ = (BROWSER ? window.__SESSION__ : {});
export function useAppSessionFlow(data) {
    const { customer } = useCustomerCtx(data.session.customer);
    const { ui } = useUiCtx({ isLiteVersion: data.session.isLiteVersion });
    const { device } = useDeviceCtx(data.session.device.type);
    if (!BROWSER)
        return;
    $effect(() => {
        Object.assign(__SESSION__, { customer: $state.snapshot(customer.$) });
    });
    $effect(() => {
        Object.assign(__SESSION__, { isLiteVersion: ui.$$.isLiteVersion });
    });
    $effect(() => {
        Object.assign(__SESSION__, { device: device.$ });
    });
}
/**
 * Pass LayoutLoad's `data` in `+layout.ts`
 */
export function setupClientAppSession(data) {
    if (!BROWSER)
        return;
    window.__SESSION__ = __SESSION__ = data || {};
}
