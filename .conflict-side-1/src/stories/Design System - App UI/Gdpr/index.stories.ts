import type { Meta, StoryObj } from '@storybook/svelte'
import Component from './index.svelte'

const meta = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
    sveltekit_experimental: {
      stores: {
        page: {
          url: new URL(window.location.origin),
        },
      },
    },
  },
} satisfies Meta<Component>

type Story = StoryObj<typeof meta>

export default meta

export const GdprWithUsernamePolicyNotAccepted: Story = {
  name: 'Gdpr with username',
  parameters: {
    mockApi: () => ({
      currentUser: {
        username: 'username',
        privacyPolicyAccepted: false,
      },
    }),
  },
}

export const GdprWithoutUsernamePolicyNotAccepted: Story = {
  name: 'Gdpr without username',
  parameters: {
    mockApi: () => ({
      currentUser: {
        username: null,
        privacyPolicyAccepted: false,
      },
    }),
  },
}
