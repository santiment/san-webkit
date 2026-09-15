import { ApiMutation, ApiQuery } from '../../../../api/index.js';
export const mutateSaveAlert = ApiMutation(({ id, settings, ...variables }) => ({
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
}), (gql) => gql.savedAlert.trigger);
export const queryUserAlertsCount = ApiQuery(() => `{
  currentUser {
    triggers {
      id
    }
  }
}`, (gql) => gql.currentUser.triggers.length);
