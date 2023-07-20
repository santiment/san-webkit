import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { Device, mapWidthToDevice, responsive$, phoneDevices } from './../responsive.js';
// import { setSessionValue } from './utils.js'
const checkIsMobile = (device) => device !== Device.Desktop;
export const IsMobile = writable(checkIsMobile(mapWidthToDevice()));
const checkIsPhone = (device) => phoneDevices.has(device);
export const IsPhone = writable(checkIsPhone(mapWidthToDevice()));
responsive$.subscribe((device) => {
    IsMobile.set(checkIsMobile(device));
    IsPhone.set(checkIsPhone(device));
});
export function getDeviceInfo(type) {
    const isMobile = type.includes(Device.Phone) || type === Device.Tablet;
    return { type, isMobile, isDesktop: !isMobile };
}
const CTX = 'Device$$';
export function Device$$(device) {
    const store = writable(device);
    const device$ = Object.assign(Object.assign({}, store), { 
        /** Add as <svelte:window on:resize={device$.onResize} /> */
        onResize() {
            const deviceType = mapWidthToDevice();
            if (deviceType === device.type)
                return;
            document.body.classList.remove(device.type);
            document.body.classList.add(deviceType);
            // setSessionValue({ device })
            store.set(Object.assign(device, getDeviceInfo(deviceType)));
        } });
    if (process.browser)
        device$.onResize();
    return setContext(CTX, { device$ });
}
export const getDevice$Ctx = () => getContext(CTX);
//# sourceMappingURL=responsive.js.map