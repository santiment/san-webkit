export function getChannelFromApi(channels) {
    if (!channels)
        return null;
    const transformChannel = (base, channel) => typeof channel === 'string' ? { ...base, [channel]: true } : { ...base, ...channel };
    if (Array.isArray(channels)) {
        return channels.reduce((prev, channel) => transformChannel(prev, channel), {});
    }
    return transformChannel({}, channels);
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
