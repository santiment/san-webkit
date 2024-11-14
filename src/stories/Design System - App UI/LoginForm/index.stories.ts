import type { Meta, StoryObj } from '@storybook/svelte'
import ConnectWallet from './ConnectWallet.svelte'
import Gdpr from './Gdpr.svelte'

const meta = {
  component: ConnectWallet,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<ConnectWallet>
type Story = StoryObj<ConnectWallet>

export default meta

export const ConnectWalletButton: Story = {}

export const GdprWithoutUsernamePolicyNotAccepted: Story = {
  name: 'Gdpr - no username, policy not accepted',
  render: () => ({ Component: Gdpr }),
  parameters: {
    mockApi: () => ({
      currentUser: {
        username: null,
        privacyPolicyAccepted: false,
      },
    }),
  },
}

export const GdprWithUsernamePolicyNotAccepted: Story = {
  name: 'Gdpr - username set, policy not accepted',
  render: () => ({ Component: Gdpr }),
  parameters: {
    mockApi: () => ({
      currentUser: {
        username: 'username',
        privacyPolicyAccepted: false,
      },
    }),
  },
}
