import type { TNominal } from '../../../../utils/index.js';
import type { TAggregation, TInterval, TMetricData, TMetricTargetSelectorInputObject } from '../api/index.js';
import type { TGlobalParameters } from '../ctx/global-parameters.svelte.js';
import type { TLocalParameters } from '../ctx/metric-data.svelte.js';
export type TMessageId = TNominal<number, 'TMessageId'>;
export declare const MESSAGE_TYPE: {
    readonly CancelRequest: 0;
    readonly FetchMetric: 1;
    readonly FetchFormulaMetric: 2;
    readonly ValidateFormula: 3;
};
export type TMessageType = {
    [K in keyof typeof MESSAGE_TYPE]: (typeof MESSAGE_TYPE)[K];
};
export type TMessageTypeValues = (typeof MESSAGE_TYPE)[keyof typeof MESSAGE_TYPE];
export declare const RESPONSE_STATE: {
    readonly Done: 0;
    readonly Progress: 1;
};
export type TMessage<GType extends TMessageTypeValues, GPayload = unknown> = {
    id: TMessageId;
    type: GType;
} & (unknown extends GPayload ? {
    payload?: unknown;
} : {
    payload: GPayload;
});
export type TMessageRequestResponse<GType extends TMessageTypeValues, GRequest = unknown, GResponse = unknown> = {
    request: TMessage<GType, GRequest>;
    response: TMessage<GType, GResponse> & {
        state?: (typeof RESPONSE_STATE)[keyof typeof RESPONSE_STATE];
    };
};
export type TCancelRequestMessage = TMessageRequestResponse<TMessageType['CancelRequest']>;
export type TMetricParameters = TLocalParameters & {
    selector: TGlobalParameters['selector'];
    interval: TInterval;
    from: string;
    to: string;
    aggregation?: TAggregation;
};
export type TFetchMetricMessage = TMessageRequestResponse<TMessageType['FetchMetric'], {
    minimalDelay?: number;
    priority?: number;
    parameters: TMetricParameters;
}, {
    timeseries: TMetricData;
} | {
    error: any;
}>;
export type TMetricFormula = {
    expr: string;
};
export type TFetchFormulaMetricMessage = TMessageRequestResponse<TMessageType['FetchFormulaMetric'], {
    minimalDelay?: number;
    priority?: number;
    parameters: TMetricParameters;
    index: number;
    formula: TMetricFormula;
    metrics: {
        name: string;
        selector: null | TMetricTargetSelectorInputObject;
        aggregation?: TAggregation;
        formula?: TMetricFormula;
    }[];
}, {
    timeseries: TMetricData;
} | {
    error: any;
}>;
export type TValidateFormulaMessage = TMessageRequestResponse<TMessageType['ValidateFormula'], {
    formula: string;
    index: number;
    metrics: TFetchFormulaMetricMessage['request']['payload']['metrics'];
}, {
    errors: string[];
}>;
export type TMessages = TCancelRequestMessage | TFetchMetricMessage | TFetchFormulaMetricMessage | TValidateFormulaMessage;
export type TMessageResponsesByType = {
    [V in TMessages['response'] as V['type']]: V;
};
export type TRespondFn = <GType extends TMessageTypeValues>(type: GType, data: Omit<TMessageResponsesByType[GType], 'id' | 'type'>) => void;
export type TRequestHandler<GMessage extends TMessages> = (respond: (type: GMessage['request']['type'], data: Omit<GMessage['response'], 'id' | 'type'>) => void, msg: GMessage['request']) => unknown extends GMessage['response']['payload'] ? void : () => void;
