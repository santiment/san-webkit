export declare enum DeviceType {
    Desktop = "desktop",
    Tablet = "tablet",
    Phone = "phone",
    PhoneXs = "phone-xs"
}
export type DeviceInfo = ReturnType<typeof getDeviceInfo>;
export declare function getDeviceInfo(type: DeviceType): {
    type: DeviceType;
    isMobile: boolean;
    isPhone: boolean;
    isDesktop: boolean;
};
export declare function normalizeDeviceType(type: string | undefined): DeviceType;
export declare const useDeviceCtx: ((deviceType?: DeviceType) => {
    device: import("svelte-runes").SS<{
        type: DeviceType;
        isMobile: boolean;
        isPhone: boolean;
        isDesktop: boolean;
    }>;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        device: import("svelte-runes").SS<{
            type: DeviceType;
            isMobile: boolean;
            isPhone: boolean;
            isDesktop: boolean;
        }>;
    };
    set: (deviceType?: DeviceType) => {
        device: import("svelte-runes").SS<{
            type: DeviceType;
            isMobile: boolean;
            isPhone: boolean;
            isDesktop: boolean;
        }>;
    };
    __CTX: "useDeviceCtx";
};
