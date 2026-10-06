import type { TWatchlistApiAlert } from '../schema.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
type TWatchlistState = {
    watchlist: {
        id: string | null;
        title: string;
    };
};
export type TBaseSchema = TStepBaseSchema<'watchlist', TWatchlistApiAlert, TWatchlistState>;
export declare const STEP_SELECT_WATCHLIST_SCHEMA: {
    readonly name: "watchlist";
    readonly initState: (apiAlert?: Partial<TWatchlistApiAlert> | null | undefined) => TWatchlistState;
    readonly validate: (state: TWatchlistState) => boolean;
    readonly ui: import("../../../form-steps/types.js").TStepUI["ui"];
    readonly reduceToApi: (state: TWatchlistState) => TWatchlistApiAlert;
};
export {};
