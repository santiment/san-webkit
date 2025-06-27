import { createWorkerRequester } from './host.js'
import { MESSAGE_TYPE } from './types.js'

//export const workerFetchMetric = () => {
//  const msgId = generateMsgId()
//
//  postMessage(MESSAGE_TYPE.FetchMetric, {
//    id: msgId,
//    payload: {},
//  })
//
//  ResponseHandler.set(msgId, { ondata })
//
//  return {
//    cancel: () => {
//      workerCancelRequest(msgId)
//      ResponseHandler.delete(msgId)
//    },
//  }
//}

export const workerFetchMetric = createWorkerRequester(MESSAGE_TYPE.FetchMetric)

export { workerCancelRequest } from './host.js'
