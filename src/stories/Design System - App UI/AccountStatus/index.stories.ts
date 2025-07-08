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
  parameters: {
    mockApi: () => ({
      currentUser: null,
    }),
  },
}

export const FreeTrial: Story = {
  name: 'Free - Trial is available',
  parameters: {
    mockApi: () => ({
      currentUser: {
        isEligibleForSanbaseTrial: true,
      },
    }),
  },
}

export const FreeNoTrial: Story = {
  name: 'Free - Trial is not available',
  parameters: {
    mockApi: () => ({
      currentUser: {
        isEligibleForSanbaseTrial: false,
      },
    }),
  },
}

export const SanbasePro: Story = {
  name: 'Sanbase Pro',
  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: { pro: true, yearly: true },
      },
    }),
  },
}

export const ProPlus: Story = {
  name: 'Sanbase Pro+ (Deprecated)',
  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: { proPlus: true, yearly: true },
      },
    }),
  },
}

export const SanbaseMax: Story = {
  name: 'Sanbase Max',
  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: { max: true, yearly: true },
      },
    }),
  },
}

export const BusinessPro: Story = {
  name: 'Business Pro',
  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: { businessPro: true, yearly: true },
      },
    }),
  },
}

export const BusinessMax: Story = {
  name: 'Business Max',
  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: { businessMax: true, yearly: true },
      },
    }),
  },
}

export const Enterprise: Story = {
  name: 'Enterprise',
  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: { custom: true, yearly: true },
      },
    }),
  },
}

export const CustomEnterprise: Story = {
  name: 'Custom Enterprise',
  parameters: {
    mockApi: () => ({
      currentUser: {
        plan: { name: 'CUSTOM_BUSINESS_MAX_PRO_ULTRA_3M', yearly: true },
      },
    }),
  },
}
