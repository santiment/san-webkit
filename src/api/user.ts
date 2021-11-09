import type { Query } from './index'
import { mutate } from './index'

export const NEWSLETTER_EMAIL_LOGIN_MUTATION = `
  mutation ($email: String!) {
    emailLogin(email: $email, subscribeToWeeklyNewsletter: true) {
      success
    }
  }
`

type EmailLoginMutation = Query<
  'emailLogin',
  {
    success: boolean
  }
>

export const loginWithNewsletter = (email: string) =>
  mutate<EmailLoginMutation>(NEWSLETTER_EMAIL_LOGIN_MUTATION, {
    variables: { email },
  })
