import type { TMetricConditionsState } from '../metric-conditions/schema.js';
import type { TNotificationsState } from '../notifications-privacy/schema.js';
export declare function defaultMetricTitle(targetTitle: string, metricStepState: TMetricConditionsState): string;
export declare function defaultMetricDescription(targetTitle: string, metricStepState: TMetricConditionsState, notificationStep: TNotificationsState): string;
