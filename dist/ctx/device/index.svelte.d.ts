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
    device: {
        $: {
            type: DeviceType;
            isMobile: boolean;
            isPhone: boolean;
            isDesktop: boolean;
        };
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: (deviceType?: DeviceType) => {
        device: {
            $: {
                type: DeviceType;
                isMobile: boolean;
                isPhone: boolean;
                isDesktop: boolean;
            };
        };
    };
    __CTX: "useDeviceCtx";
};
