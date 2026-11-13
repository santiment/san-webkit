import type { TSeries } from '../../ui/app/Chart/ctx/series.svelte.js';
type Header<T> = {
    title: string;
    format: (item: T) => string | number;
};
export declare function downloadCsv<T>(title: string, headers: Header<T>[], data: T[]): void;
export declare function createMetricSeriesCsvHeaders(series: TSeries[]): {
    title: string;
    format: (row: any) => string;
}[];
export declare function mergeMetricSeriesData(series: TSeries[]): Record<string, any>[];
export {};
