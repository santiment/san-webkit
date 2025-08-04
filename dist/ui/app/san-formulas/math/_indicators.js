import { sma as calculateSMA, ema as calculateEMA, rsi as calculateRSI } from 'indicatorts';
import { math, Timeseries } from './core.js';
const sma = math.typed('sma', {
    'Timeseries, number': (timeseries, period) => {
        return new Timeseries(calculateSMA(timeseries.values, { period }), timeseries.timestamps);
    },
});
const ema = math.typed('ema', {
    'Timeseries, number': (timeseries, period) => {
        return new Timeseries(calculateEMA(timeseries.values, { period }), timeseries.timestamps);
    },
});
const rsi = math.typed('rsi', {
    'Timeseries, number': (timeseries, period) => {
        return new Timeseries(calculateRSI(timeseries.values, { period }), timeseries.timestamps);
    },
});
export const MathIndicators = {
    sma,
    ema,
    rsi,
};
