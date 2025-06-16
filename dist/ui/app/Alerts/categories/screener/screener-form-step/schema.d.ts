import type { TScreenerApiAlert } from '../schema.js';
import type { Watchlist } from '../../watchlist/api.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
export type TScreenerState = {
    metric: NonNullable<TScreenerApiAlert['settings']>['metric'];
    screener: {
        id: Watchlist['id'] | null;
        title: string;
    };
};
export type TBaseSchema = TStepBaseSchema<'screener', {
    initState: (apiAlert?: null | TScreenerApiAlert) => TScreenerState;
}>;
export declare const STEP_SELECT_SCREENER_SCHEMA: {
    readonly name: "screener";
    readonly initState: (apiAlert?: null | TScreenerApiAlert) => TScreenerState;
    readonly validate: (state: TScreenerState) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<any>;
        Legend?: import("svelte").Component<any>;
    };
    readonly reduceToApi: (apiAlert: {
        settings: object;
    }, state: TScreenerState) => {
        settings: object;
    };
};
