import { ApiMutation } from '$lib/api/index.js'

export const mutateGdpr = ApiMutation(
  (privacyPolicyAccepted: boolean) => `mutation {
      updateTermsAndConditions(privacyPolicyAccepted: ${privacyPolicyAccepted}) {
        privacyPolicyAccepted
      }
    }
  `,
)

export const mutateChangeUsername = ApiMutation(
  (username: string) => `mutation {
    changeUsername(username: "${username}") {
      id
    }
  }
`,
)
