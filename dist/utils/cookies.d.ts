export declare function getCookie(name: string, predicate?: (keyValue: string) => boolean): string | undefined;
export declare function setCookie<GValue extends number | boolean | string>(key: string, value: GValue): GValue;
export declare function deleteCookie(key: string): void;
