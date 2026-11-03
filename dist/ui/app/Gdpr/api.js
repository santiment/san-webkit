import { ApiMutation } from '../../../api/index.js';
export const mutateGdpr = ApiMutation((variables) => ({
    schema: `mutation updateTermsAndConditions($privacyPolicyAccepted: Boolean!, $marketingAccepted: Boolean!) {
      updateTermsAndConditions(privacyPolicyAccepted: $privacyPolicyAccepted, marketingAccepted: $marketingAccepted) {
        privacyPolicyAccepted
        marketingAccepted
      }
    }
  `,
    variables,
}), (gql) => gql.updateTermsAndConditions);
export const mutateChangeUsername = ApiMutation((username) => `mutation {
    changeUsername(username: "${username}") {
      id
    }
  }
`);
