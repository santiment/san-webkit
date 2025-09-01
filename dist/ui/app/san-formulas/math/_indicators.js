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
const z_score = math.typed('z_score', {
    Timeseries: (timeseries) => {
        return new Timeseries(calculateZScore(timeseries.values), timeseries.timestamps);
    },
    'Timeseries, number': (timeseries, period) => {
        return new Timeseries(calculateZScore(timeseries.values, period), timeseries.timestamps);
    },
});
export const MathIndicators = {
    sma,
    ema,
    rsi,
    z_score,
};
function calculateZScore(values, period) {
    const zScores = values.slice();
    const allData = period ? null : calculateMeanAndStdDev(values);
    for (let i = 0; i < values.length; i++) {
        const { mean, stdDev } = allData || calculateMeanAndStdDev(getWindowValues(values, period, i));
        // Avoid division by zero (if all prices are the same)
        zScores[i] = stdDev === 0 ? 0 : (values[i] - mean) / stdDev;
    }
    return zScores;
}
function getWindowValues(values, period, index) {
    // Determine the start index for the lookback window
    const startIndex = period ? Math.max(0, index - period + 1) : 0;
    return values.slice(startIndex, index + 1);
}
function calculateMeanAndStdDev(values) {
    // Calculate mean and standard deviation for the window
    const mean = values.reduce((sum, p) => sum + p, 0) / values.length;
    const squaredDiffs = values.map((p) => Math.pow(p - mean, 2));
    const variance = squaredDiffs.reduce((sum, sd) => sum + sd, 0) / values.length;
    const stdDev = Math.sqrt(variance);
    return { mean, stdDev };
}
