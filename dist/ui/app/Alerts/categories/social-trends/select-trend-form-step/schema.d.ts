import type { TSocialTrendsApiAlert } from '../schema.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
export type TBaseSchema = TStepBaseSchema<'select-trend', {
    initState: (apiAlert?: null | TSocialTrendsApiAlert) => Pick<NonNullable<TSocialTrendsApiAlert['settings']>, 'target' | 'operation'>;
}>;
export declare const STEP_SELECT_TREND_SCHEMA: {
    readonly name: "select-trend";
    readonly initState: (apiAlert?: null | TSocialTrendsApiAlert) => Pick<NonNullable<TSocialTrendsApiAlert["settings"]>, "target" | "operation">;
    readonly validate: (state: Pick<NonNullable<({
        channel: import("../../../channels.js").TApiChannel[];
    } & ({
        type: "trending_words";
    } & ({
        target: {
            slug: import("../../../../../../ctx/assets/api.js").TAssetSlug[];
        };
        operation: {
            trending_project: true;
        };
    } | {
        target: {
            word: string[];
        };
        operation: {
            trending_word: true;
        };
    } | {
        target: {
            watchlist_id: number;
        };
        operation: {
            trending_project: true;
        };
    }))) | null>, "target" | "operation">) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<any>;
        Legend?: import("svelte").Component<any>;
    };
    readonly reduceToApi: (apiAlert: {
        settings: object;
    }, state: Pick<NonNullable<({
        channel: import("../../../channels.js").TApiChannel[];
    } & ({
        type: "trending_words";
    } & ({
        target: {
            slug: import("../../../../../../ctx/assets/api.js").TAssetSlug[];
        };
        operation: {
            trending_project: true;
        };
    } | {
        target: {
            word: string[];
        };
        operation: {
            trending_word: true;
        };
    } | {
        target: {
            watchlist_id: number;
        };
        operation: {
            trending_project: true;
        };
    }))) | null>, "target" | "operation">) => {
        settings: object;
    };
};
