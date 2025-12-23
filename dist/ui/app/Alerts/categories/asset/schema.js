import { STEP_METRIC_CONDITIONS_SCHEMA } from '../../form-steps/metric-conditions/schema.js';
import { createAlertSchema } from '../types.js';
import { STEP_ASSETS_SCHEMA } from './asset-form-step/schema.js';
import { defaultMetricDescription, defaultMetricTitle, } from '../../form-steps/name-description/utils.js';
import { getAssetTargetTitle } from './utils.js';
export const ALERT_ASSET_SCHEMA = createAlertSchema({
    name: 'asset',
    ui: {
        label: 'Asset',
        description: 'Create an alert for the specific asset or group of assets',
        icon: 'asset-small',
    },
    steps: [STEP_ASSETS_SCHEMA, STEP_METRIC_CONDITIONS_SCHEMA],
    deduceApiAlert(apiAlert) {
        return Boolean(apiAlert.settings?.type.includes('metric_signal') && apiAlert.settings?.target.slug);
    },
    suggestTitle([assetStep, metricStep]) {
        const { target } = assetStep.state.$$;
        return defaultMetricTitle(getAssetTargetTitle(target), metricStep.state.$$);
    },
    suggestDescription([assetStep, metricStep, notificationStep]) {
        const { target } = assetStep.state.$$;
        return defaultMetricDescription(getAssetTargetTitle(target), metricStep.state.$$, notificationStep.state.$$);
    },
});
