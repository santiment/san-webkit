import { ApiQuery } from '../../../../../api/index.js';
import { ALERT_SCREENER_SCHEMA } from './schema.js';
export const queryUserScreenerAlerts = ApiQuery(() => `{
  currentUser {
    triggers {
      id
      settings
    }
  }
}`, (gql) => gql.currentUser?.triggers.filter((alert) => ALERT_SCREENER_SCHEMA.deduceApiAlert(alert)) ?? []);
