import type { TApiAlert } from '../../types.js';
import type { TApiOperation } from '../../operations.js';
import { type TAPITimeWindow, type TTimeWindow } from '../../time.js';
import { type TOperation } from './operations.js';
import { type TStepBaseSchema } from '../types.js';
type TAlertSettings = {
    metric: string;
    time_window: TAPITimeWindow;
    operation: TApiOperation;
};
export type TConditionsState = {
    operation: TOperation;
    time: TTimeWindow;
};
export type TMetricConditionsState = {
    metric: string | null;
    metricLabel: string;
    conditions: TConditionsState;
};
export type TBaseSchema = TStepBaseSchema<'metric-conditions', {
    initState: (alert?: Partial<TApiAlert<TAlertSettings>> | null) => TMetricConditionsState;
}>;
export declare const STEP_METRIC_CONDITIONS_SCHEMA: {
    readonly name: "metric-conditions";
    readonly initState: (alert?: Partial<TApiAlert<TAlertSettings>> | null) => TMetricConditionsState;
    readonly validate: (state: TMetricConditionsState) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<{
            state: import("../index.svelte.js").TBaseState<TBaseSchema>;
        }, {}, string>;
        Legend?: import("svelte").Component<{
            state: import("../index.svelte.js").TBaseState<TBaseSchema>;
        }, {}, string> | undefined;
    };
    readonly reduceToApi: (apiAlert: {
        settings: object;
    }, state: TMetricConditionsState) => {
        settings: object;
    };
};
export {};
