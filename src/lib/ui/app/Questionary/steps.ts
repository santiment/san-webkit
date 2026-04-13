export type TStep = {
  title: string
  description?: string
  type: 'radio' | 'multi'
  options: string[]
}

export const STEPS: TStep[] = [
  {
    title: 'What best describes you?',
    type: 'radio',
    options: [
      'I am a crypto trader',
      'I am a researcher / analyst',
      'I create content or run a community',
      'I am new to crypto and eager to learn',
    ],
  },
  {
    title: "What's your primary goal right now?",
    type: 'radio',
    options: [
      'Catch trends, narratives before the crowd',
      'Make better trade entries and exits',
      'Build analysis or content to share',
      "Understand what's happening in the market",
    ],
  },
  {
    title: 'Which tools have you used before?',
    type: 'multi',
    options: [
      'Price charts',
      'Screeners',
      'Alerts / price notifications',
      'On-chain data tools',
      'Social / sentiment tools',
      'None of the above',
    ],
  },
  {
    title: 'Do you use behavior analysis?',
    description:
      '(contrarian positioning, Elliot Waves, Wyckoff Method, fear/greed indicators etc)',
    type: 'radio',
    options: [
      'Yes, I primarily use these to read the market',
      'Sometimes, to confirm other signals',
      "I'm aware but don't really use them",
      'I do not know or use these methods',
    ],
  },
]
