import type { TScreenerApiAlert } from '../schema.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
export type TScreenerState = {
    metric: NonNullable<TScreenerApiAlert['settings']>['metric'];
    screener: {
        id: string | null;
        title: string;
    };
};
export type TBaseSchema = TStepBaseSchema<'screener', TScreenerApiAlert, TScreenerState>;
export declare const STEP_SELECT_SCREENER_SCHEMA: {
    readonly name: "screener";
    readonly initState: (apiAlert?: Partial<TScreenerApiAlert> | null | undefined) => TScreenerState;
    readonly validate: (state: TScreenerState) => boolean;
    readonly ui: import("../../../form-steps/types.js").TStepUI["ui"];
    readonly reduceToApi: (state: TScreenerState) => TScreenerApiAlert;
};
export declare function getApiWatchlistId(settings: TScreenerApiAlert['settings'] | undefined): string | null;
