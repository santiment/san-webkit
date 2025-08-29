export declare const useTimeZoneCtx: (() => {
    timeZone: {
        readonly $: import("../../utils/dates/timezone.js").TTimeZone | undefined;
        readonly utcLabel$: string;
    };
    applyTimeZoneOffset: (date: Date, utcMinutesOffset?: number) => Date;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        timeZone: {
            readonly $: import("../../utils/dates/timezone.js").TTimeZone | undefined;
            readonly utcLabel$: string;
        };
        applyTimeZoneOffset: (date: Date, utcMinutesOffset?: number) => Date;
    };
    set: () => {
        timeZone: {
            readonly $: import("../../utils/dates/timezone.js").TTimeZone | undefined;
            readonly utcLabel$: string;
        };
        applyTimeZoneOffset: (date: Date, utcMinutesOffset?: number) => Date;
    };
};
