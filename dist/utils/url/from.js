export const getUrlPath = (url) => url.pathname + url.search + url.hash;
export const getFromSearch = (from) => `?from=${encodeURIComponent(from)}`;
