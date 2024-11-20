import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'
import { MOCKED_PLANS_API } from './plans.js'

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
      ...MOCKED_PLANS_API,
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
      ...MOCKED_PLANS_API,
    }),
  },
}

export const EligibleForSanbaseTrial: Story = {
  name: 'Free - Trial Available',

  parameters: {
    mockApi: () => ({
      ...MOCKED_PLANS_API,
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
      ...MOCKED_PLANS_API,
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
      ...MOCKED_PLANS_API,
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

export const MaxOnTrial: Story = {
  name: 'Max - On trial',

  parameters: {
    mockApi: () => ({
      ...MOCKED_PLANS_API,
      currentUser: {
        plan: {
          max: true,
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
      ...MOCKED_PLANS_API,
      currentUser: {
        plan: {
          businessPro: true,
          monthly: true,
        },
      },
    }),
  },
}

export const BusinessMax: Story = {
  name: 'Business Max',

  parameters: {
    mockApi: () => ({
      ...MOCKED_PLANS_API,
      currentUser: {
        plan: {
          businessMax: true,
          monthly: true,
        },
      },
    }),
  },
}

export const Enterprise: Story = {
  name: 'Enterprise - Monthly',

  parameters: {
    mockApi: () => ({
      ...MOCKED_PLANS_API,
      currentUser: {
        plan: { custom: true, monthly: true },
      },
    }),
  },
}

export const EnterpriseYearly: Story = {
  name: 'Enterprise - Yearly',

  parameters: {
    mockApi: () => ({
      ...MOCKED_PLANS_API,
      currentUser: {
        plan: { custom: true, yearly: true },
      },
    }),
  },
}
