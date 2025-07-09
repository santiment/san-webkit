import { Query } from '$lib/api/executor.js'
import { JobScheduler, type TJob } from '$lib/utils/job-scheduler.js'

import { queryGetMetric } from '../../api/index.js'
import {
  MESSAGE_TYPE,
  type TFetchFormulaMetricMessage,
  type TCancelRequestMessage,
  type TFetchMetricMessage,
  type TMessageId,
  type TMessages,
  type TRequestHandler,
  type TRespondFn,
} from '../types.js'
import { fetchFormulaMetric } from './formula-metrics.js'

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
        return WORK_CANCEL_MAP.set(msg.id, handleFetchMetric(respond, msg))

      case MESSAGE_TYPE.FetchFormulaMetric:
        return WORK_CANCEL_MAP.set(msg.id, handleFetchFormulaMetric(respond, msg))

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
      .then((timeseries) => {
        if (isCancelled) {
          return
        }

        respond(MESSAGE_TYPE.FetchMetric, {
          payload: { timeseries },
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

const handleFetchFormulaMetric: TRequestHandler<TFetchFormulaMetricMessage> = (respond, msg) => {
  const { minimalDelay, parameters, formula, index, metrics } = msg.payload

  // NOTE: Decreasing priority of the formula metric
  const jobSettings = { minimalDelay, priority: (msg.payload.priority || 1) * 10 }
  const jobs: TJob[] = []

  const cancelJobs = () => jobs.forEach((job) => jobScheduler.cancelJob(job))
  const addJob = (dataRequest: () => Promise<any>) => {
    const job = jobScheduler.schedule(dataRequest, undefined, jobSettings)
    if (job) jobs.push(job)
  }

  const ctx = { metrics, parameters, cancelJobs, addJob, path: [], isCancelled: false }

  fetchFormulaMetric(formula, index, ctx)
    .then((timeseries) => {
      if (ctx.isCancelled) return

      respond(MESSAGE_TYPE.FetchFormulaMetric, {
        payload: { timeseries },
      })
    })
    .catch((error) => {
      console.warn(error)
      if (ctx.isCancelled) return

      respond(MESSAGE_TYPE.FetchFormulaMetric, {
        payload: { error },
      })
    })
    .finally(() => {
      WORK_CANCEL_MAP.delete(msg.id)
    })

  return () => {
    ctx.isCancelled = true

    cancelJobs()
  }
}
