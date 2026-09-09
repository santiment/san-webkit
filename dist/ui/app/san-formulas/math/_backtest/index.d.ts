import { Timeseries } from '../core.js';
declare function applyTimeseriesBacktest(priceTimeseries: Timeseries, signalTimeseries: Timeseries, { capital: initialCapital, fee: transactionCost, stop_loss: stopLossPercentage, take_profit: takeProfitPercentage, }?: Partial<{
    capital: number;
    fee: number;
    stop_loss: number;
    take_profit: number;
}>): Timeseries;
export declare const MathStrategies: {
    backtest: typeof applyTimeseriesBacktest;
};
export {};
