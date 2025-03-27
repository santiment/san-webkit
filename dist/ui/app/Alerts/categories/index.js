import { ALERT_ASSET_SCHEMA } from './asset/schema.js';
import { ALERT_SOCIAL_TRENDS_SCHEMA } from './social-trends/schema.js';
export const SCHEMAS = [ALERT_ASSET_SCHEMA, ALERT_SOCIAL_TRENDS_SCHEMA];
export const SchemaByType = SCHEMAS.reduce((acc, item) => {
    // @ts-expect-error Assigning schema to reduced accumulator
    acc[item.name] = item;
    return acc;
}, {});
export function deduceApiAlertSchema(apiAlert) {
    return (apiAlert && SCHEMAS.find((schema) => schema.deduceApiAlert(apiAlert))) || null;
}
