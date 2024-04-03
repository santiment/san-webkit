import type { Meta, StoryObj } from '@storybook/svelte'

import Component from './index.svelte'
import { mockPlans } from './plans'

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
      ...mockPlans,
      currentUser: {
        sanBalance: 2000,
      },
    }),
  },
}

export const EligibleForTrial: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      currentUser: {
        isEligibleForSanbaseTrial: true,
      },
    }),
  },
}

export const ActiveTrial: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
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
      ...mockPlans,
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
      ...mockPlans,
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
      ...mockPlans,
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
      ...mockPlans,
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

export const UserHasPromocodes: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      currentUser: {
        promoCodes: [
          {
            campaign: 'test',
            coupon: 'TESTPROMO20',
            maxRedemptions: 1,
            percentOff: 20,
            timesRedeemed: 0,
          },
          {
            campaign: 'test',
            coupon: 'TESTPROMO10',
            maxRedemptions: 1,
            percentOff: 10,
            timesRedeemed: 0,
          },
          {
            campaign: 'test',
            coupon: 'INVALIDPROMO',
            maxRedemptions: 1,
            percentOff: 60,
            timesRedeemed: 1,
          },
        ],
      },

      'query getCoupon': {
        isValid: true,
        percentOff: 20,
      },

      'query productsWithPlans': [
        {
          id: '2',
          plans: [
            {
              amount: 52900,
              id: '202',
              interval: 'year',
              isDeprecated: false,
              name: 'PRO',
            },
          ],
        },
      ],
    }),
  },
}
