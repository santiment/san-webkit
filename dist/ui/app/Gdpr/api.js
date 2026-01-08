import { ApiMutation } from '../../../api/index.js';
export const mutateGdpr = ApiMutation((privacyPolicyAccepted) => `mutation {
      updateTermsAndConditions(privacyPolicyAccepted: ${privacyPolicyAccepted}) {
        privacyPolicyAccepted
      }
    }
  `);
export const mutateChangeUsername = ApiMutation((username) => `mutation {
    changeUsername(username: "${username}") {
      id
    }
  }
`);
