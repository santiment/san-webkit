import { ApiMutation } from '$lib/api/index.js'

export const mutateGdpr = ApiMutation((variables: { privacyPolicyAccepted: boolean }) => ({
  schema: `mutation($privacyPolicyAccepted: Boolean) {
      updateTermsAndConditions(privacyPolicyAccepted: $privacyPolicyAccepted) {
        privacyPolicyAccepted
      }
    }
  `,
  variables,
}))

export const mutateChangeUsername = ApiMutation((variables: { username: string | null }) => ({
  schema: `mutation($username: String!) {
    changeUsername(username: $username) {
      id
    }
  }
`,
  variables,
}))
