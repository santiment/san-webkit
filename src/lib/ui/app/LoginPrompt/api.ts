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
