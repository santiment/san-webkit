import type { UTCTimestamp } from '@santiment-network/chart-next';
import type { TMetricData, TMetricTargetSelectorInputObject } from '../../Chart/api/index.js';
export declare const math: any;
export declare class Timeseries {
    values: number[] & Partial<{
        open: number[];
        high: number[];
        low: number[];
        close: number[];
    }>;
    timestamps: UTCTimestamp[];
    selector: null | TMetricTargetSelectorInputObject;
    constructor(...args: [TMetricData, null | TMetricTargetSelectorInputObject] | [number[], number[]]);
    toMetricData(): {
        time: UTCTimestamp;
        value: number;
    }[];
}
