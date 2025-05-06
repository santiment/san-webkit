export function getChannelFromApi(channels) {
    if (!channels)
        return null;
    return channels.reduce((prev, channel) => typeof channel === 'string' ? { ...prev, [channel]: true } : { ...prev, ...channel }, {});
}
export function reduceChannelToApi(channels) {
    return Object.entries(channels).reduce((prev, [key, value]) => {
        if (!value)
            return prev;
        if (value === true) {
            const channel = key;
            return [...prev, channel];
        }
        return [...prev, { [key]: value }];
    }, []);
}
export function formatChannels(channels) {
    const keys = Object.keys(channels);
    return keys.filter((channel) => channels[channel]).join(', ');
}
