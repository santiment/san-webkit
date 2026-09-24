export function percentChange(oldValue, newValue) {
    const change = (100 * (newValue - oldValue)) / oldValue;
    return formatPercentChange(change);
}
export function formatPercentChange(value) {
    return +value.toFixed(Math.abs(value) < 1 ? 4 : 2);
}
