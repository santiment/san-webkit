export declare const sluggify: (title: string) => string;
export declare const getIdFromSEOLink: (link: string) => number;
export declare const getSEOLinkFromIdAndTitle: (id: string | number, title?: string | null) => string;
export declare function parse(queryString: string): {};
export declare const SearchParams: {
    parse(): Record<string, any>;
    stringify: (search: Record<string, any>) => string;
};
