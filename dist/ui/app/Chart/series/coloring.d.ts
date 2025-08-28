import type { TSeries } from '../ctx/series.svelte.js';
export declare function applyHistogramBaselineColorData(series: TSeries): boolean;
export declare function getAreaSeriesColors(series: TSeries): {
    lineColor: string;
    topColor: string;
    bottomColor: string;
    baseValue?: undefined;
    topLineColor?: undefined;
    bottomLineColor?: undefined;
    topFillColor1?: undefined;
    topFillColor2?: undefined;
    bottomFillColor2?: undefined;
    bottomFillColor1?: undefined;
} | {
    baseValue: {
        type: string;
        price: 0;
    };
    topLineColor: string;
    bottomLineColor: string;
    topFillColor1: string;
    topFillColor2: string;
    bottomFillColor2: string;
    bottomFillColor1: string;
    lineColor?: undefined;
    topColor?: undefined;
    bottomColor?: undefined;
};
export declare function getCandlesSeriesColors(series: TSeries): {
    downColor: string;
    wickDownColor: string;
    upColor: string;
    wickUpColor: string;
};
