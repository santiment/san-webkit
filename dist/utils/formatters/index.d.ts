export { millify } from './millify.js';
export declare function DEFAULT_FORMATTER(value: number): string | number;
export declare function createDecimalFormatter(unit: string): (value: number) => string;
export declare const usdFormatter: (value: number) => string;
export declare function percentFormatter(value: number): string;
export declare function calculatePercentageChange(firstValue: number, lastValue: number): string;
