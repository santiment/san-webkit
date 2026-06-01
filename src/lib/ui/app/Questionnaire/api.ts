import type { TOnboardingInput } from './types.js'

import { ApiMutation } from '$lib/api/index.js'

export const mutateUserOnboarding = ApiMutation((onboarding: TOnboardingInput) => ({
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
}))
