import { Device } from './../responsive';
export declare const IsMobile: import("svelte/store").Writable<boolean>;
export declare const IsPhone: import("svelte/store").Writable<boolean>;
export type DeviceInfoType = ReturnType<typeof getDeviceInfo>;
export declare function getDeviceInfo(type: Device): {
    type: Device;
    isMobile: boolean;
    isDesktop: boolean;
};
export declare function Device$$(device: DeviceInfoType): {
    device$: {
        /** Add as <svelte:window on:resize={device$.onResize} /> */
        onResize(): void;
        set(this: void, value: {
            type: Device;
            isMobile: boolean;
            isDesktop: boolean;
        }): void;
        update(this: void, updater: import("svelte/store").Updater<{
            type: Device;
            isMobile: boolean;
            isDesktop: boolean;
        }>): void;
        subscribe(this: void, run: import("svelte/store").Subscriber<{
            type: Device;
            isMobile: boolean;
            isDesktop: boolean;
        }>, invalidate?: ((value?: {
            type: Device;
            isMobile: boolean;
            isDesktop: boolean;
        } | undefined) => void) | undefined): import("svelte/store").Unsubscriber;
    };
};
export declare const getDevice$Ctx: () => {
    device$: {
        /** Add as <svelte:window on:resize={device$.onResize} /> */
        onResize(): void;
        set(this: void, value: {
            type: Device;
            isMobile: boolean;
            isDesktop: boolean;
        }): void;
        update(this: void, updater: import("svelte/store").Updater<{
            type: Device;
            isMobile: boolean;
            isDesktop: boolean;
        }>): void;
        subscribe(this: void, run: import("svelte/store").Subscriber<{
            type: Device;
            isMobile: boolean;
            isDesktop: boolean;
        }>, invalidate?: ((value?: {
            type: Device;
            isMobile: boolean;
            isDesktop: boolean;
        } | undefined) => void) | undefined): import("svelte/store").Unsubscriber;
    };
};
