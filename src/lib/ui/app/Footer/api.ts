import { ApiMutation } from '$lib/api/index.js'

export const mutateEmailLoginNewsletter = ApiMutation(
  (variables: { email: string }) => ({
    schema: `
      mutation ($email: String!) {
        emailLogin(email: $email, subscribeToWeeklyNewsletter: true) {
          success
        }
      }
  `,
    variables,
  }),
  (gql: { emailLogin: { success: boolean } }) => gql.emailLogin.success,
)
