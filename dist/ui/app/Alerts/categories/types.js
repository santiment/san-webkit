import { STEP_NAME_DESCRIPTION_SCHEMA } from '../form-steps/name-description/schema.js';
import { STEP_NOTIFICATIONS_PRIVACY_SCHEMA } from '../form-steps/notifications-privacy/schema.js';
export function createAlertSchema(base) {
    const schema = {
        name: base.name,
        ui: base.ui,
        steps: [
            ...base.steps,
            STEP_NOTIFICATIONS_PRIVACY_SCHEMA,
            STEP_NAME_DESCRIPTION_SCHEMA,
        ],
        deduceApiAlert: base.deduceApiAlert,
    };
    return schema;
}
