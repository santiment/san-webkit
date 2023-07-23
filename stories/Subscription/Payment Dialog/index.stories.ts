import type { Meta, StoryObj } from '@storybook/svelte'

import Component from './index.svelte'

const meta = {
  // title: 'Design System/Icons',
  component: Component,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',

    // docs: { story: { height: 100 } },
  },
} satisfies Meta<Component>
type Story = StoryObj<typeof meta>

export default meta

export const SANHolderDiscount: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: {
        sanBalance: 2000,
      },
    }),
  },
}

export const EligibleForTrial: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: {
        isEligibleForSanbaseTrial: true,
      },
    }),
  },
}

export const ActiveTrial: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: {
          pro: true,
          monthly: true,
          trial: true,
        },
      },
    }),
  },
}

export const ExpiredTrial: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: {
          pro: true,
          monthly: true,
          trial: true,
          trialDaysLeft: 0,
        },
      },
    }),
  },
}

export const TrialAnnualDiscount35: Story = {
  parameters: {
    mockApi: () => ({
      annualDiscount: 35,
      currentUser: {
        plan: {
          pro: true,
          monthly: true,
          trial: true,
        },
      },
    }),
  },
}

export const TrialAnnualDiscount50: Story = {
  parameters: {
    mockApi: () => ({
      annualDiscount: 50,
      currentUser: {
        plan: {
          pro: true,
          monthly: true,
          trial: true,
        },
      },
    }),
  },
}

export const SavedCard: Story = {
  parameters: {
    mockApi: () => ({
      savedCard: true,
      currentUser: {
        plan: {
          pro: true,
          monthly: true,
          trial: true,
        },
      },
    }),
  },
}
