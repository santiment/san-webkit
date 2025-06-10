import type { TSocialTrendsApiAlert } from '../schema.js';
import type { TAssetSlug } from '../../../../../../ctx/assets/api.js';
import type { Watchlist } from '../../watchlist/api.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
type TAssetTarget = {
    slugs: TAssetSlug[];
    namesMap: Map<TAssetSlug, string>;
    type: 'asset';
};
type TWordTarget = {
    words: string[];
    type: 'word';
};
type TWatchlistTarget = {
    id: Watchlist['id'] | null;
    title: string;
    type: 'watchlist';
};
export type TTrendState = {
    target: TAssetTarget | TWordTarget | TWatchlistTarget;
};
export type TBaseSchema = TStepBaseSchema<'select-trend', {
    initState: (apiAlert?: null | TSocialTrendsApiAlert) => TTrendState;
}>;
export declare const STEP_SELECT_TREND_SCHEMA: {
    readonly name: "select-trend";
    readonly initState: (apiAlert?: null | TSocialTrendsApiAlert) => TTrendState;
    readonly validate: (state: TTrendState) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<any>;
        Legend?: import("svelte").Component<any>;
    };
    readonly reduceToApi: (apiAlert: {
        settings: object;
    }, state: TTrendState) => {
        settings: object;
    };
};
export {};
