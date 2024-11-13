import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>

type Story = StoryObj<component>

export default meta

export const Gdpr: Story = {
  name: 'No username, policy not accepted',
  parameters: {
    mockApi: () => ({
      currentUser: {
        username: null,
        privacyPolicyAccepted: false,
      },
    }),
  },
}

export const Gdpr2: Story = {
  name: 'Username set, policy not accepted',
  parameters: {
    mockApi: () => ({
      currentUser: {
        username: 'username',
        privacyPolicyAccepted: false,
      },
    }),
  },
}
