export function stateIsWatchlist(state) {
    if (typeof state !== 'object' || !state)
        return false;
    if (!('watchlist' in state))
        return false;
    const { watchlist } = state;
    if (typeof watchlist !== 'object' || !watchlist)
        return false;
    if (!('id' in watchlist))
        return false;
    const { id } = watchlist;
    if (id === null)
        return true;
    if (typeof id === 'string')
        return true;
    return false;
}
