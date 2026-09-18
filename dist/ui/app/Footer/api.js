import { ApiMutation } from '../../../api/index.js';
export const mutateEmailLoginNewsletter = ApiMutation(({ email, token }) => ({
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
}), (gql) => gql.emailLogin.success);
