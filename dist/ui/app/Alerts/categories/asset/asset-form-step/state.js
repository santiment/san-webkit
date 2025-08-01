export function stateIsAsset(state) {
    if (typeof state !== 'object' || !state)
        return false;
    if (!('target' in state))
        return false;
    const { target } = state;
    if (typeof target !== 'object' || !target)
        return false;
    if (!('slugs' in target))
        return false;
    const { slugs } = target;
    if (!Array.isArray(slugs))
        return false;
    if (slugs.length && typeof slugs[0] === 'string') {
        return true;
    }
    return false;
}
