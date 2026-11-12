export declare const useTimeZoneCtx: (() => {
    timeZone: {
        readonly $: import("../../utils/dates/timezone.js").TTimeZone | undefined;
        readonly utcLabel$: string;
    };
    applyTimeZoneOffset: (date: Date, utcMinutesOffset?: number) => Date;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        timeZone: {
            readonly $: import("../../utils/dates/timezone.js").TTimeZone | undefined;
            readonly utcLabel$: string;
        };
        applyTimeZoneOffset: (date: Date, utcMinutesOffset?: number) => Date;
    };
    __CTX: "webkit_useTimeZoneCtx";
};
