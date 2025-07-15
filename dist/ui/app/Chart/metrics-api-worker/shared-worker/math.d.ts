import type { UTCTimestamp } from '@santiment-network/chart-next';
import type { TMetricData } from '../../api/index.js';
declare const math: any;
export declare class Timeseries {
    values: number[];
    timestamps: UTCTimestamp[];
    constructor(...args: [TMetricData] | [number[], number[]]);
    toMetricData(): {
        time: UTCTimestamp;
        value: number;
    }[];
}
export { math };
