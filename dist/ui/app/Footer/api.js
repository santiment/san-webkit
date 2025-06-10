import { ApiMutation } from '../../../api/index.js';
export const mutateEmailLoginNewsletter = ApiMutation((email) => `
    mutation {
      emailLogin(email: "${email}", subscribeToWeeklyNewsletter: true) {
        success
      }
    }
  `, (gql) => gql.emailLogin.success);
