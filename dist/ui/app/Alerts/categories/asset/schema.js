import { STEP_METRIC_CONDITIONS_SCHEMA } from '../../form-steps/metric-conditions/schema.js';
import { createAlertSchema } from '../types.js';
import { STEP_ASSETS_SCHEMA } from './asset-form-step/schema.js';
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
    suggestTitle(steps) {
        const assetStep = steps[0];
        return 'Title: ' + assetStep.state.$$.target.slug;
    },
    suggestDescription(steps) {
        const assetStep = steps[0];
        return 'Description: ' + assetStep.state.$$.target.slug;
    },
});
