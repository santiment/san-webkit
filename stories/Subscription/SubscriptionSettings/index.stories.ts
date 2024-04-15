import type { Meta, StoryObj } from '@storybook/svelte'

import Component from '@/ui/Pricing/SubscriptionSettings/index.svelte'
import { mockPlans } from '../Payment Dialog/plans'
import { pppMock } from './mock'
import { Plan } from '@/utils/plans'

const meta = {
  // title: 'Design System/Icons',
  component: Component,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',

    docs: { story: { height: 800 } },
  },
} satisfies Meta<Component>
type Story = StoryObj<typeof meta>

export default meta

export const FreeNoCard: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      ...pppMock,
      savedCard: false,
      currentUser: {},
    }),
  },
}

export const FreeWithCard: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      ...pppMock,
      savedCard: true,
      currentUser: {},
    }),
  },
}

export const ProTrialNoCard: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      ...pppMock,
      savedCard: false,
      currentUser: {
        plan: {
          pro: true,
          trial: true,
          monthly: true,
        },
      },
    }),
  },
}

export const ProTrialCanceledNoCard: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      ...pppMock,
      savedCard: false,
      currentUser: {
        plan: {
          pro: true,
          trial: true,
          monthly: true,
          cancelledInDays: 5,
        },
      },
    }),
  },
}

export const ProMonthNoCard: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      ...pppMock,
      savedCard: false,
      currentUser: {
        plan: {
          pro: true,
          monthly: true,
        },
      },
    }),
  },
}

export const ProYearNoCard: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      ...pppMock,
      savedCard: false,
      currentUser: {
        plan: {
          pro: true,
          yearly: true,
        },
      },
    }),
  },
}

export const ProPlusMonthNoCard: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      ...pppMock,
      savedCard: false,
      currentUser: {
        plan: {
          proPlus: true,
          monthly: true,
        },
      },
    }),
  },
}

export const ProPlusYearNoCard: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      ...pppMock,
      savedCard: false,
      currentUser: {
        plan: {
          proPlus: true,
          yearly: true,
        },
      },
    }),
  },
}

export const MaxYearNoCard: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      ...pppMock,
      savedCard: false,
      currentUser: {
        plan: {
          name: Plan.MAX,
          yearly: true,
        },
      },
    }),
  },
}

export const BusinessProYearNoCard: Story = {
  parameters: {
    mockApi: () => ({
      ...mockPlans,
      ...pppMock,
      savedCard: false,
      currentUser: {
        plan: {
          name: Plan.BUSINESS_PRO,
          yearly: true,
        },
      },
    }),
  },
}
