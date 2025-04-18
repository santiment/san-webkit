import type { TWatchlistApiAlert } from '../schema.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
export type TBaseSchema = TStepBaseSchema<'watchlist', {
    initState: (apiAlert?: null | TWatchlistApiAlert) => {
        target: {
            watchlist_id: number | null;
        };
    };
}>;
export declare const STEP_SELECT_WATCHLIST_SCHEMA: {
    readonly name: "watchlist";
    readonly initState: (apiAlert?: null | TWatchlistApiAlert) => {
        target: {
            watchlist_id: number | null;
        };
    };
    readonly validate: (state: {
        target: {
            watchlist_id: number | null;
        };
    }) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<any>;
        Legend?: import("svelte").Component<any>;
    };
    readonly reduceToApi: (apiAlert: {
        settings: object;
    }, state: {
        target: {
            watchlist_id: number | null;
        };
    }) => {
        settings: object;
    };
};
