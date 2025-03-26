export declare const ONE_SECOND_IN_MS = 1000;
export declare const ONE_MINUTE_IN_MS: number;
export declare const ONE_HOUR_IN_MS: number;
export declare const ONE_DAY_IN_MS: number;
export declare const ONE_WEEK_IN_MS: number;
export declare const ONE_MONTH_IN_MS = 2505600000;
export declare const ONE_YEAR_IN_MS = 31536000000;
/**
 *
 * @param target - target date in ISO format
 * @param start - timestamp of the start date
 * @returns positive number of days if target date is in the future, negative number if target date is in the past
 */
export declare const calculateDaysTo: (target: Date | string, start?: number) => number;
export declare function setDayEnd(date: Date, { utc }?: {
    utc?: boolean | undefined;
}): Date;
export declare function setDayStart(date: Date, { utc }?: {
    utc?: boolean | undefined;
}): Date;
export declare const getTodaysEnd: (options?: {
    utc: boolean;
}) => Date;
export declare const MONTH_NAMES: readonly ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export declare const SHORT_MONTH_NAMES: readonly ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export declare const WEEKDAYS: readonly ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export declare const SHORT_WEEKDAYS: readonly ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
type TFormattedDate = {
    D: number;
    DD: string | number;
    M: number;
    MM: string | number;
    MMM: (typeof SHORT_MONTH_NAMES)[number];
    MMMM: (typeof MONTH_NAMES)[number];
    YY: string;
    YYYY: number;
    ddd: (typeof SHORT_WEEKDAYS)[number];
    dddd: (typeof WEEKDAYS)[number];
};
export declare function getDateFormats(date: Date, { utc }?: {
    utc?: boolean | undefined;
}): TFormattedDate;
export declare function getFormattedMonthDayYear(date: Date, options?: {}): string;
export declare function getFormattedDetailedTimestamp(time: number): string;
export declare function modifyDate(date: Date, modifier: {
    days: number;
}): Date;
export declare function getTimeSince(targetDate: Date): string;
type TFormattedTime = {
    H: number;
    HH: number | string;
    m: number;
    mm: number | string;
};
export declare function getTimeFormats(date: Date, { utc }?: {
    utc?: boolean | undefined;
}): TFormattedTime;
export declare const CRYPTO_ERA_START_DATE: Date;
export declare const TODAY_END_DATE: Date;
export declare function parseRangeString(range: `${number}m` | `${number}h` | `${number}d` | `${number}y` | string): {
    amount: number;
    modifier: "m" | "h" | "d" | "y";
};
export declare function parseDate(date: string): Date;
export declare const parseAsStartEndDate: (date: string, options: {
    dayStart: boolean;
    utc?: boolean;
}) => Date;
export declare function suggestPeriodInterval(from: Date, to: Date): "5m" | "15m" | "30m" | "1h" | "2h" | "3h" | "4h" | "8h" | "12h" | "1d" | "2d" | "7d";
export {};
