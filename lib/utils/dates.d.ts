export declare const ONE_SECOND_IN_MS = 1000;
export declare const ONE_MINUTE_IN_MS: number;
export declare const ONE_HOUR_IN_MS: number;
export declare const ONE_DAY_IN_MS: number;
export declare const ONE_WEEK_IN_MS: number;
export declare const ONE_MONTH_IN_MS = 2505600000;
export declare const ONE_YEAR_IN_MS = 31536000000;
declare const MONTH_NAMES: readonly ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
declare const SHORT_MONTH_NAMES: readonly ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
type FormattedDate = {
    D: number;
    DD: string | number;
    M: number;
    MM: string | number;
    MMM: (typeof SHORT_MONTH_NAMES)[number];
    MMMM: (typeof MONTH_NAMES)[number];
    YY: string;
    YYYY: number;
};
export declare function getDateFormats(date: Date, { utc }?: {
    utc?: boolean | undefined;
}): FormattedDate;
type FormattedTime = {
    H: number;
    HH: string | number;
    m: number;
    mm: string | number;
    s: number;
    ss: string | number;
};
export declare function getTimeFormats(date: Date, { utc }?: {
    utc?: boolean | undefined;
}): FormattedTime;
export declare function dateDifferenceInWords(from: Date, to?: Date): string;
export declare function parseIntervalString(interval: string): {
    amount: number;
    format: string;
};
export declare function getTodaysEnd(): Date;
export {};
