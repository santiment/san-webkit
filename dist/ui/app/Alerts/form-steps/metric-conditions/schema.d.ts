import type { TApiOperation } from '../../operations.js';
import { type TApiTimeWindow, type TTimeWindow } from '../../time.js';
import { type TOperation } from './operations.js';
import { type TStepBaseSchema } from '../types.js';
export type TMetricConditionsApiAlert = {
    settings: {
        metric: string;
        time_window?: TApiTimeWindow;
        operation: TApiOperation;
    };
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
export type TBaseSchema = TStepBaseSchema<'metric-conditions', TMetricConditionsApiAlert, TMetricConditionsState>;
export declare const STEP_METRIC_CONDITIONS_SCHEMA: {
    readonly name: "metric-conditions";
    readonly initState: (apiAlert?: Partial<TMetricConditionsApiAlert> | null | undefined) => TMetricConditionsState;
    readonly validate: (state: TMetricConditionsState) => boolean;
    readonly ui: import("../types.js").TStepUI["ui"];
    readonly reduceToApi: (state: TMetricConditionsState) => TMetricConditionsApiAlert;
};
