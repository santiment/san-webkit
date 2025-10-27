export declare enum DeviceType {
    Desktop = "desktop",
    Tablet = "tablet",
    Phone = "phone",
    PhoneXs = "phone-xs"
}
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
