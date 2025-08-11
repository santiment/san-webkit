import { ApiMutation } from '../../api/index.js';
export const mutateEmailLogin = ApiMutation(({ consent = '', subscribeToWeeklyNewsletter = false, ...rest }) => ({
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
}), (gql) => gql.emailLogin.success);
