import { ApiMutation } from '../../../api/index.js';
export const mutateUserOnboarding = ApiMutation((onboarding) => ({
    schema: `mutation($onboarding:  UserOnboardingInputObject!) {
    submitUserOnboarding(onboarding: $onboarding) {
      title
      goal
      usedTools
      usesBehaviourAnalysis
      insertedAt
      updatedAt
    }
  }`,
    variables: { onboarding },
}));
