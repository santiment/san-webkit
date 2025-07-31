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
export function parseApiTarget(target) {
    if ('slug' in target) {
        return { type: 'asset', slugs: target.slug, namesMap: new Map() };
    }
    if ('word' in target) {
        return { type: 'word', words: target.word };
    }
    return { type: 'watchlist', id: target.watchlist_id?.toString() ?? null, title: '' };
}
export function getApiTarget(target) {
    switch (target.type) {
        case 'asset':
            return { target: { slug: target.slugs }, operation: { trending_project: true } };
        case 'word':
            return { target: { word: target.words }, operation: { trending_word: true } };
        case 'watchlist':
            return { target: { watchlist_id: target.id }, operation: { trending_project: true } };
    }
}
