import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const Anonymous: Story = {
  name: 'Anonymous',
  parameters: {
    mockApi: () => ({
      currentUser: null,
    }),
  },
}

export const FreeWithAvatar: Story = {
  name: 'Free - With Avatar',
  parameters: {
    mockApi: () => ({
      currentUser: {
        avatar: true,
      },
    }),
  },
}

export const NoTrialAvailable: Story = {
  name: 'Free - No Trial Available',
  parameters: {
    mockApi: () => ({
      currentUser: {
        isEligibleForSanbaseTrial: false,
      },
    }),
  },
}

export const EligibleForSanbaseTrial: Story = {
  name: 'Free - Trial Available',

  parameters: {
    mockApi: () => ({
      currentUser: {
        isEligibleForSanbaseTrial: true,
      },
    }),
  },
}

export const Pro: Story = {
  name: 'Pro',

  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: {
          pro: true,
          monthly: true,
          trial: false,
        },
      },
    }),
  },
}
export const ProOnTrial: Story = {
  name: 'Pro - On trial',

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

export const BusinessPro: Story = {
  name: 'Business Pro',

  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: {
          businessPro: true,
          monthly: true,
        },
      },
    }),
  },
}
