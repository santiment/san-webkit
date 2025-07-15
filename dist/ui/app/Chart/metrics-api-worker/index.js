import { createWorkerRequester } from './host.js';
import { MESSAGE_TYPE } from './types.js';
export const workerFetchMetric = createWorkerRequester(MESSAGE_TYPE.FetchMetric);
export const workerFetchFormulaMetric = createWorkerRequester(MESSAGE_TYPE.FetchFormulaMetric);
export { workerCancelRequest } from './host.js';
