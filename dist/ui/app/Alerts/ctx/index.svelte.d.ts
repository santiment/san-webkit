import type { TAlertSchemaUnion } from '../categories/index.js';
import type { TApiAlert, TGenericSettings } from '../types.js';
import type { TStepSchema } from '../form-steps/types.js';
import { type TAlertStep } from '../form-steps/index.svelte.js';
export type TReducedAlert = Omit<TApiAlert<TGenericSettings>, 'id'>;
declare const mapSteps: <G extends readonly TStepSchema[]>(steps: G, fn: <T extends G[number]>(el: T) => TAlertStep<T>) => { [K in keyof G]: TAlertStep<G[K]>; };
export type TAnyStep = ReturnType<typeof mapSteps<TAlertSchemaUnion['steps']>>[number];
export declare const useAlertFormCtx: (({ schema, alert }: {
    schema: TAlertSchemaUnion;
    alert?: null | Partial<TApiAlert>;
}) => {
    schema: TAlertSchemaUnion & {
        suggestTitle: (_steps: readonly [TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
        }>, TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            };
            readonly validate: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
        }>, TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>]) => Promise<string> | string;
        suggestDescription: (_steps: readonly [TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
        }>, TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            };
            readonly validate: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
        }>, TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>]) => Promise<string> | string;
    };
    reduceStepsToAlert: () => TReducedAlert;
    steps: readonly [TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
        readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
    }>, TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
    }>, TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
    }>, TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
    }>] | readonly [TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
            watchlist: {
                id: string | null;
                title: string;
            };
        };
        readonly validate: (state: {
            watchlist: {
                id: string | null;
                title: string;
            };
        }) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: {
            watchlist: {
                id: string | null;
                title: string;
            };
        }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
    }>, TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
    }>, TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
    }>, TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
    }>] | readonly [TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
    }>, TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
    }>, TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
    }>] | readonly [TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
    }>, TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
    }>, TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
    }>] | readonly [TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
    }>, TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
    }>, TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: import("../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
    }>];
    selectedStep: {
        readonly $: TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
        }> | TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
        }> | TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }> | TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }> | TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            };
            readonly validate: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
        }> | TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
        }> | TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
        }> | TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
        }>;
        index$: number;
    };
    nextStep: {
        readonly $: TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
        }> | TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
        }> | TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }> | TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }> | TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            };
            readonly validate: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
        }> | TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
        }> | TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
        }> | TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
        }> | null;
    };
    isAlertValid: {
        readonly $: boolean;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        schema: TAlertSchemaUnion & {
            suggestTitle: (_steps: readonly [TAlertStep<{
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
            }>, TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                };
                readonly validate: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
            }>, TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>]) => Promise<string> | string;
            suggestDescription: (_steps: readonly [TAlertStep<{
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
            }>, TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                };
                readonly validate: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
            }>, TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>]) => Promise<string> | string;
        };
        reduceStepsToAlert: () => TReducedAlert;
        steps: readonly [TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
        }>, TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            };
            readonly validate: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
        }>, TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>];
        selectedStep: {
            readonly $: TAlertStep<{
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
            }> | TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }> | TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }> | TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }> | TAlertStep<{
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                };
                readonly validate: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
            }> | TAlertStep<{
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
            }> | TAlertStep<{
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
            }> | TAlertStep<{
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
            }>;
            index$: number;
        };
        nextStep: {
            readonly $: TAlertStep<{
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
            }> | TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }> | TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }> | TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }> | TAlertStep<{
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                };
                readonly validate: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
            }> | TAlertStep<{
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
            }> | TAlertStep<{
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
            }> | TAlertStep<{
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
            }> | null;
        };
        isAlertValid: {
            readonly $: boolean;
        };
    };
    set: ({ schema, alert }: {
        schema: TAlertSchemaUnion;
        alert?: null | Partial<TApiAlert>;
    }) => {
        schema: TAlertSchemaUnion & {
            suggestTitle: (_steps: readonly [TAlertStep<{
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
            }>, TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                };
                readonly validate: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
            }>, TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>]) => Promise<string> | string;
            suggestDescription: (_steps: readonly [TAlertStep<{
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
            }>, TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                };
                readonly validate: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
            }>, TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>] | readonly [TAlertStep<{
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
            }>, TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }>, TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }>]) => Promise<string> | string;
        };
        reduceStepsToAlert: () => TReducedAlert;
        steps: readonly [TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
        }>, TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            };
            readonly validate: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: {
                watchlist: {
                    id: string | null;
                    title: string;
                };
            }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
        }>, TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>] | readonly [TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
        }>, TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
        }>, TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: import("../form-steps/types.js").TStepUI["ui"];
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
        }>];
        selectedStep: {
            readonly $: TAlertStep<{
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
            }> | TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }> | TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }> | TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }> | TAlertStep<{
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                };
                readonly validate: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
            }> | TAlertStep<{
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
            }> | TAlertStep<{
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
            }> | TAlertStep<{
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
            }>;
            index$: number;
        };
        nextStep: {
            readonly $: TAlertStep<{
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/schema.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/schema.js").TAssetState) => import("../categories/asset/schema.js").TAssetApiAlert;
            }> | TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
            }> | TAlertStep<{
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
            }> | TAlertStep<{
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
            }> | TAlertStep<{
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                };
                readonly validate: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: {
                    watchlist: {
                        id: string | null;
                        title: string;
                    };
                }) => import("../categories/watchlist/schema.js").TWatchlistApiAlert;
            }> | TAlertStep<{
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../categories/screener/schema.js").TScreenerApiAlert;
            }> | TAlertStep<{
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../categories/wallet/schema.js").TWalletApiAlert;
            }> | TAlertStep<{
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: import("../form-steps/types.js").TStepUI["ui"];
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../categories/social-trends/schema.js").TSocialTrendsApiAlert;
            }> | null;
        };
        isAlertValid: {
            readonly $: boolean;
        };
    };
    __CTX: "alerts_useAlertFormCtx";
};
export {};
