import type { TMetricConditionsState } from '../metric-conditions/schema.js'
import type { TNotificationsState } from '../notifications-privacy/schema.js'

import { describeConditions } from '../metric-conditions/utils.js'
import { describeNotifications } from '../utils.js'

export function defaultMetricTitle(targetTitle: string, metricStepState: TMetricConditionsState) {
  const { metric, metricLabel, conditions } = metricStepState

  return `${targetTitle} ${metricLabel.toLowerCase()} ` + describeConditions(metric, conditions)
}

export function defaultMetricDescription(
  targetTitle: string,
  metricStepState: TMetricConditionsState,
  notificationStep: TNotificationsState,
) {
  const { metric, metricLabel, conditions } = metricStepState

  return (
    `Notify me when the ` +
    metricLabel.toLowerCase() +
    ` of ` +
    targetTitle +
    ` ${describeConditions(metric, conditions)}. ` +
    describeNotifications(notificationStep)
  )
}
