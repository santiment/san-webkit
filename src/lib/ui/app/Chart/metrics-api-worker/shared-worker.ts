import { Query } from '$lib/api/executor.js'

import { queryGetMetric } from '../api/index.js'
import {
  MESSAGE_TYPE,
  type TCancelRequestMessage,
  type TFetchMetricMessage,
  type TMessageId,
  type TMessages,
  type TRequestHandler,
  type TRespondFn,
} from './types.js'

const CANCELLED_REQUESTS = new Set<TMessageId>()

// @ts-ignore
onconnect = function (event: MessageEvent<unknown>) {
  const port = event.ports[0]

  port.onmessage = function (e: MessageEvent<TMessages['request']>) {
    const msg = e.data

    const respond: TRespondFn = (type, data) => port.postMessage({ id: msg.id, type, ...data })

    switch (msg.type) {
      case MESSAGE_TYPE.FetchMetric:
        return handleFetchMetric(respond, msg)

      case MESSAGE_TYPE.CancelRequest:
        return handleCancelRequest(respond, msg)

      default:
        return respond(MESSAGE_TYPE.CancelRequest, {})
    }
  }
}

// TODO: Potential memory leak: when the response was sent by the worker, but before host has received it - the cancel request was sent
const handleCancelRequest: TRequestHandler<TCancelRequestMessage> = (_, msg) =>
  CANCELLED_REQUESTS.add(msg.id)

const handleFetchMetric: TRequestHandler<TFetchMetricMessage> = (respond, msg) => {
  const settings = msg.payload

  queryGetMetric({ executor: Query })({
    metric: settings.metric,
    selector: settings.selector,
    from: settings.from,
    to: settings.to,
    interval: settings.interval,
  })
    .then((data) => {
      if (CANCELLED_REQUESTS.delete(msg.id)) {
        return
      }

      respond(MESSAGE_TYPE.FetchMetric, {
        payload: { timeseries: data },
      })
    })
    .catch((err) => {
      if (CANCELLED_REQUESTS.delete(msg.id)) {
        return
      }

      respond(MESSAGE_TYPE.FetchMetric, {
        payload: { error: err },
      })
    })
    .finally(() => {})
}
