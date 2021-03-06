import { mutate } from '@/api'

const GDPR_MUTATION = (privacyPolicyAccepted: boolean) => `
  mutation {
    updateTermsAndConditions(privacyPolicyAccepted:${privacyPolicyAccepted}) {
      privacyPolicyAccepted
    }
  }
`

export const mutateGdpr = (privacyPolicyAccepted: boolean) =>
  mutate(GDPR_MUTATION(privacyPolicyAccepted))
