export const getUrlPath = (url: URL) => url.pathname + url.search + url.hash

export const getFromSearch = (from: string) => `?from=${encodeURIComponent(from)}`
