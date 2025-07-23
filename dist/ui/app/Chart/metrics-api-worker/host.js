import { MESSAGE_TYPE, } from './types.js';
export const metricsApiSharedWorker = new SharedWorker(new URL('./shared-worker/index.js', import.meta.url), { type: 'module' });
// metricsApiSharedWorker.port.start() // IS REQUIRED WHEN USING addEventListener
const ResponseHandler = new Map();
metricsApiSharedWorker.port.onmessage = (e) => {
    const msg = e.data;
    // NOTE: Message type is CancelRequest
    if (!msg.type) {
        return ResponseHandler.delete(msg.id);
    }
    const handler = ResponseHandler.get(msg.id);
    handler?.ondata(msg);
    // NOTE: Message state is completed
    if (!msg.state) {
        ResponseHandler.delete(msg.id);
    }
};
let _msgId = 0;
export const generateMsgId = () => _msgId++;
export const postMessage = (type, data) => metricsApiSharedWorker.port.postMessage({ type, ...data });
export const workerCancelRequest = (id) => {
    if (ResponseHandler.delete(id)) {
        postMessage(MESSAGE_TYPE.CancelRequest, { id });
    }
};
export function createWorkerRequester(type) {
    return (payload, ondata) => {
        const msgId = generateMsgId();
        postMessage(type, { id: msgId, payload });
        ResponseHandler.set(msgId, { ondata });
        return {
            id: msgId,
            cancel: () => workerCancelRequest(msgId),
        };
    };
}
