import { BROWSER } from 'esm-env';
import { untrack } from 'svelte';
import { createCtx, ss } from '../../utils/index.js';
import { BREAKPOINTS } from './breakpoints.js';
export var DeviceType;
(function (DeviceType) {
    DeviceType["Desktop"] = "desktop";
    DeviceType["Tablet"] = "tablet";
    DeviceType["Phone"] = "phone";
    /** @deprecated use [DeviceType.Phone] instead */
    DeviceType["PhoneXs"] = "phone-xs";
})(DeviceType || (DeviceType = {}));
export function getDeviceInfo(type) {
    const isPhone = type === DeviceType.Phone || type === DeviceType.PhoneXs;
    const isTablet = type === DeviceType.Tablet;
    const isDesktop = type === DeviceType.Desktop;
    const isMobile = isPhone || isTablet;
    return { type, isPhone, isTablet, isMobile, isDesktop };
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
const DEVICE_BREAKPOINTS = [
    { breakpoint: 'xs', device: DeviceType.PhoneXs },
    { breakpoint: 'sm', device: DeviceType.Phone },
    { breakpoint: 'md', device: DeviceType.Tablet },
];
const device = ss(getDeviceInfo(DeviceType.Desktop));
const getViewportDeviceType = (queries) => queries.find(({ media }) => media.matches)?.device ?? DeviceType.Desktop;
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
    const queries = DEVICE_BREAKPOINTS.map(({ breakpoint, device }, i, deviceBreakpoints) => {
        const prevDevice = i > 0 ? deviceBreakpoints.at(i - 1) : undefined;
        const prevBreakpoint = prevDevice ? BREAKPOINTS[prevDevice.breakpoint] : '0px';
        return {
            device,
            media: window.matchMedia(`(min-width: calc(${prevBreakpoint} + 1px)) and (max-width: ${BREAKPOINTS[breakpoint]})`),
        };
    });
    const onBreakpointChange = () => onDeviceTypeChange(getViewportDeviceType(queries));
    onBreakpointChange();
    queries.forEach(({ media }) => media.addEventListener('change', onBreakpointChange));
}
export const useDeviceCtx = createCtx('useDeviceCtx', (deviceType) => {
    if (deviceType && !BROWSER)
        onDeviceTypeChange(deviceType);
    return { device };
});
