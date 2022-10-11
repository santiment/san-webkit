export const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
const UsdFormatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
});
export const formatUsd = (amount) => UsdFormatter.format(amount / 100);
const SI_PREFIXES = {
    3: 'K',
    6: 'M',
    9: 'B',
    12: 'T',
};
export function millify(value, precision = 1, smallPrecision = 6) {
    const absValue = Math.abs(value);
    const str = Math.floor(absValue).toString();
    const { length } = str;
    const prefix = value !== absValue ? '-' : '';
    let exponent = 0;
    for (let i = 3; i < length; i += 3) {
        exponent += 3;
    }
    if (!exponent) {
        return (+value.toFixed(absValue < 2 ? smallPrecision : precision)).toString();
    }
    if (exponent > 12)
        exponent = 12;
    const mantissa = str.slice(0, -exponent);
    const exponentIndex = length - exponent;
    const precised = precision ? '.' + str.slice(exponentIndex, exponentIndex + precision) : '';
    return prefix + +(mantissa + precised) + SI_PREFIXES[exponent];
}
//# sourceMappingURL=formatting.js.map