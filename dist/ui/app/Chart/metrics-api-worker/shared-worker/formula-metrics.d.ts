import type { TFetchFormulaMetricMessage } from '../types.js';
import { type TMetricData } from '../../api/index.js';
type TContext = {
    isCancelled: boolean;
    parameters: TFetchFormulaMetricMessage['request']['payload']['parameters'];
    metrics: TFetchFormulaMetricMessage['request']['payload']['metrics'];
    path: number[];
    addJob: (dataRequest: () => Promise<any>) => void;
    cancelJobs: () => void;
};
export declare function fetchFormulaMetric(formula: TFetchFormulaMetricMessage['request']['payload']['formula'], index: TFetchFormulaMetricMessage['request']['payload']['index'], ctx: TContext): Promise<TMetricData>;
export declare function validateFormula(expr: string, index: number, chartMetrics: TContext['metrics']): any;
export {};
