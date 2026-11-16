import type { Prettify } from '@melt-ui/svelte/internal/types';
type Keyified<T, GKeyProp extends string = 'key'> = {
    [K in keyof T]: T[K] & Record<GKeyProp, K>;
};
export declare function keyify<T, GKeyProp extends string = 'key'>(object: T, keyName?: GKeyProp): Prettify<Keyified<T, GKeyProp>>;
export declare function exactObjectKeys<T extends object>(obj: T): (keyof typeof obj)[];
export declare function mergeDeep<T1, T2, T3, T4>(obj1: T1, obj2: T2, obj3: T3, obj4: T4): T1 & T2 & T3 & T4;
export declare function mergeDeep<T1, T2, T3>(obj1: T1, obj2: T2, obj3: T3): T1 & T2 & T3;
export declare function mergeDeep<T1, T2>(obj1: T1, obj2: T2): T1 & T2;
export {};
