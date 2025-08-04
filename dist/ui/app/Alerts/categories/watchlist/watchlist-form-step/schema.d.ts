import type { TWatchlistApiAlert } from '../schema.js';
import type { TWatchlistState } from './state.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
export type TBaseSchema = TStepBaseSchema<'watchlist', TWatchlistApiAlert, TWatchlistState>;
export declare const STEP_SELECT_WATCHLIST_SCHEMA: {
    readonly name: "watchlist";
    readonly initState: (apiAlert?: Partial<TWatchlistApiAlert> | null | undefined) => TWatchlistState;
    readonly validate: (state: TWatchlistState) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<{
            state: import("../../../form-steps/index.svelte.js").TBaseState<TBaseSchema>;
        }, {}, string>;
        Legend?: import("svelte").Component<{
            state: import("../../../form-steps/index.svelte.js").TBaseState<TBaseSchema>;
        }, {}, string> | undefined;
    };
    readonly reduceToApi: (state: TWatchlistState) => import("../../../../../../utils/types/index.js").DeepPartial<TWatchlistApiAlert>;
};
