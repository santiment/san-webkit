import type { TSocialTrendsApiAlert } from '../schema.js';
import type { TAssetSlug } from '../../../../../../ctx/assets/api.js';
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
    id: string | null;
    title: string;
    type: 'watchlist';
};
export type TTrendState = {
    target: TAssetTarget | TWordTarget | TWatchlistTarget;
};
export type TBaseSchema = TStepBaseSchema<'select-trend', TSocialTrendsApiAlert, TTrendState>;
export declare const STEP_SELECT_TREND_SCHEMA: {
    readonly name: "select-trend";
    readonly initState: (apiAlert?: Partial<TSocialTrendsApiAlert> | null | undefined) => TTrendState;
    readonly validate: (state: TTrendState) => boolean;
    readonly ui: import("../../../form-steps/types.js").TStepUI["ui"];
    readonly reduceToApi: (state: TTrendState) => TSocialTrendsApiAlert;
};
export {};
