import { ApiMutation } from '$lib/api/index.js'

export const mutateEmailLoginNewsletter = ApiMutation(
  ({ email, token }: { email: string; token: string }) => ({
    schema: `
      mutation($email: String!, $token: String, $subscribeToWeeklyNewsletter: Boolean!) {
        emailLogin(
          email: $email,
          token: $token,
          subscribeToWeeklyNewsletter: $subscribeToWeeklyNewsletter
        ) {
          success
        }
      }
    `,
    variables: { email, token, subscribeToWeeklyNewsletter: true },
  }),
  (gql: { emailLogin: { success: boolean } }) => gql.emailLogin.success,
)
