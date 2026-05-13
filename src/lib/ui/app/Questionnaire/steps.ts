import type { TOnboardingInput } from './types.js'

export type TStepOption = {
  label: string
  value: string
  isExclusive?: boolean
}

export type TStep = {
  title: string
  description?: string
  field: keyof TOnboardingInput
  type: 'radio' | 'multi'
  options: TStepOption[]
}

export const STEPS: TStep[] = [
  {
    title: 'What best describes you?',
    field: 'title',
    type: 'radio',
    options: [
      { label: 'I am a crypto trader', value: 'CRYPTO_TRADER' },
      { label: 'I am a researcher / analyst', value: 'RESEARCHER' },
      { label: 'I create content or run a community', value: 'CONTENT_MAKER' },
      { label: 'I am new to crypto and eager to learn', value: 'NEW_IN_CRYPTO' },
    ],
  },
  {
    title: "What's your primary goal right now?",
    field: 'goal',
    type: 'radio',
    options: [
      { label: 'Catch trends, narratives before the crowd', value: 'CATCH_TRENDS' },
      { label: 'Make better trade entries and exits', value: 'MAKE_BETTER_TRADE_ENTRIES' },
      { label: 'Build analysis or content to share', value: 'BUILD_ANALYSIS' },
      { label: "Understand what's happening in the market", value: 'UNDERSTAND_WHATS_GOING_ON' },
    ],
  },
  {
    title: 'Which tools have you used before?',
    field: 'usedTools',
    type: 'multi',
    options: [
      { label: 'Price charts', value: 'PRICE_CHARTS' },
      { label: 'Screeners', value: 'SCREENERS' },
      { label: 'Alerts / price notifications', value: 'NEWS_FEEDS' },
      { label: 'On-chain data tools', value: 'ON_CHAIN_ANALYTICS' },
      { label: 'Social / sentiment tools', value: 'SOCIAL_SIGNALS' },
      { label: 'None of the above', value: 'NONE_OF_THE_ABOVE', isExclusive: true },
    ],
  },
  {
    title: 'Do you use behavior analysis?',
    description:
      '(contrarian positioning, Elliot Waves, Wyckoff Method, fear/greed indicators etc)',
    field: 'usesBehaviourAnalysis',
    type: 'radio',
    options: [
      { label: 'Yes, I primarily use these to read the market', value: 'YES' },
      { label: 'Sometimes, to confirm other signals', value: 'NOT_SURE' },
      { label: "I'm aware but don't really use them", value: 'AWARE_BUT_UNUSED' },
      { label: 'I do not know or use these methods', value: 'NO' },
    ],
  },
]
