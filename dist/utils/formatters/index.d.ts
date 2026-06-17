export { millify } from './millify.js';
export declare const capitalize: (str: string) => string;
export declare function DEFAULT_FORMATTER(value: number | undefined | null): string | number;
export declare function DEFAULT_Y_FORMATTER(value: number): string | number;
export declare function createDecimalFormatter(unit: string): (value: number | undefined | null) => string;
export declare const usdFormatter: (value: number | undefined | null) => string;
export declare function percentFormatter(value: number | undefined | null): string;
export declare function calculatePercentageChange(firstValue: number, lastValue: number): string;
