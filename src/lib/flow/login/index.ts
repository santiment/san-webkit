import { ApiMutation } from '$lib/api/index.js'

export type TMutateEmailLoginVariables = {
  email: string
  token: string
  consent?: string
  subscribeToWeeklyNewsletter?: boolean
  successRedirectUrl?: string
}

export const mutateEmailLogin = ApiMutation(
  ({ consent = '', subscribeToWeeklyNewsletter = false, ...rest }: TMutateEmailLoginVariables) => ({
    schema: `
  mutation($email: String!, $consent: String!, $subscribeToWeeklyNewsletter: Boolean!, $successRedirectUrl:String, $token: String) {
    emailLogin(
      email:$email,
      consent:$consent,
      token:$token,
      subscribeToWeeklyNewsletter:$subscribeToWeeklyNewsletter,
      successRedirectUrl:$successRedirectUrl
    ) {
      success
    }
  }
`,
    variables: { ...rest, consent, subscribeToWeeklyNewsletter },
  }),
  (gql: { emailLogin: { success: boolean } }) => gql.emailLogin.success,
)
