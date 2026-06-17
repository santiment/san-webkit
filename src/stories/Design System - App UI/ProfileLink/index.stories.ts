import type { Meta, StoryObj } from '@storybook/svelte'
import Component from './index.svelte'

const meta = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Component>

type Story = StoryObj<typeof meta>

export default meta

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

export const FreeWithoutAvatar: Story = {
  name: 'Free - Without Avatar',
  parameters: {
    mockApi: () => ({
      currentUser: {
        avatar: false,
      },
    }),
  },
}

export const Pro: Story = {
  name: 'Pro',

  parameters: {
    mockApi: () => ({
      currentUser: {
        avatar: true,
        plan: {
          pro: true,
          monthly: true,
          trial: false,
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
        avatar: true,
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
        avatar: true,
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
        avatar: true,
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
        avatar: true,
        plan: {
          custom: true,
          monthly: true,
        },
      },
    }),
  },
}
