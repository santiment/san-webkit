import type { TSeries } from '../ctx/series.svelte.js';
export declare function applyHistogramBaselineColorData(series: TSeries): boolean;
export declare function getAreaSeriesColors(series: TSeries): {
    baseValue: {
        type: string;
        price: number;
    };
    topLineColor: string;
    bottomLineColor: string;
    topFillColor1: string;
    topFillColor2: string;
    bottomFillColor2: string;
    bottomFillColor1: string;
};
export declare function getCandlesSeriesColors(series: TSeries): {
    downColor: string;
    wickDownColor: string;
    upColor: string;
    wickUpColor: string;
};
