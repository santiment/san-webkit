import { Query } from '../../../../../api/executor.js';
import { JobScheduler } from '../../../../../utils/job-scheduler.js';
import { queryGetMetric } from '../../api/index.js';
import { MESSAGE_TYPE, } from '../types.js';
import { fetchFormulaMetric, validateFormula } from './formula-metrics.js';
const WORK_CANCEL_MAP = new Map();
const jobScheduler = JobScheduler({ concurrentLimit: 10 });
// @ts-ignore
onconnect = function (event) {
    const port = event.ports[0];
    port.onmessage = function (e) {
        const msg = e.data;
        const respond = (type, data) => port.postMessage({ id: msg.id, type, ...data });
        switch (msg.type) {
            case MESSAGE_TYPE.FetchMetric:
                return WORK_CANCEL_MAP.set(msg.id, handleFetchMetric(respond, msg));
            case MESSAGE_TYPE.FetchFormulaMetric:
                return WORK_CANCEL_MAP.set(msg.id, handleFetchFormulaMetric(respond, msg));
            case MESSAGE_TYPE.ValidateFormula:
                return WORK_CANCEL_MAP.set(msg.id, handleValidateFormula(respond, msg));
            case MESSAGE_TYPE.CancelRequest:
                return handleCancelRequest(respond, msg);
            default:
                return respond(MESSAGE_TYPE.CancelRequest, {});
        }
    };
};
// TODO: Potential memory leak: when the response was sent by the worker, but before host has received it - the cancel request was sent
const handleCancelRequest = (_, msg) => {
    WORK_CANCEL_MAP.get(msg.id)?.();
    WORK_CANCEL_MAP.delete(msg.id);
};
const handleFetchMetric = (respond, msg) => {
    const { priority, minimalDelay, parameters } = msg.payload;
    let isCancelled = false;
    const queryData = () => queryGetMetric({ executor: Query })({
        metric: parameters.metric,
        selector: parameters.selector,
        from: parameters.from,
        to: parameters.to,
        interval: parameters.interval,
        aggregation: parameters.aggregation,
    })
        .then((timeseries) => {
        if (isCancelled) {
            return;
        }
        // TODO: Is there a case when the errored promise is incorrectly cached and the returned as resolved Promise????
        // This caused `timeseries` being `undefined`
        respond(MESSAGE_TYPE.FetchMetric, {
            payload: { timeseries: timeseries ?? [] },
        });
    })
        .catch((err) => {
        if (isCancelled) {
            return;
        }
        respond(MESSAGE_TYPE.FetchMetric, {
            payload: { error: err },
        });
    })
        .finally(() => {
        WORK_CANCEL_MAP.delete(msg.id);
    });
    const job = jobScheduler.schedule(queryData, undefined, { priority, minimalDelay });
    return () => {
        isCancelled = true;
        if (job)
            jobScheduler.cancelJob(job);
    };
};
const handleFetchFormulaMetric = (respond, msg) => {
    const { minimalDelay, parameters, formula, index, metrics } = msg.payload;
    // NOTE: Decreasing priority of the formula metric
    const jobSettings = { minimalDelay, priority: (msg.payload.priority || 1) * 10 };
    const jobs = [];
    const cancelJobs = () => jobs.forEach((job) => jobScheduler.cancelJob(job));
    const addJob = (dataRequest) => {
        const job = jobScheduler.schedule(dataRequest, undefined, jobSettings);
        if (job)
            jobs.push(job);
    };
    const ctx = { metrics, parameters, cancelJobs, addJob, path: [], isCancelled: false };
    fetchFormulaMetric(formula, index, ctx)
        .then((timeseries) => {
        if (ctx.isCancelled)
            return;
        respond(MESSAGE_TYPE.FetchFormulaMetric, {
            payload: { timeseries },
        });
    })
        .catch((error) => {
        console.warn(error);
        if (ctx.isCancelled)
            return;
        respond(MESSAGE_TYPE.FetchFormulaMetric, {
            payload: { error },
        });
    })
        .finally(() => {
        WORK_CANCEL_MAP.delete(msg.id);
    });
    return () => {
        ctx.isCancelled = true;
        cancelJobs();
    };
};
const handleValidateFormula = (respond, msg) => {
    let isCancelled = false;
    const job = jobScheduler.schedule(formulaValidationJob, undefined, {
        priority: 10000,
        minimalDelay: 5000,
    });
    function formulaValidationJob() {
        const { formula, index, metrics } = msg.payload;
        return Promise.resolve()
            .then(() => validateFormula(formula, index, metrics))
            .then(() => {
            if (isCancelled)
                return;
            respond(MESSAGE_TYPE.ValidateFormula, { payload: { errors: [] } });
        })
            .catch((err) => {
            if (isCancelled)
                return;
            respond(MESSAGE_TYPE.ValidateFormula, { payload: { errors: [err] } });
        })
            .finally(() => {
            WORK_CANCEL_MAP.delete(msg.id);
        });
    }
    return () => {
        isCancelled = true;
        if (job)
            jobScheduler.cancelJob(job);
    };
};
