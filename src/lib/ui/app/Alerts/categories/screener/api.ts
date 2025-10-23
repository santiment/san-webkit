import type { TGenericSettings as TGenericAlertSettings } from '../../types.js'

import { ApiQuery } from '$lib/api/index.js'

import { ALERT_SCREENER_SCHEMA, type TScreenerApiAlert } from './schema.js'

export type TScreenerAlert = API.ExtractData<typeof queryUserScreenerAlerts>[number]

export const queryUserScreenerAlerts = ApiQuery(
  () => `{
  currentUser {
    triggers {
      id
      settings
    }
  }
}`,
  (gql: {
    currentUser: {
      triggers: {
        id: string
        settings: TGenericAlertSettings
      }[]
    }
  }) => {
    const screenerAlerts = gql.currentUser.triggers.filter(
      (alert): alert is TScreenerApiAlert & { id: string } =>
        ALERT_SCREENER_SCHEMA.deduceApiAlert(alert as TScreenerApiAlert),
    )

    return screenerAlerts
  },
)
