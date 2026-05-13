export type TOnboardingRole = 'CRYPTO_TRADER' | 'RESEARCHER' | 'CONTENT_MAKER' | 'NEW_IN_CRYPTO'

export type TOnboardingGoal =
  | 'BUILD_ANALYSIS'
  | 'CATCH_TRENDS'
  | 'MAKE_BETTER_TRADE_ENTRIES'
  | 'UNDERSTAND_WHATS_GOING_ON'

export type TOnboardingTool =
  | 'PRICE_CHARTS'
  | 'SCREENERS'
  | 'NEWS_FEEDS'
  | 'ON_CHAIN_ANALYTICS'
  | 'SOCIAL_SIGNALS'
  | 'NONE_OF_THE_ABOVE'

export type TOnboardingBehaviourAnswer = 'YES' | 'NOT_SURE' | 'AWARE_BUT_UNUSED' | 'NO'

export type TOnboardingInput = {
  title: TOnboardingRole
  goal: TOnboardingGoal
  usedTools: TOnboardingTool[]
  usesBehaviourAnalysis: TOnboardingBehaviourAnswer
}

export type TUserOnboarding = {
  title: TOnboardingRole
  goal: TOnboardingGoal
  usedTools: TOnboardingTool[]
  usesBehaviourAnalysis: TOnboardingBehaviourAnswer
  insertedAt: string
  updatedAt: string
}
