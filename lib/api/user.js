import { mutate } from './../api'
export const NEWSLETTER_EMAIL_LOGIN_MUTATION = `
  mutation ($email: String!) {
    emailLogin(email: $email, subscribeToWeeklyNewsletter: true) {
      success
    }
  }
`
export const loginWithNewsletter = (email) =>
  mutate(NEWSLETTER_EMAIL_LOGIN_MUTATION, {
    variables: { email },
  })
// ---------------
const CHANGE_USERNAME_MUTATION = (username) => `
  mutation {
    changeUsername(username:"${username}") {
      id
    }
  }
`
export const mutateChangeUsername = (username) => mutate(CHANGE_USERNAME_MUTATION(username))
//# sourceMappingURL=user.js.map
