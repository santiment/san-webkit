import type { Meta, StoryObj } from '@storybook/svelte'
import ConnectWallet from './ConnectWallet.svelte'

const meta = {
  component: ConnectWallet,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<ConnectWallet>
type Story = StoryObj<ConnectWallet>

export default meta

export const ConnectWalletButton: Story = {}
