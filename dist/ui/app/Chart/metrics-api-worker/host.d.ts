import { type TMessageId, type TMessageResponsesByType, type TMessages, type TMessageTypeValues } from './types.js';
type TMessageRequestByType = {
    [V in TMessages['request'] as V['type']]: V;
};
type TRequestFn = <GType extends TMessageTypeValues>(type: GType, data: Omit<TMessageRequestByType[GType], 'type'>) => void;
export declare const metricsApiSharedWorker: SharedWorker;
export declare const generateMsgId: () => TMessageId;
export declare const postMessage: TRequestFn;
export declare const workerCancelRequest: (id: TMessageId) => void;
export declare function createWorkerRequester<GType extends TMessageTypeValues>(type: GType): (payload: TMessageRequestByType[GType]["payload"], ondata: (msg: TMessageResponsesByType[GType]) => void) => {
    cancel: () => void;
};
export {};
