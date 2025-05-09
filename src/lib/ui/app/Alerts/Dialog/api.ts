import type { TApiAlert } from '../types.js'

import { ApiMutation } from '$lib/api/index.js'

type TSaveAlertProps = {
  id: number | null
  settings: TApiAlert['settings']
  isPublic: boolean
  isRepeating: boolean
  cooldown: string
  title: string
  description: string | null
}

export const mutateSaveAlert = ApiMutation(
  ({ id, settings, ...variables }: TSaveAlertProps) => ({
    schema: `mutation($settings: json!, $isPublic: Boolean, $isRepeating: Boolean, $cooldown: String, $title: String!, $description: String) {
  savedAlert:${id ? 'updateTrigger(id:' + id : 'createTrigger('}
    settings: $settings
    isPublic: $isPublic
    isRepeating: $isRepeating
    cooldown: $cooldown
    title: $title
    description: $description
  ) {
    trigger {
      id
    }
  }
}`,
    variables: { ...variables, settings: JSON.stringify(settings) },
  }),
  (gql: { savedAlert: { trigger: { id: number } } }) => gql.savedAlert.trigger,
)

// export async function mutateSaveAlert(alert: App.Alerts.Category['alert'], schema: AlertSchemas) {
//   const { id, title, description, conditions, channel, cooldown, isRepeating, isPublic } = alert

//   const { time, operation } = conditions || {}

//   const settings = {
//     operation: operation && {
//       [operation.type.key]: getOperationValues(operation),
//     },
//     ...schema,
//     channel: mapSourcesToChannel(channel, filterValidSources(channel)),
//     time_window: time ? time.value + time.type.key : '',
//   }

//   if (settings.type.includes('metric_signal')) {
//     const { metric } = settings as any
//     if (metric) {
//       const minInterval = await getMetricKeyMinInterval(metric)
//       settings.type = minInterval === '1d' ? 'daily_metric_signal' : 'metric_signal'
//     }
//   }

//   return mutate<AlertMutation>(
//     `mutation($settings: json!, $isPublic: Boolean, $isRepeating: Boolean, $cooldown: String, $title: String!, $description: String) {
//   savedAlert:${id ? 'updateTrigger(id:' + id : 'createTrigger('}
//     settings: $settings
//     isPublic: $isPublic
//     isRepeating: $isRepeating
//     cooldown: $cooldown
//     title: $title
//     description: $description
//   ) {
//     trigger {
//       id
//     }
//   }
// }`,
//     {
//       variables: {
//         title,
//         description,
//         isRepeating,
//         isPublic,
//         settings: JSON.stringify(settings),
//         cooldown: cooldown.value + cooldown.type.key,
//       },
//     },
//   ).then(({ savedAlert }) => savedAlert.trigger)
// }
