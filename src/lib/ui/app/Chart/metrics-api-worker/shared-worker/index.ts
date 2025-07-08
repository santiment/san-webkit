import { ApiCache } from '$lib/api/cache.js'
import { Query } from '$lib/api/executor.js'
import { JobScheduler, type TJob } from '$lib/utils/job-scheduler.js'
import type { SymbolNode } from 'mathjs'

import { queryGetMetric, type TMetricData } from '../../api/index.js'
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
import { math, Timeseries } from './math.js'
import { parseFormulaVariables } from '../utils.js'
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
        return WORK_CANCEL_MAP.set(msg.id, handleFetchMetric(respond, msg)!)

      case MESSAGE_TYPE.FetchFormulaMetric:
        return WORK_CANCEL_MAP.set(msg.id, handleFetchFormulaMetric(respond, msg)!)

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

      respond(MESSAGE_TYPE.FetchFormulaMetric, { payload: { timeseries } })
    })
    .catch((error) => {
      if (ctx.isCancelled) return

      respond(MESSAGE_TYPE.FetchFormulaMetric, {
        payload: { error },
      })
    })
    .finally(() => {
      WORK_CANCEL_MAP.delete(msg.id)
    })

  //const cacheKey = JSON.stringify({ formula, parameters })
  //
  //const cached = ApiCache.get(cacheKey, Query)
  //
  //console.log({ cached })
  //
  //// TODO: Parse only used scope `var`s in `expr`
  //const metrics = formula.scope.map((item) => {
  //  return new Promise<TMetricData>((resolve, reject) => {
  //    const rejectAndCancel = (reason?: any) => (reject(reason), cancelJobs(), reason)
  //
  //    const dataRequest = () => queryMetric(item.metric, resolve, rejectAndCancel)
  //
  //    const job = jobScheduler.schedule(dataRequest, undefined, { priority, minimalDelay })
  //
  //    if (job) jobs.push(job)
  //  })
  //})

  //function queryMetric(
  //  metric: string,
  //  resolve: (value: TMetricData) => void,
  //  reject: (reason?: any) => void,
  //): Promise<void> {
  //  return queryGetMetric({ executor: Query })({
  //    metric,
  //    selector: parameters.selector,
  //    from: parameters.from,
  //    to: parameters.to,
  //    interval: parameters.interval,
  //  })
  //    .then(resolve)
  //    .catch(reject)
  //}

  //Promise.all(metrics)
  //  .then((metricsData) => {
  //    if (isCancelled) return
  //
  //    const { expr, scope } = formula
  //    const result = math.evaluate(
  //      expr,
  //      scope.reduce(
  //        (acc, item, i) => ({ ...acc, [item.var]: new Timeseries(metricsData[i]) }),
  //        {} as object,
  //      ),
  //    )
  //
  //    let timeseries: TMetricData = []
  //
  //    if (result instanceof Timeseries) {
  //      timeseries = result.toMetricData()
  //    } else if (typeof result === 'number') {
  //      // TODO: Populate timeseries with constant number based on from/to and interval
  //
  //      timeseries = []
  //    }
  //
  //    ApiCache.add(cacheKey, {
  //      executor: Query,
  //      result: Promise.resolve(timeseries),
  //      options: {},
  //    })
  //
  //    respond(MESSAGE_TYPE.FetchFormulaMetric, { payload: { timeseries } })
  //  })
  //  .catch((error) => {
  //    if (isCancelled) return
  //
  //    respond(MESSAGE_TYPE.FetchFormulaMetric, {
  //      payload: { error },
  //    })
  //  })
  //  .finally(() => {
  //    WORK_CANCEL_MAP.delete(msg.id)
  //  })

  return () => {
    ctx.isCancelled = true

    cancelJobs()
  }
}
