import { BROWSER } from 'esm-env'

import {
  MESSAGE_TYPE,
  type TMessageId,
  type TMessageResponsesByType,
  type TMessages,
  type TMessageTypeValues,
} from './types.js'

type TMessageRequestByType = {
  [V in TMessages['request'] as V['type']]: V
}
type TRequestFn = <GType extends TMessageTypeValues>(
  type: GType,
  data: Omit<TMessageRequestByType[GType], 'type'>,
) => void

export const metricsApiSharedWorker = BROWSER
  ? new SharedWorker(new URL('./shared-worker/index.js', import.meta.url), { type: 'module' })
  : { port: { onmessage: null, postMessage: () => {} } }
// metricsApiSharedWorker.port.start() // IS REQUIRED WHEN USING addEventListener

const ResponseHandler = new Map<number, { ondata: (data: any) => void }>()

metricsApiSharedWorker.port.onmessage = (e: MessageEvent<TMessages['response']>) => {
  const msg = e.data

  // NOTE: Message type is CancelRequest
  if (!msg.type) {
    return ResponseHandler.delete(msg.id)
  }

  const handler = ResponseHandler.get(msg.id)
  handler?.ondata(msg)

  // NOTE: Message state is completed
  if (!msg.state) {
    ResponseHandler.delete(msg.id)
  }
}

let _msgId = 0
export const generateMsgId = () => _msgId++ as TMessageId

export const postMessage: TRequestFn = (type, data) =>
  metricsApiSharedWorker.port.postMessage({ type, ...data })

export const workerCancelRequest = (id: TMessageId) => {
  if (ResponseHandler.delete(id)) {
    postMessage(MESSAGE_TYPE.CancelRequest, { id })
  }
}

export function createWorkerRequester<GType extends TMessageTypeValues>(type: GType) {
  return (
    payload: TMessageRequestByType[GType]['payload'],
    ondata: (msg: TMessageResponsesByType[GType]) => void,
  ) => {
    const msgId = generateMsgId()

    postMessage(type, { id: msgId, payload } as TMessageRequestByType[GType])
    ResponseHandler.set(msgId, { ondata })

    return {
      id: msgId,
      cancel: () => workerCancelRequest(msgId),
    }
  }
}
