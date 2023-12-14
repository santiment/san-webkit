export declare function saveValue(key: string, value: string): void;
export declare function saveJson<T>(key: string, value: T): T;
export declare function getSavedValue(key: string, defaultValue?: string): string | undefined;
export declare function getSavedJson<T>(key: string, defaultValue?: T): T | undefined;
export declare function saveBoolean(key: string, value: boolean): void;
export declare const getSavedBoolean: (key: string, defaultValue?: boolean) => boolean;
export declare function deleteSavedValue(key: string): void;
