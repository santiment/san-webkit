type Keyified<T, GKeyProp extends string = 'key'> = {
    [K in keyof T]: T[K] & Record<GKeyProp, K>;
};
export declare function keyify<T, GKeyProp extends string = 'key'>(object: T, keyName?: GKeyProp): Keyified<T, GKeyProp>;
export declare function exactObjectKeys<T extends object>(obj: T): (keyof typeof obj)[];
export {};
