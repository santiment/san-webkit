import { ApiMutation } from '$lib/api/index.js'

export const mutateGdpr = ApiMutation(
  (variables: { privacyPolicyAccepted: boolean; marketingAccepted: boolean }) => ({
    schema: `mutation updateTermsAndConditions($privacyPolicyAccepted: Boolean!, $marketingAccepted: Boolean!) {
      updateTermsAndConditions(privacyPolicyAccepted: $privacyPolicyAccepted, marketingAccepted: $marketingAccepted) {
        privacyPolicyAccepted
        marketingAccepted
      }
    }
  `,
    variables,
  }),
  (gql: {
    updateTermsAndConditions: { privacyPolicyAccepted: boolean; marketingAccepted: boolean }
  }) => gql.updateTermsAndConditions,
)

export const mutateChangeUsername = ApiMutation(
  (username: string) => `mutation {
    changeUsername(username: "${username}") {
      id
    }
  }
`,
)
