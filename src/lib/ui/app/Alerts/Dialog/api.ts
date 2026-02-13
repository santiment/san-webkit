import type { TApiAlert } from '../types.js'

import { ApiMutation, ApiQuery } from '$lib/api/index.js'

export type TSaveAlertProps = {
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

export const mutateDeleteAlert = ApiMutation(
  (variables: { id: number }) => ({
    schema: `mutation($id: Int!) {
  removeTrigger(id: $id) {
    trigger {
      id
    }
  }}`,
    variables,
  }),
  (gql: { removeTrigger: { trigger: { id: number } } }) => gql.removeTrigger.trigger,
)

export const queryUserAlertsCount = ApiQuery(
  () => `{
  currentUser {
    triggers {
      id
    }
  }
}`,
  (gql: { currentUser: { triggers: { id: number }[] } }) => gql.currentUser.triggers.length,
)
