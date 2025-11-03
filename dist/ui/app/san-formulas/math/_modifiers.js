import { math, Timeseries } from './core.js';
const shift = math.typed('shift', {
    'Timeseries, number': (timeseries, period) => {
        const { values, timestamps } = timeseries;
        if (!values.length || !Number.isFinite(period)) {
            return timeseries;
        }
        const absDiff = timestamps[Math.abs(period)] - timestamps[0];
        const diff = period < 0 ? -absDiff : absDiff;
        return new Timeseries(values, timestamps.map((timestamp) => timestamp + diff));
    },
});
const diff = math.typed('diff', {
    'Timeseries, number': (timeseries, period) => {
        const { values, timestamps } = timeseries;
        if (!values.length || !Number.isFinite(period)) {
            return timeseries;
        }
        const diffedValues = values.map((value, i) => {
            const target = values[i - period];
            return Number.isFinite(target) ? value - target : undefined;
        });
        const slicePeriod = (data) => period < 0 ? data.slice(0, period) : data.slice(period);
        return new Timeseries(slicePeriod(diffedValues), slicePeriod(timestamps));
    },
});
const cumprod = math.typed('cumprod', {
    Timeseries: (timeseries) => {
        const { values, timestamps } = timeseries;
        let product = 1;
        return new Timeseries(values.map((value) => (product *= value)), timestamps);
    },
});
const cumsum = math.typed('cumsum', {
    Timeseries: (timeseries) => {
        const { values, timestamps } = timeseries;
        let sum = 0;
        return new Timeseries(values.map((value) => (sum += value)), timestamps);
    },
});
const value_at = math.typed('value_at', {
    'Timeseries, number': (timeseries, startTimestamp = 0) => {
        const { values, timestamps } = timeseries;
        return values.find((_, i) => {
            if (timestamps[i] >= startTimestamp) {
                return true;
            }
        });
    },
});
export const MathModifiers = {
    shift,
    diff,
    cumprod,
    cumsum,
    value_at,
};
