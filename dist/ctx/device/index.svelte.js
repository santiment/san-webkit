import { BROWSER } from 'esm-env';
import { untrack } from 'svelte';
import { createCtx, ss } from '../../utils/index.js';
export var DeviceType;
(function (DeviceType) {
    DeviceType["Desktop"] = "desktop";
    DeviceType["Tablet"] = "tablet";
    DeviceType["Phone"] = "phone";
    DeviceType["PhoneXs"] = "phone-xs";
})(DeviceType || (DeviceType = {}));
export function getDeviceInfo(type) {
    const isPhone = type.includes(DeviceType.Phone);
    const isMobile = isPhone || type === DeviceType.Tablet;
    return { type, isMobile, isPhone, isDesktop: !isMobile };
}
export function normalizeDeviceType(type) {
    switch (type) {
        case 'mobile':
            return DeviceType.Phone;
        case 'tablet':
            return DeviceType.Tablet;
        default:
            return DeviceType.Desktop;
    }
}
const device = ss(getDeviceInfo(DeviceType.Desktop));
function onDeviceTypeChange(deviceType) {
    untrack(() => {
        if (device.$.type === deviceType)
            return;
        if (BROWSER) {
            document.body.classList.remove(device.$.type);
            document.body.classList.add(deviceType);
        }
        device.$ = getDeviceInfo(deviceType);
    });
}
if (BROWSER) {
    function mapWindowToDevice() {
        const { innerWidth } = window;
        if (innerWidth < 480)
            return DeviceType.PhoneXs;
        if (innerWidth < 768)
            return DeviceType.Phone;
        if (innerWidth < 992)
            return DeviceType.Tablet;
        return DeviceType.Desktop;
    }
    const onResize = () => onDeviceTypeChange(mapWindowToDevice());
    onResize();
    window.addEventListener('resize', onResize, { passive: true });
}
export const useDeviceCtx = createCtx('useDeviceCtx', (deviceType) => {
    if (deviceType)
        onDeviceTypeChange(deviceType);
    return { device };
});
