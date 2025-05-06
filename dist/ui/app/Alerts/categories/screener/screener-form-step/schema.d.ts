import type { TScreenerApiAlert } from '../schema.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
export type TBaseSchema = TStepBaseSchema<'screener', {
    initState: (apiAlert?: null | TScreenerApiAlert) => Pick<NonNullable<TScreenerApiAlert['settings']>, 'target' | 'metric'>;
}>;
export declare const STEP_SELECT_SCREENER_SCHEMA: {
    readonly name: "screener";
    readonly initState: (apiAlert?: null | TScreenerApiAlert) => Pick<NonNullable<TScreenerApiAlert["settings"]>, "target" | "metric">;
    readonly validate: (state: Pick<{
        channel: import("../../../channels.js").TApiChannel[];
    } & {
        type: "screener_signal";
        metric: "social_volume_total";
        target: {
            watchlist_id: number | null;
        };
    }, "target" | "metric">) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<any>;
        Legend?: import("svelte").Component<any>;
    };
    readonly reduceToApi: (apiAlert: {
        settings: object;
    }, state: Pick<{
        channel: import("../../../channels.js").TApiChannel[];
    } & {
        type: "screener_signal";
        metric: "social_volume_total";
        target: {
            watchlist_id: number | null;
        };
    }, "target" | "metric">) => {
        settings: object;
    };
};
