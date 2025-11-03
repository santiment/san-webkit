import type { RequestEvent } from '@sveltejs/kit';
import type { Prettify } from '@melt-ui/svelte/internal/types';
export type TBaseABSchema = {
    key: string;
    cookieKey: string;
    variants: string[];
};
export type TSettingsAB<GSchema extends TBaseABSchema> = Prettify<{
    [K in GSchema as K['key']]: K['variants'][number];
}>;
export declare function createABTestCtx<T extends TBaseABSchema = TBaseABSchema>(testSchemas?: T[]): {
    initABSettings: (event: RequestEvent) => { [K_1 in T as K_1["key"]]: K_1["variants"][number]; } extends infer T_1 ? { [K in keyof T_1]: { [K_1 in T as K_1["key"]]: K_1["variants"][number]; }[K]; } : never;
    useABTestCtx: ((settings: TSettingsAB<T>) => {
        abTests: {
            readonly $: { [K_1 in T as K_1["key"]]: K_1["variants"][number]; } extends infer T_1 ? { [K in keyof T_1]: { [K_1 in T as K_1["key"]]: K_1["variants"][number]; }[K]; } : never;
            setCookies(): void;
        };
    }) & {
        get: (allCtxs?: Map<string, any>) => {
            abTests: {
                readonly $: { [K_1 in T as K_1["key"]]: K_1["variants"][number]; } extends infer T_1 ? { [K in keyof T_1]: { [K_1 in T as K_1["key"]]: K_1["variants"][number]; }[K]; } : never;
                setCookies(): void;
            };
        };
        set: (settings: TSettingsAB<T>) => {
            abTests: {
                readonly $: { [K_1 in T as K_1["key"]]: K_1["variants"][number]; } extends infer T_1 ? { [K in keyof T_1]: { [K_1 in T as K_1["key"]]: K_1["variants"][number]; }[K]; } : never;
                setCookies(): void;
            };
        };
        __CTX: "webkit_useABTestCtx";
    };
};
