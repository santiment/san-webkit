export declare const TimeZones: Record<string, TTimeZone | undefined>;
export type TTimeZone = {
    name: string;
    cities: string;
    utcMinutesOffset: number;
    utcLabel: string;
};
