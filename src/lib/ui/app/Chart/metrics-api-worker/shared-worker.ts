import { Query } from '$lib/api/executor.js'
import { JobScheduler } from '$lib/utils/job-scheduler.js'

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

const WORK_CANCEL_MAP = new Map<TMessageId, () => void>()

const jobScheduler = JobScheduler({ concurrentLimit: 10 })

// @ts-ignore
onconnect = function (event: MessageEvent<unknown>) {
  const port = event.ports[0]

  port.onmessage = function (e: MessageEvent<TMessages['request']>) {
    const msg = e.data

    const respond: TRespondFn = (type, data) => port.postMessage({ id: msg.id, type, ...data })

    switch (msg.type) {
      case MESSAGE_TYPE.FetchMetric:
        return WORK_CANCEL_MAP.set(msg.id, handleFetchMetric(respond, msg)!)

      case MESSAGE_TYPE.CancelRequest:
        return handleCancelRequest(respond, msg)

      default:
        return respond(MESSAGE_TYPE.CancelRequest, {})
    }
  }
}

// TODO: Potential memory leak: when the response was sent by the worker, but before host has received it - the cancel request was sent
const handleCancelRequest: TRequestHandler<TCancelRequestMessage> = (_, msg) => {
  WORK_CANCEL_MAP.get(msg.id)?.()
  WORK_CANCEL_MAP.delete(msg.id)
}

const handleFetchMetric: TRequestHandler<TFetchMetricMessage> = (respond, msg) => {
  const { priority, minimalDelay, parameters } = msg.payload

  let isCancelled = false

  const queryData = () =>
    queryGetMetric({ executor: Query })({
      metric: parameters.metric,
      selector: parameters.selector,
      from: parameters.from,
      to: parameters.to,
      interval: parameters.interval,
    })
      .then((data) => {
        if (isCancelled) {
          return
        }

        respond(MESSAGE_TYPE.FetchMetric, {
          payload: { timeseries: data },
        })
      })
      .catch((err) => {
        if (isCancelled) {
          return
        }

        respond(MESSAGE_TYPE.FetchMetric, {
          payload: { error: err },
        })
      })
      .finally(() => {
        WORK_CANCEL_MAP.delete(msg.id)
      })

  const job = jobScheduler.schedule(queryData, undefined, { priority, minimalDelay })

  return () => {
    isCancelled = true

    if (job) jobScheduler.cancelJob(job)
  }
}
