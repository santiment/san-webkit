export const MetricType = {
    ASSET: 'asset_metric',
    TRADITIONAL_FINANCE: 'traditional_finance_metric',
    SOCIAL_QUERY: 'social_query_metric',
    WALLET: 'wallet_metric',
    FORMULAS: 'formulas_metric',
    COMBINED_DISTRIBUTION: 'combined_distribution',
    DATA_STORE: 'data_store_metric',
};
export const MetricStyle = {
    LINE: 'line',
    HISTOGRAM: 'histogram',
    AREA: 'area',
    CANDLES: 'candles',
    SIGNAL: 'signal',
};
export function suggestCombinedDistributionLabel(distribution) {
    const { base, ranges } = distribution;
    const isPercent = base === 'percent_of_holders_distribution_combined_balance';
    let [label, prevEnd] = ranges[0].split('_to_');
    label = `[${label}`;
    for (let i = 1; i < ranges.length; i++) {
        const [start, end] = ranges[i].split('_to_');
        if (prevEnd !== start) {
            label += ` - ${prevEnd}), [${start}`;
        }
        prevEnd = end;
    }
    label += ` - ${prevEnd})`;
    // label = label.replace(/0(\d*)1/g, '0.$11') + ` coins` + (isPercent ? ' %' : '')
    label = label + ` coins` + (isPercent ? ' %' : '');
    return ((base === 'holders_distribution'
        ? 'Addresses Distribution '
        : base === 'holders_labeled_distribution'
            ? 'Labeled Distribution '
            : 'Balance Distribution ') + label);
}
