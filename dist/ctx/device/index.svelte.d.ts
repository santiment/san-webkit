export declare enum DeviceType {
    Desktop = "desktop",
    Tablet = "tablet",
    Phone = "phone",
    PhoneXs = "phone-xs"
}
export declare const useDeviceCtx: {
    (deviceType?: DeviceType | undefined): {
        device: import("svelte-runes").SS<{
            type: DeviceType;
            isMobile: boolean;
            isPhone: boolean;
            isDesktop: boolean;
        }>;
    };
    get(): {
        device: import("svelte-runes").SS<{
            type: DeviceType;
            isMobile: boolean;
            isPhone: boolean;
            isDesktop: boolean;
        }>;
    };
    set(deviceType?: DeviceType | undefined): {
        device: import("svelte-runes").SS<{
            type: DeviceType;
            isMobile: boolean;
            isPhone: boolean;
            isDesktop: boolean;
        }>;
    };
};
