import type { UTCTimestamp } from '@santiment-network/chart-next';
import { Timeseries } from './core.js';
export declare const MathModifiers: {
    shift: (timeseries: Timeseries, period: number) => Timeseries;
    diff: (timeseries: Timeseries, period: number) => Timeseries;
    cumprod: (timeseries: Timeseries) => Timeseries;
    cumsum: (timeseries: Timeseries) => Timeseries;
    value_at: (timeseries: Timeseries, startTimestamp?: UTCTimestamp) => number;
};
