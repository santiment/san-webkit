import { BROWSER } from 'esm-env';
import { useCustomerCtx } from '../../ctx/customer/index.svelte.js';
import { useDeviceCtx } from '../../ctx/device/index.svelte.js';
import { useUiCtx } from '../../ctx/ui/index.svelte.js';
if (BROWSER) {
    // @ts-ignore
    if (!window.__SESSION__)
        window.__SESSION__ = {};
}
// @ts-ignore
const __SESSION__ = BROWSER ? window.__SESSION__ : {};
export function useAppSessionFlow(data) {
    const { customer } = useCustomerCtx(data.session.customer);
    const { ui } = useUiCtx({ isLiteVersion: data.session.isLiteVersion });
    const { device } = useDeviceCtx(data.session.device);
    if (!BROWSER)
        return;
    $effect(() => {
        Object.assign(__SESSION__, { customer: $state.snapshot(customer.$) });
    });
    $effect(() => {
        Object.assign(__SESSION__, { isLiteVersion: ui.$$.isLiteVersion });
    });
    $effect(() => {
        Object.assign(__SESSION__, { device: device.$.type });
    });
}
