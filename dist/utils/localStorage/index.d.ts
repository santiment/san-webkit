export declare function parseJson<T>(data: string): T | undefined;
export declare function saveValue(key: string, value: string): string;
export declare function getSavedValue(key: string): string | null;
export declare function saveJson<T>(key: string, value: T): T;
export declare function getSavedJson<T>(key: string): T | undefined;
export declare function saveBoolean(key: string, value: boolean): boolean;
export declare function getSavedBoolean(key: string): boolean | undefined;
export declare function deleteSavedValue(key: string): void;
