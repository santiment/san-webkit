import { describeConditions } from '../metric-conditions/utils.js';
import { describeNotifications } from '../notifications-privacy/utils.js';
export function defaultMetricTitle(targetTitle, metricStepState) {
    const { metric, metricLabel, conditions } = metricStepState;
    return `${targetTitle} ${metricLabel.toLowerCase()} ` + describeConditions(metric, conditions);
}
export function defaultMetricDescription(targetTitle, metricStepState, notificationStep) {
    const { metric, metricLabel, conditions } = metricStepState;
    return (`Notify me when the ` +
        metricLabel.toLowerCase() +
        ` of ` +
        targetTitle +
        ` ${describeConditions(metric, conditions)}. ` +
        describeNotifications(notificationStep));
}
