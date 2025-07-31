export function getInitTrendTarget(type) {
    switch (type) {
        case 'asset':
            return { type, slugs: [], namesMap: new Map() };
        case 'word':
            return { type, words: [] };
        case 'watchlist':
            return { type, id: null, title: '' };
    }
}
export function parseApiTarget(apiTarget) {
    if ('slug' in apiTarget) {
        return { type: 'asset', slugs: apiTarget.slug, namesMap: new Map() };
    }
    if ('word' in apiTarget) {
        return { type: 'word', words: apiTarget.word };
    }
    return { type: 'watchlist', id: apiTarget.watchlist_id?.toString() ?? null, title: '' };
}
export function getApiTarget(target) {
    switch (target.type) {
        case 'asset':
            return { slug: target.slugs };
        case 'word':
            return { word: target.words };
        case 'watchlist':
            return { watchlist_id: target.id };
    }
}
