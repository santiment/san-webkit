export function getAssetSelectorLabel(getAssetBySlug, metric) {
    const asset = getAssetBySlug(metric.selector.$?.slug);
    return asset ? formatAssetTicker(asset) : undefined;
}
export function formatAssetTicker(asset) {
    return asset.ticker + (asset.chain ? `.${asset.chain.ticker.toLowerCase()}` : '');
}
