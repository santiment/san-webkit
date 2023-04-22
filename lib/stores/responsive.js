import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { Device, mapWidthToDevice, responsive$, phoneDevices } from './../responsive';
// import { setSessionValue } from './utils'
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
    return setContext(CTX, {
        device$: Object.assign(Object.assign({}, store), { onResize() {
                const deviceType = mapWidthToDevice();
                if (deviceType === device.type)
                    return;
                // setSessionValue({ device })
                store.set(Object.assign(device, getDeviceInfo(deviceType)));
            } }),
    });
}
export const getDevice$Ctx = () => getContext(CTX);
//# sourceMappingURL=responsive.js.map