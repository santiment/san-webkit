export const getValue = (item, key) => {
    if (typeof item === 'object' && item !== null && key) {
        return item[key];
    }
    return item;
};
export function getValueAt(data, offset, width) {
    const valueIndex = Math.round((offset / width) * (data.length - 1));
    return getValue(data[valueIndex]);
}
export function getOffset({ localOffset, sharedOffset, tooltipSyncKey, storeSyncKey, }) {
    const hasSharedOffset = !!sharedOffset && !!tooltipSyncKey && storeSyncKey === tooltipSyncKey;
    return hasSharedOffset ? sharedOffset : localOffset;
}
