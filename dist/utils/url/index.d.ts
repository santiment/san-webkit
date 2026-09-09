export declare const sluggify: (title: string) => string;
export declare const getSEOLinkFromIdAndTitle: (id: number | string, title?: string) => string;
export declare const getIdFromSEOLink: (link: string) => number;
export { getFromSearch, getUrlPath } from './from.js';
export { mutateCreateShortUrl } from './short.js';
