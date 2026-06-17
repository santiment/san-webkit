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

export const Max: Story = {
  name: 'Max',

  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: {
          max: true,
          monthly: true,
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

export const BusinessMax: Story = {
  name: 'Business Max',

  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: {
          businessMax: true,
          monthly: true,
        },
      },
    }),
  },
}

export const BusinessMaxTrialBypass: Story = {
  name: 'Business Max (Trial Bypass by hand)',

  parameters: {
    mockApi: () => ({
      currentUser: {
        isEligibleForSanbaseTrial: true,
        plan: {
          businessMax: true,
          monthly: true,
        },
      },
    }),
  },
}

export const Enterprise: Story = {
  name: 'Enterprise',

  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: {
          custom: true,
          monthly: true,
        },
      },
    }),
  },
}

export const CustomEnterprise: Story = {
  name: 'Custom Enterprise',

  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: {
          name: 'CUSTOM_BUSINESS_MAX_PRO_ULTRA_3M',
          monthly: true,
        },
      },
    }),
  },
}
