import { millify } from './millify.js';
export { millify } from './millify.js';
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export function DEFAULT_FORMATTER(value) {
    if (value === undefined || value === null || !Number.isFinite(value)) {
        // Invalid data
        return 'N/A';
    }
    const absValue = Math.abs(value);
    if (absValue > 99999) {
        return millify(value, 2);
    }
    if (absValue < 0.00009) {
        return +value.toFixed(9);
    }
    if (absValue < 0.0009) {
        return +value.toFixed(7);
    }
    if (absValue < 1) {
        return +value.toFixed(6);
    }
    if (absValue < 10) {
        return +value.toFixed(4);
    }
    return +value.toFixed(2);
}
export function DEFAULT_Y_FORMATTER(value) {
    const absValue = Math.abs(value);
    if (absValue < 0.000001) {
        return +value.toFixed(10);
    }
    if (absValue < 0.001) {
        return +value.toFixed(6);
    }
    if (absValue < 10) {
        return +value.toFixed(4);
    }
    if (absValue > 999999) {
        return millify(value, 2);
    }
    if (absValue > 99999) {
        return millify(value, 2);
    }
    return millify(value, 2);
}
const decimalFormatter = new Intl.NumberFormat('en', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
const smallDecimalFormatter = new Intl.NumberFormat('en', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
});
function getDecimalFormatter(value) {
    if (value < 0.000001) {
        return new Intl.NumberFormat('en', {
            style: 'decimal',
            maximumFractionDigits: 10,
        });
    }
    if (value < 2)
        return smallDecimalFormatter;
    return decimalFormatter;
}
export function createDecimalFormatter(unit) {
    return (value) => {
        if (!Number.isFinite(+value)) {
            // Invalid data
            return 'N/A';
        }
        const absValue = Math.abs(value);
        const formatted = getDecimalFormatter(absValue).format(absValue);
        const sign = absValue !== value ? '-' : '';
        return sign + unit + formatted;
    };
}
export const usdFormatter = createDecimalFormatter('$');
export function percentFormatter(value) {
    if (value === undefined || value === null) {
        // 'Invalid data'
        return 'N/A';
    }
    const absValue = Math.abs(+value);
    if (absValue < 0.01) {
        return +value.toFixed(6) + '%';
    }
    return +value.toFixed(2) + '%';
}
export function calculatePercentageChange(firstValue, lastValue) {
    const percent = ((lastValue - firstValue) / firstValue) * 100;
    if (!Number.isFinite(percent)) {
        return '';
    }
    const sign = percent >= 0 ? '+' : '';
    return sign + percent.toFixed(2) + '%';
}
