import { ApiMutation } from '$lib/api/index.js'

export type MutateEmailLoginVariables = {
  email: string
  consent?: string
  subscribeToWeeklyNewsletter?: boolean
  successRedirectUrl?: string
}

export const mutateEmailLogin = ApiMutation(
  ({ consent = '', subscribeToWeeklyNewsletter = false, ...rest }: MutateEmailLoginVariables) => ({
    schema: `
  mutation($email: String!, $consent: String!, $subscribeToWeeklyNewsletter: Boolean!, $successRedirectUrl:String) {
    emailLogin(
      email:$email,
      consent:$consent,
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
